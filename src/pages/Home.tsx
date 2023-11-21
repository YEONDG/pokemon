import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getPoketmonListAll } from '../apis/pokemon/pokemon';
import Pokemons from '../components/pokemons';
import React from 'react';

const Home = () => {
  // const { data } = useQuery({
  //   queryKey: ['pokemons'],
  //   queryFn: () => getPoketmonListAll({}),
  // });
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: getPoketmonListAll,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });
  console.log(data);
  console.log(hasNextPage);

  if (status === 'pending') {
    return <span>loading</span>;
  }

  return (
    <div className='container mx-auto flex flex-col border-2  justify-center items-center'>
      {/* 타이틀 */}
      <div className='flex justify-center my-10'>
        <div className='text-3xl'>포켓몬</div>
        <input className='border-2' />
        <button className='bg-indigo-300 '>검색</button>
      </div>
      {/* 리스트 */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-2'>
        {data &&
          data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group?.results?.map((project) => (
                <Pokemons key={project.id} name={project.name} />
              ))}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Home;
