import ErrorBoundaryWrapper from "@/components/error-boundary-wrapper";
import SearchBar from "@/components/search/search-bar";
import { PokemonListSkeleton } from "@/components/skeleton/pokemon-list-skeleton";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

const PokemonList = lazy(() => import("@/components/pokemon-list"));
const MainTypesLabel = lazy(() => import("@/components/main-types-label"));

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>포켓몬 도감</title>
      </Helmet>
      <div className="flex h-full flex-col items-center justify-center">
        {/* 타입리스트 */}
        <ErrorBoundaryWrapper>
          <Suspense fallback={<div>Loading Types...</div>}>
            <MainTypesLabel />
          </Suspense>
        </ErrorBoundaryWrapper>
        {/* 서치바 */}
        <SearchBar />
        {/* 리스트 */}
        <ErrorBoundaryWrapper>
          <Suspense fallback={<PokemonListSkeleton />}>
            <PokemonList />
          </Suspense>
        </ErrorBoundaryWrapper>
      </div>
    </>
  );
};

export default HomePage;
