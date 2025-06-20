import { getPokemonInfoWithId, getPokemonSpec } from "@/apis/pokemon/pokemon";
import { pokemonQueryKeys } from "@/lib/queryKeys";
import { PokemonDetailType, PokemonSpecies } from "@/types";
import { pokemonImgSrc } from "@/utils/path";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { Link } from "react-router-dom";

import { PokemonCardHeader } from "./pokemon-card-header";
import { PokemonCardImage } from "./pokemon-card-image";
import { PokemonCardInfo } from "./pokemon-card-info";
import PokemonCardTypeLabel from "./pokemon-card-type-label";

interface PokemonsCardProps {
  name: string;
}

export const PokemonCard = memo(({ name }: PokemonsCardProps) => {
  const { data: pokemonInfo } = useQuery<PokemonDetailType, Error>({
    queryKey: pokemonQueryKeys.info(name),
    queryFn: () => getPokemonInfoWithId(name),
    enabled: !!name,
    staleTime: Infinity,
  });

  const speciesName = pokemonInfo?.species?.name;

  const { data: speciesInfo } = useQuery<PokemonSpecies, Error>({
    queryKey: pokemonQueryKeys.species(speciesName),
    queryFn: () => getPokemonSpec(speciesName),
    enabled: !!speciesName,
    staleTime: Infinity,
  });

  const imgSrc = pokemonInfo
    ? (pokemonImgSrc(pokemonInfo) ?? undefined)
    : undefined;
  const isAnimated =
    !!pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
      ?.animated?.front_default;

  if (!pokemonInfo || !speciesInfo) {
    return (
      <div className="h-72 w-full animate-pulse rounded-lg bg-gray-200"></div>
    );
  }

  const pokemonIdx = pokemonInfo?.id;
  const koreanName = speciesInfo.names[2].name;
  const englishName = speciesInfo?.name;

  return (
    <div className="flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-black shadow-md transition hover:border-blue-500 hover:bg-slate-300 hover:shadow-lg dark:border-white dark:bg-slate-800">
      <Link to={`/pokemon/${pokemonInfo?.id}`} className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-between sm:justify-end">
          <PokemonCardHeader id={pokemonIdx} name={englishName} />
          <PokemonCardImage
            alt={`${koreanName} image`}
            src={imgSrc}
            isAnimated={isAnimated}
          />
          <PokemonCardInfo name={koreanName} />
        </div>
      </Link>
      <PokemonCardTypeLabel types={pokemonInfo.types} />
    </div>
  );
});
