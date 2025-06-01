import { getPokemonInfoWithId, getPokemonSpec } from "@/apis/pokemon/pokemon";
import { DetailHeader } from "@/components/detail/detail-header";
import { LoadingFallback } from "@/components/loading-fallback";
import useScrollToTop from "@/hooks/useScrollToTop";
import { pokemonQueryKeys } from "@/lib/queryKeys";
import { PokemonDetailType, PokemonSpecies } from "@/types";
import { pokemonImgSrc } from "@/utils/path";
import { useQuery } from "@tanstack/react-query";
import { lazy, Suspense, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const DefaultInfo = lazy(() => import("@/components/detail/default-info"));
const PokemonMainImage = lazy(
  () => import("@/components/detail/pokemon-main-image"),
);
const PokemonImageGallery = lazy(
  () => import("@/components/detail/pokemon-image-gallery"),
);

const PokemonDetailPage = () => {
  useScrollToTop();

  const { name: pokemonNameFromUrl } = useParams<{ name: string }>();

  const { data: pokemonInfo, isLoading: isPokemonLoading } = useQuery<
    PokemonDetailType,
    Error
  >({
    queryKey: pokemonQueryKeys.info(pokemonNameFromUrl),
    queryFn: () => getPokemonInfoWithId(pokemonNameFromUrl),
    enabled: !!pokemonNameFromUrl,
    staleTime: Infinity,
  });

  const speciesName = pokemonInfo?.species?.name;

  const { data: pokemonSpeciesInfo, isLoading: isSpeciesLoading } = useQuery<
    PokemonSpecies,
    Error
  >({
    queryKey: pokemonQueryKeys.species(speciesName),
    queryFn: () => getPokemonSpec(speciesName),
    enabled: !!speciesName,
    staleTime: Infinity,
  });

  const imgSrc = useMemo(
    () => (pokemonInfo ? pokemonImgSrc(pokemonInfo) : ""),
    [pokemonInfo],
  );

  const type = useMemo(
    () => pokemonInfo?.types?.[0]?.type.name || "normal",
    [pokemonInfo],
  );

  const pokemonDisplayName = pokemonSpeciesInfo?.names[2].name || null;
  const isLoading = isPokemonLoading || isSpeciesLoading;

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <>
      <Helmet>
        <title>{pokemonDisplayName}</title>
        <meta
          name="description"
          content={`${pokemonDisplayName}의 상세 정보 페이지입니다.`}
        />
      </Helmet>

      <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center">
        <DetailHeader type={type} name={pokemonDisplayName} />

        <main className="flex w-full flex-col items-center justify-center gap-5">
          <Suspense fallback={<LoadingFallback />}>
            <PokemonMainImage
              imgSrc={imgSrc}
              types={pokemonInfo?.types || null}
            />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <DefaultInfo pokemonInfo={pokemonInfo} />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <PokemonImageGallery
              sprites={pokemonInfo?.sprites || null}
              versions={pokemonInfo?.sprites?.versions || null}
            />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default PokemonDetailPage;
