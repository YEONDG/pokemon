import PokemonList from '../components/pokemonList';
import { Suspense } from 'react';
import PokemonListUi from '../components/pokemonListUi';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {/* 타이틀 */}
      <div className='flex justify-center my-10'>
        <div className='text-3xl'>포켓몬</div>
        <input className='border-2' />
        <button className='bg-indigo-300 '>검색</button>
      </div>
      {/* 리스트 */}
      {/* <Suspense fallback={<PokemonListUi />}> */}
      <PokemonList />
      {/* </Suspense> */}
    </div>
  );
};

export default Home;
