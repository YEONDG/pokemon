import PokemonList from '../components/pokemonList';
import MainTypesLabel from '../components/mainTypesLabel';
import { Suspense } from 'react';
import PokemonListUi from '../components/pokemonListUi';

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {/* 타이틀 */}
      <div className='flex justify-center my-5 sm:my-10'>
        <div className='text-2xl md:text-3xl dark:text-slate-100'>포켓몬</div>
        {/* <input className='border-2' />
        <button className='bg-indigo-300 '>검색</button> */}
      </div>
      {/* 타입리스트 */}
      <MainTypesLabel />
      {/* 리스트 */}
      <Suspense fallback={<PokemonListUi />}>
        <PokemonList />
      </Suspense>
    </div>
  );
};

export default HomePage;
