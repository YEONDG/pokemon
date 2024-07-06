import { PokemonBasic } from "@/types";
import { typeBgColor } from "@/utils/typeColor";
import { typeConverter } from "@/utils/typeConverter";
import React from "react";

interface TypeLabelProps {
  types: PokemonBasic;
}

export const PokemonTypeLabel: React.FC<TypeLabelProps> = ({ types }) => {
  const typeName = types.name;
  const translatedTypeName = typeConverter[typeName];

  return (
    <div
      className={`flex w-full items-center justify-center rounded-md ${typeBgColor[typeName]}`}
    >
      <div className="text-center text-xl font-bold text-white">
        {translatedTypeName}
      </div>
    </div>
  );
};
