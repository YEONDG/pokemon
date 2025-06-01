export const pokemonQueryKeys = {
  list: () => ["pokemons"] as const,
  info: (name: string | undefined) => ["pokemonInfo", name] as const,
  species: (speciesName: string | undefined) =>
    ["pokemonSpec", speciesName] as const,
  type: (type: string | undefined) => ["type", type] as const,
};
