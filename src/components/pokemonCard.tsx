import { getPokemonInfoWithId, getPokemonSpec } from "@/apis/pokemon/pokemon";
import { PokemonDetailType, PokemonSpecies } from "@/types";
import { pokemonImgSrc } from "@/utils/path";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import { PokemonTypeLabel } from "./pokemonTypeLabel";

interface PokemonsProps {
  name: string;
}

export const PokemonCard = memo(({ name }: PokemonsProps) => {
  const { data: pokemonInfo } = useQuery<PokemonDetailType, Error>({
    queryKey: ["pokemonInfo", name],
    queryFn: () => getPokemonInfoWithId(name),
    enabled: !!name,
    staleTime: Infinity,
  });

  const { data: pokemonSpeciesInfo } = useQuery<PokemonSpecies, Error>({
    queryKey: ["pokemonSpec", pokemonInfo?.species?.name],
    queryFn: () => getPokemonSpec(pokemonInfo?.species?.name),
    enabled: !!pokemonInfo?.species?.name,
    staleTime: Infinity,
  });

  const imgSrc = pokemonInfo
    ? pokemonImgSrc(pokemonInfo) ?? undefined
    : undefined;

  return (
    <>
      <Link
        to={`/pokemon/${pokemonInfo?.id}`}
        className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border-2 shadow-md transition hover:bg-slate-400 hover:shadow-lg dark:bg-slate-400 sm:h-72"
      >
        <div className="flex h-full w-full flex-col items-center justify-end sm:h-full">
          <div className="hidden h-full dark:text-slate-100 sm:flex">
            {pokemonInfo?.id} {pokemonSpeciesInfo?.name}
          </div>
          <div className="flex h-24 w-full items-center justify-center sm:h-48">
            <LazyLoadImage
              alt={pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : ""}
              src={imgSrc}
              width={
                pokemonInfo?.sprites?.versions?.["generation-v"]?.[
                  "black-white"
                ]?.animated?.front_default
                  ? 80
                  : 120
              }
              height={120}
              className="object-contain"
            />
          </div>
          <div className="text-3xl font-semibold dark:text-slate-100">
            {pokemonSpeciesInfo?.names[2].name}
          </div>
          <div className="flex w-full gap-2 p-2">
            {pokemonInfo?.types?.map((type) => (
              <PokemonTypeLabel key={type.slot} types={type.type} />
            ))}
          </div>
        </div>
      </Link>
    </>
  );
});
