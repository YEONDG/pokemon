import pokemonData from "@/data/pokemon_data.json";

type PokemonName = {
  englishName: string;
  koreanName: string;
};

export const filterPokemon = (searchQuery: string): PokemonName[] => {
  return Object.entries(pokemonData)
    .filter(
      ([key, value]) =>
        value.includes(searchQuery) || key.toLowerCase().includes(searchQuery),
    )
    .map(([key, value]) => ({
      englishName: key,
      koreanName: value,
    }));
};
