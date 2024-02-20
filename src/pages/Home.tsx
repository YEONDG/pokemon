import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import { Helmet } from 'react-helmet-async';

import { PokemonListUi } from '@/components/skeleton/pokemonListUi';
import { Button } from '@/components/ui/button';
import { MainTypesLabel } from '../components/mainTypesLabel';
import { PokemonList } from '../components/pokemonList';

const HomePage = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <>
      <Helmet>
        <title>포켓몬 도감</title>
      </Helmet>
      <div className='flex flex-col justify-center items-center h-fit'>
        {/* 타입리스트 */}
        <MainTypesLabel />
        {/* 리스트 */}
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div className='flex flex-col gap-10 h-screen justify-center items-center dark:text-white'>
              <p className='text-xl'>네트워크 에러가 발생했습니다.</p>
              <Button onClick={() => resetErrorBoundary()} size={'lg'}>
                재시도
              </Button>
            </div>
          )}
        >
          <Suspense fallback={<PokemonListUi />}>
            <PokemonList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default HomePage;
