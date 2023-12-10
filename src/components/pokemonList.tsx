import React, {
  memo,
  useCallback,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getPoketmonListAll } from '../apis/pokemon/pokemon';
import PokemonCard from './pokemonCard';
import { FixedSizeList } from 'react-window';
import debounce from 'lodash/debounce';

const MemoizedPokemonCard = memo(PokemonCard);

const PokemonList = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const listRef = useRef<FixedSizeList>(null);

  const { data, isError, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery({
      queryKey: ['pokemons'],
      queryFn: getPoketmonListAll,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;
        if (!next) return undefined;
        return Number(new URL(next).searchParams.get('offset'));
      },
      staleTime: Infinity,
    });

  const Row = useMemo(
    () =>
      memo(
        ({ index, style }: { index: number; style: React.CSSProperties }) => {
          const groupIndex = Math.floor(index / 4);
          const itemIndex = index % 4;
          const groupData = data?.pages[groupIndex];

          return (
            <div style={style} className='flex bg-red-50 sm:gap-4 pt-2'>
              <React.Fragment>
                {[0, 1, 2, 3].map((subItemIndex) => {
                  const subPokemon =
                    groupData?.results?.[itemIndex * 4 + subItemIndex];

                  return (
                    <React.Fragment key={subPokemon.name}>
                      <MemoizedPokemonCard
                        name={subPokemon.name}
                        url={subPokemon.url}
                      />
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            </div>
          );
        }
      ),
    [data]
  );

  const itemCount = (data?.pages.length || 0) * 4;

  const loadMoreItems = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  const debouncedHandleScroll = useCallback(
    debounce(({ scrollOffset }) => {
      console.log('Debounced Scroll Offset:', scrollOffset);
      setScrollPosition(scrollOffset);
      localStorage.setItem('scrollPosition', scrollOffset.toString());
    }, 500), // 디바운스 시간 (200ms)
    []
  );

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 스크롤 위치를 가져와서 적용
    if (data?.pages.length === 1) {
      setScrollPosition(0);
      localStorage.setItem('scrollPosition', '0');
    }
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      setScrollPosition(Number(savedScrollPosition));
    }
  }, [data?.pages]);

  useEffect(() => {
    // 마운트 후 스크롤 위치로 이동
    if (listRef.current && scrollPosition !== 0) {
      listRef.current.scrollTo(scrollPosition);
    }
  }, [scrollPosition]);

  if (isError) {
    return <div>에러발생했습니다.</div>;
  }

  return (
    <>
      <section className='w-full'>
        <FixedSizeList
          height={800}
          itemCount={itemCount}
          itemSize={400}
          width='100%'
          onScroll={debouncedHandleScroll}
          onItemsRendered={({ visibleStopIndex }) => {
            if (visibleStopIndex === itemCount - 1 && !isFetching) {
              loadMoreItems();
              console.log('실행');
            }
          }}
          ref={listRef}
        >
          {Row}
        </FixedSizeList>
      </section>
    </>
  );
};

export default PokemonList;
