import PokemonList from '../components/pokemonList';
import MainTypesLabel from '../components/mainTypesLabel';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {/* 타이틀 */}
      {/* <header className='flex relative justify-center w-full items-center border-2 rounded-xl mx-10 my-5 p-5 text-5xl $  bg-red-400 text-white'>
        <h2>포켓몬</h2>
        <div className='absolute bottom-0 right-10 text-xl'>1242 마리</div>
      </header> */}
      {/* 타입리스트 */}
      <MainTypesLabel />
      {/* 리스트 */}
      <Suspense>
        <PokemonList />
      </Suspense>
    </div>
  );
};

export default HomePage;
