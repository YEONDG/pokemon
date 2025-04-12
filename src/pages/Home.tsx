import ErrorBoundaryWrapper from "@/components/error-boundary-wrapper";
import SearchBar from "@/components/home/search/search-bar";
import { PokemonListSkeleton } from "@/components/skeleton/pokemon-list-skeleton";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

const PokemonList = lazy(() => import("@/components/home/pokemon-list"));
const PokemonTypeNav = lazy(
  () => import("@/components/home/type-nav/pokemon-type-nav"),
);

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>포켓몬 도감</title>
        <meta
          name="description"
          content="포켓몬 정보를 제공하는 웹사이트입니다. 다양한 포켓몬의 타입, 능력치, 진화 정보 등을 확인할 수 있습니다."
        />
      </Helmet>
      <div className="flex h-full flex-col items-center justify-center">
        {/* 타입리스트 */}
        <PokemonTypeNav />

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
