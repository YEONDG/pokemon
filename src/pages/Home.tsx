import { useQuery } from '@tanstack/react-query';
import { getPoketmonListAll } from '../apis/pokemon/pokemon';
import Pokemons from '../components/pokemons';

const Home = () => {
  const { data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPoketmonListAll({}),
  });

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
          data?.results.map((poke) => (
            <Pokemons key={poke.url} name={poke.name} />
          ))}
      </div>
    </div>
  );
};

export default Home;
