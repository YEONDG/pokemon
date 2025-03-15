import { getPokemonInfoWithId, getPokemonSpec } from "@/apis/pokemon/pokemon";
import DefaultInfo from "@/components/detail/default-info";
import { DetailHeader } from "@/components/detail/detail-header";
import { PokemonImageSection } from "@/components/detail/pokemon-image-section";
import { PokemonImagesSection } from "@/components/detail/pokemon-images-section";
import useScrollToTop from "@/hooks/useScrollToTop";
import { PokemonDetailType, PokemonSpecies } from "@/types";
import { pokemonImgSrc } from "@/utils/path";
import { useQuery } from "@tanstack/react-query";
import { Suspense, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const PokemonDetailPage = () => {
  useScrollToTop();

  const { name: Id } = useParams();

  const { data: pokemonInfo } = useQuery<PokemonDetailType, Error>({
    queryKey: ["pokemonInfo", `${Id}`],
    queryFn: () => getPokemonInfoWithId(Id),
    enabled: !!Id,
    staleTime: Infinity,
  });

  const pokemonName = pokemonInfo?.species?.name;

  const { data: pokemonSpeciesInfo } = useQuery<PokemonSpecies, Error>({
    queryKey: ["pokemonSpec", `${pokemonName}`],
    queryFn: () => getPokemonSpec(pokemonName),
    enabled: !!pokemonName,
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

  const LoadingFallback = () => (
    <div className="p-4 text-center">로딩 중...</div>
  );

  return (
    <>
      <Helmet>
        <title>{pokemonDisplayName || "포켓몬 정보"}</title>
      </Helmet>

      <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center">
        <DetailHeader type={type} name={pokemonDisplayName} />

        <main className="mt-10 flex w-full flex-col items-center justify-center gap-5">
          <PokemonImageSection
            imgSrc={imgSrc}
            types={pokemonInfo?.types || null}
          />
          <Suspense fallback={<LoadingFallback />}>
            <section className="w-full">
              <DefaultInfo pokemonInfo={pokemonInfo} />
            </section>
            <PokemonImagesSection
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
