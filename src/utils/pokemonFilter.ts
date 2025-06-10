import pokemonData from "@/data/pokemon_data.json";
import { PokemonJSONData } from "@/types";
import { getChoseong } from "es-hangul";

type PokemonName = {
  englishName: string;
  koreanName: string;
};

const objEntriesPokemonData = Object.entries(pokemonData as PokemonJSONData);

const choseongOnlyRegex = /^[ㄱ-ㅎ]+$/;

export const filterPokemon = (searchQuery: string): PokemonName[] => {
  if (!searchQuery) {
    return [];
  }

  const lowerCaseQuery = searchQuery.toLowerCase();

  const isChoseongOnlySearch = choseongOnlyRegex.test(searchQuery);

  const data = objEntriesPokemonData
    .filter(([key, value]) => {
      const lowerCaseKey = key.toLowerCase();

      if (isChoseongOnlySearch) {
        const choseongValue = getChoseong(value);
        return (
          choseongValue.includes(searchQuery) ||
          lowerCaseKey.includes(lowerCaseQuery)
        );
      } else {
        // 완성형 단어 또는 영어로 검색할 경우 (초성 검색 비활성화)
        return (
          value.includes(searchQuery) || lowerCaseKey.includes(lowerCaseQuery)
        );
      }
    })
    .map(([key, value]) => ({
      englishName: key,
      koreanName: value,
    }));

  return data;
};
