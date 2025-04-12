import { PokemonDetailType } from "../types";

export const pokemonImgSrc = (pokemonInfo: PokemonDetailType) => {
  // 애니메이션 이미지 (1순위)
  const animatedImage =
    pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]?.animated
      ?.front_default;

  // 기본 이미지 (2순위)
  const defaultImage = pokemonInfo?.sprites?.front_default;

  // 공식 아트워크 이미지 (3순위)
  const officialArtwork =
    pokemonInfo?.sprites?.other?.["official-artwork"].front_default;

  // 우선순위대로 이미지 반환
  return animatedImage || defaultImage || officialArtwork;
};
