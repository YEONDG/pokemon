import { getPokemonTypeWithName } from "@/apis/pokemon/pokemon";
import { PokemonCard } from "@/components/pokemonCard";
import { PokemonListUi } from "@/components/skeleton/pokemonListUi";
import { PokemonTypeList } from "@/types";
import { typeBgColor } from "@/utils/typeColor";
import { typeConverter } from "@/utils/typeConverter";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const PokemonTypePage = () => {
  const { type } = useParams();

  const { data: pokemonTypeList, isLoading } = useQuery<PokemonTypeList, Error>(
    {
      queryKey: ["type", `${type}`],
      queryFn: () => getPokemonTypeWithName(type),
      staleTime: Infinity,
    },
  );

  const pokemonCount = pokemonTypeList?.pokemon?.length;
  const pokemonType = type ? type : "normal";

  return (
    <>
      <section className="w-full">
        <header
          className={`relative mx-10 mt-5 flex items-center justify-center rounded-xl border-2 p-5 text-5xl ${typeBgColor[pokemonType]} text-white`}
        >
          <h2>{typeConverter[pokemonType]}</h2>
          <div className="absolute bottom-0 right-10 text-xl">
            {pokemonCount} 마리
          </div>
        </header>
        {isLoading ? (
          <PokemonListUi />
        ) : (
          <div className="grid w-full grid-cols-2 gap-4 p-10 sm:grid-cols-2 md:grid-cols-4">
            {pokemonTypeList?.pokemon?.map((item) => (
              <PokemonCard
                key={item?.pokemon?.name}
                name={item?.pokemon?.name}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default PokemonTypePage;
