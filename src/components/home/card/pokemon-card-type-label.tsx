import { PokemonDetailType } from "@/types";

import { PokemonTypeLabel } from "./pokemon-type-label";

interface PokemonTypeLabelProps {
  types: PokemonDetailType["types"];
}

const PokemonCardTypeLabel = ({ types }: PokemonTypeLabelProps) => {
  return (
    <div className="flex w-full flex-wrap gap-2 p-2 sm:flex-nowrap">
      {types?.map((type) => (
        <PokemonTypeLabel key={type.slot} types={type.type} />
      ))}
    </div>
  );
};

export default PokemonCardTypeLabel;
