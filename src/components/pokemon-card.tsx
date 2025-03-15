import { getPokemonInfoWithId, getPokemonSpec } from "@/apis/pokemon/pokemon";
import { PokemonDetailType, PokemonSpecies } from "@/types";
import { pokemonImgSrc } from "@/utils/path";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import { PokemonTypeLabel } from "./pokemon-type-label";

interface PokemonsCardProps {
  name: string;
}

export const PokemonCard = memo(({ name }: PokemonsCardProps) => {
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

  if (!pokemonInfo || !pokemonSpeciesInfo) {
    return (
      <div className="h-72 w-full animate-pulse rounded-lg bg-gray-200"></div>
    );
  }
  return (
    <Link
      to={`/pokemon/${pokemonInfo?.id}`}
      className="flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-lg border-2 shadow-md transition hover:border-blue-500 hover:bg-slate-200 hover:shadow-lg dark:bg-slate-800"
    >
      <div className="flex h-full w-full flex-col items-center justify-end sm:h-full">
        <div className="hidden w-full px-2 dark:text-slate-100 sm:flex sm:justify-between">
          <div>{pokemonInfo?.id}</div>
          <div>{pokemonSpeciesInfo?.name}</div>
        </div>
        <div className="flex h-44 w-40 items-center justify-center">
          <LazyLoadImage
            alt={pokemonSpeciesInfo?.names[2].name}
            src={imgSrc}
            width={
              pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
                ?.animated?.front_default
                ? 120
                : 150
            }
            height={120}
            className="fixed-size object-cover"
          />
        </div>
        <div className="font-semi bold h-10 text-lg dark:text-slate-100 sm:text-3xl">
          {pokemonSpeciesInfo?.names[2].name}
        </div>
        <div className="flex w-full flex-wrap gap-2 p-1 sm:flex-nowrap">
          {pokemonInfo?.types?.map((type) => (
            <PokemonTypeLabel key={type.slot} types={type.type} />
          ))}
        </div>
      </div>
    </Link>
  );
});
