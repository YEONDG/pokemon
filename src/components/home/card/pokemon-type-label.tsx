import { PokemonBasic } from "@/types";
import { typeBgColor } from "@/utils/typeColor";
import { typeConverter } from "@/utils/typeConverter";
import { Link } from "react-router-dom";

interface TypeLabelProps {
  types: PokemonBasic;
}

export const PokemonTypeLabel = ({ types }: TypeLabelProps) => {
  const typeName = types.name;
  const translatedTypeName = typeConverter[typeName];

  return (
    <Link
      to={`/pokemon/type/${typeName}`}
      className={`flex w-full items-center justify-center rounded-md ${typeBgColor[typeName]} transition-transform duration-200 hover:scale-105 hover:shadow-lg`}
    >
      <div className="text-center text-sm font-bold text-white sm:text-xl">
        {translatedTypeName}
      </div>
    </Link>
  );
};
