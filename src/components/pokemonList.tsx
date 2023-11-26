import { useInfiniteQuery } from '@tanstack/react-query';
import { getPoketmonListAll } from '../apis/pokemon/pokemon';
import React from 'react';
import { useIntersect } from '../hooks/useIntersect';
import { PokemonAll } from '../types';
import PokemonCard from './pokemonCard';

const PokemonList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<PokemonAll, Error>({
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

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  if (error) {
    return <p>에러가 발생했습니다.</p>;
  }

  return (
    <>
      <section className='w-full'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 w-full p-10 gap-4'>
          {data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group?.results?.map((project) => (
                <PokemonCard key={project.name} name={project.name} />
              ))}
            </React.Fragment>
          ))}
        </div>
        <div ref={ref}></div>

        <div className='flex justify-center items-center '>
          {isFetching && !isFetchingNextPage ? <p>로딩중...</p> : null}
        </div>
      </section>
    </>
  );
};

export default PokemonList;
