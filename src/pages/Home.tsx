import { useQuery } from '@tanstack/react-query';
import { getPoketmonListAll } from '../apis/pokemon/pkemonList';

const Home = () => {
  const { data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPoketmonListAll({ pageParam }),
  });

  return (
    <div className='border-2 h-screen'>
      {/* 타이틀 */}
      <div className='flex justify-center'>
        <div className='text-3xl'>포켓몬</div>
        <input className='border-2' />
        <button className='bg-indigo-300 '>검색</button>
      </div>
      {/* 리스트 */}
      {data &&
        data?.results.map((poke) => (
          <div key={poke.name}>
            <div>{poke.name}</div>
          </div>
        ))}
    </div>
  );
};

export default Home;
