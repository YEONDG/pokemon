import { PokemonDetailType } from '../types';

export const pokemonImgSrc = (pokemonInfo: PokemonDetailType): string => {
  return (
    pokemonInfo?.sprites?.versions?.['generation-v']?.['black-white']?.animated
      ?.front_default ??
    pokemonInfo?.sprites?.front_default ??
    pokemonInfo?.sprites?.other?.['official-artwork'].front_default
  );
};
