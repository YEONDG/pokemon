import { typeBgColor } from "@/utils/typeColor";
import { PokemonType, typeConverter } from "@/utils/typeConverter";
import { memo } from "react";
import { Link } from "react-router-dom";

interface TypeItemProps {
  type: PokemonType;
}

export const TypeItem = memo(({ type }: TypeItemProps) => {
  return (
    <Link
      to={`pokemon/type/${type}`}
      className={` ${typeBgColor[type]} flex items-center justify-center rounded-lg px-2 py-1 text-center font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg sm:rounded-xl md:h-14 md:w-28 md:px-3 md:py-4`}
    >
      <div className="flex flex-col items-center">
        <span className="text-xs opacity-80">{type.toUpperCase()}</span>
        <span className="text-xs md:text-lg">{typeConverter[type]}</span>
      </div>
    </Link>
  );
});
