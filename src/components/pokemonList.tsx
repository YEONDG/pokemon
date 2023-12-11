import React, { memo, useCallback, useState, useEffect, useRef } from 'react';

import PokemonCard from './pokemonCard';
import { FixedSizeList } from 'react-window';
import debounce from 'lodash/debounce';
import { useSuspenseInfinitePoke } from '@/hooks/useSuspenseInfinitePoke';

const MemoizedPokemonCard = memo(PokemonCard);

const PokemonList = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const listRef = useRef<FixedSizeList>(null);

  const { data, isError, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfinitePoke();

  const Row = useCallback(
    memo(({ index, style }: { index: number; style: React.CSSProperties }) => {
      const groupIndex = Math.floor(index / 4);
      const itemIndex = index % 4;
      const groupData = data?.pages?.[groupIndex];

      return (
        <div
          style={style}
          className='grid grid-cols-2 sm:grid-cols-4  sm:gap-2'
        >
          {[0, 1, 2, 3].map((subItemIndex) => {
            const subPokemon =
              groupData?.results?.[itemIndex * 4 + subItemIndex];

            return (
              <MemoizedPokemonCard
                key={subPokemon?.name}
                name={subPokemon?.name}
                url={subPokemon?.url}
              />
            );
          })}
        </div>
      );
    }),
    [data]
  );

  const loadMoreItems = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  const debouncedHandleScroll = useCallback(
    debounce(({ scrollOffset }) => {
      setScrollPosition(scrollOffset);
      localStorage.setItem('scrollPosition', scrollOffset.toString());
    }, 500),
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

  const itemCount = (data?.pages.length || 0) * 4;

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
