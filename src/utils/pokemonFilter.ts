import pokemonData from "@/data/pokemon_data.json";
import { PokemonJSONData } from "@/types";
import { getChoseong } from "es-hangul";

type PokemonName = {
  englishName: string;
  koreanName: string;
};

export const filterPokemon = (searchQuery: string): PokemonName[] => {
  const lowerCaseQuery = searchQuery.toLowerCase();

  return Object.entries(pokemonData as PokemonJSONData)
    .filter(([key, value]) => {
      const lowerCaseKey = key.toLowerCase();
      const choseongValue = getChoseong(value);
      const choseongQuery = getChoseong(searchQuery);

      return (
        value.includes(searchQuery) ||
        choseongValue.includes(choseongQuery) ||
        lowerCaseKey.includes(lowerCaseQuery)
      );
    })
    .map(([key, value]) => ({
      englishName: key,
      koreanName: value,
    }));
};
