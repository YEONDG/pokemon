import React, { useRef, useCallback } from 'react';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getPoketmonListAll } from '../apis/pokemon/pokemon';
import { PokemonAll } from '../types';
import PokemonCard from './pokemonCard';
import { FixedSizeList } from 'react-window';

const MemoizedPokemonCard = React.memo(PokemonCard);

const PokemonList = () => {
  const {
    data,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery<PokemonAll, Error>({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }) => getPoketmonListAll({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { next } = lastPage;
      if (!next) return undefined;
      return Number(new URL(next).searchParams.get('offset'));
    },
    staleTime: Infinity,
  });

  const Row = ({ index, style }) => {
    const groupIndex = Math.floor(index / 4);
    const itemIndex = index % 4;
    const groupData = data?.pages[groupIndex];
    const pokemon = groupData?.results?.[itemIndex];

    return (
      <div style={style} className='flex bg-red-50'>
        {pokemon && (
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
        )}
      </div>
    );
  };

  const itemCount = (data?.pages.length || 0) * 4;

  const listRef = useRef(null);

  const loadMoreItems = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching]);

  if (isError) {
    return <div>에러발생했습니다.{error.message}</div>;
  }

  return (
    <>
      <section className='w-full'>
        <FixedSizeList
          height={800}
          itemCount={itemCount}
          itemSize={400}
          width='100%'
          ref={listRef}
          onItemsRendered={({ visibleStopIndex }) => {
            if (visibleStopIndex === itemCount - 1) {
              loadMoreItems();
            }
          }}
        >
          {Row}
        </FixedSizeList>
      </section>
    </>
  );
};

export default PokemonList;
