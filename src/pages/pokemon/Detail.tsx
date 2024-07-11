import { getPokemonInfoWithId, getPokemonSpec } from "@/apis/pokemon/pokemon";
import { PokemonTypeLabel } from "@/components/pokemon-type-label";
import { Img } from "@/components/ui/Img";
import useScrollToTop from "@/hooks/useScrollToTop";
import { PokemonDetailType, PokemonSpecies } from "@/types";
import { pokemonImgSrc } from "@/utils/path";
import { typeBgColor } from "@/utils/typeColor";
import { useQuery } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

// Lazy load components
const DefaultInfo = lazy(() => import("@/components/detail/default-info"));
const ImageDefaultContainer = lazy(
  () => import("@/components/detail/image-default-container"),
);
const ImageVersionsContainer = lazy(
  () => import("@/components/detail/Image-versions-container"),
);

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

  const imgSrc = pokemonInfo ? pokemonImgSrc(pokemonInfo) : "";

  const type = pokemonInfo ? pokemonInfo?.types[0]?.type.name : "normal";

  return (
    <>
      <Helmet>
        <title>
          {pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : null}
        </title>
      </Helmet>

      <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center">
        <header
          className={`relative mx-10 mt-5 flex items-center justify-center rounded-xl p-5 text-5xl ${typeBgColor[type]} w-full text-white`}
        >
          <h2 className="h-11">
            {pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : null}
          </h2>
        </header>

        <main className="mt-10 flex w-full flex-col items-center justify-center gap-5">
          <section className="flex h-64 w-72 flex-col items-center justify-end">
            <Img
              className={"mb-10 h-32 w-36"}
              alt="pokemon Img"
              lazy={true}
              src={imgSrc}
            />
            <div className="flex w-72">
              {pokemonInfo?.types?.map((type) => (
                <PokemonTypeLabel key={type.slot} types={type.type} />
              ))}
            </div>
          </section>
          <Suspense fallback={<div>Loading...</div>}>
            <section className="w-full">
              <DefaultInfo pokemonInfo={pokemonInfo} />
            </section>
            <section className="w-full">
              <ImageDefaultContainer sprites={pokemonInfo?.sprites} />
              <ImageVersionsContainer
                versions={pokemonInfo?.sprites?.versions}
              />
            </section>
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default PokemonDetailPage;
