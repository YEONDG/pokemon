import ErrorBoundaryWrapper from "@/components/error-boundary-wrapper";
import { MainTypesLabel } from "@/components/mainTypesLabel";
import { PokemonList } from "@/components/pokemonList";
import { SearchBar } from "@/components/search/search-bar";
import { PokemonListUi } from "@/components/skeleton/pokemonListUi";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <>
      <Helmet>
        <title>포켓몬 도감</title>
      </Helmet>
      <div className="flex h-fit flex-col items-center justify-center">
        {/* 타입리스트 */}
        <MainTypesLabel />
        {/* 서치바 */}
        <SearchBar />
        {/* 리스트 */}
        <ErrorBoundaryWrapper onReset={reset}>
          <Suspense fallback={<PokemonListUi />}>
            <PokemonList />
          </Suspense>
        </ErrorBoundaryWrapper>
      </div>
    </>
  );
};

export default HomePage;
