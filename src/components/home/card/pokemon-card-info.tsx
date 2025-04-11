import { PokemonDetailType } from "@/types";

import { PokemonTypeLabel } from "./pokemon-type-label";

interface PokemonCardInfoProps {
  name: string;
  types: PokemonDetailType["types"];
}

export const PokemonCardInfo = ({ name, types }: PokemonCardInfoProps) => {
  return (
    <div className="w-full">
      <h2 className="h-10 truncate text-center text-lg font-semibold dark:text-slate-100 sm:text-2xl">
        {name}
      </h2>

      <div className="flex w-full flex-wrap gap-2 p-2 sm:flex-nowrap">
        {types?.map((type) => (
          <PokemonTypeLabel key={type.slot} types={type.type} />
        ))}
      </div>
    </div>
  );
};
