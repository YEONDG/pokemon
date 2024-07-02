import { PokemonBasic } from "@/types";
import { typeBgColor } from "@/utils/typeColor";
import { typeConverter } from "@/utils/typeConverter";
import React from "react";

interface typeLabelProps {
  types: PokemonBasic;
}

export const PokemonTypeLabel: React.FC<typeLabelProps> = ({ types }) => {
  const typeName = types.name;
  const translatedTypeName = typeConverter[typeName];

  return (
    <div
      className={`flex w-full items-center justify-center rounded-md ${typeBgColor[typeName]}`}
    >
      <div className="text-xl font-bold text-white">{translatedTypeName}</div>
    </div>
  );
};
