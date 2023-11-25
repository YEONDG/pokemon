import {
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';
import { getPoketmonListAll } from '../apis/pokemon/pokemon';
import Pokemons from '../components/pokemons';
import React from 'react';
import { useIntersect } from '../hooks/useIntersect';
import Spinner from './ui/Spinner';

const PokemonList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isPending,
  } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: getPoketmonListAll,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const { next } = lastPage;
      if (!next) return undefined;
      return Number(new URL(next).searchParams.get('offset'));
    },
    staleTime: 1000 * 60 * 60,
  });

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });
  console.log(data);

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  gap-2 '>
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group?.results?.map((project) => (
              <Pokemons key={project.id} name={project.name} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div ref={ref}></div>

      <div className='flex justify-center items-center h-screen '>
        {isFetching && !isFetchingNextPage ? <Spinner /> : null}
      </div>
    </>
  );
};

export default PokemonList;
