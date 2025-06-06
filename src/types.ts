export type PokemonJSONData = {
  [key: string]: string;
};

export interface PokemonBasic {
  name: string;
  url: string;
}

export interface PokemonAll {
  count: number;
  next: string;
  previous?: string;
  results: PokemonBasic[];
}

export interface PokemonTypes {
  slot: number;
  type: PokemonBasic;
}

export interface PokemonAblities {
  ability: PokemonBasic;
  is_hidden: false;
  slot: number;
}

export interface PokemonLanguage {
  language: PokemonBasic;
}

export interface PokemonGameIndices {
  game_index: string;
  version: PokemonBasic;
}

export interface PokemonVersion {
  rarity: number;
  version: PokemonBasic;
}

export interface PokemonTypeBasic {
  pokemon: PokemonBasic;
  slot: number;
}

export interface PokemonTypeList {
  damage_relations: number;
  game_indices: [];
  generation: string;
  id: number;
  move_damage_class: string;
  move: [];
  name: string;
  names: PokemonName[];
  past_damage_relations: [];
  pokemon: PokemonTypeBasic[];
}

export interface PokemonName {
  language: PokemonBasic;
  name: string;
}

export interface PokemonGenera {
  genus: string;
  language: PokemonBasic;
}

export interface PokemonImgBasicType {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

export interface PokemonImgBasicFrontType {
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

export interface PokemonImgType extends PokemonImgBasicType {
  other: PokemonOther;
  versions: PokemonVersionsGeneration;
}

export interface PokemonVersionsImgType {
  back_default?: string;
  back_gray?: string;
  back_transparent?: string;
  front_default?: string;
  front_gray?: string;
  front_transparent?: string;
}

export interface PokemonVersionsImgWithAnimatedType
  extends PokemonVersionsImgType {
  animated: PokemonImgBasicType;
}

export interface PokemonVersionsGeneration {
  "generation-i": {
    "red-blue": PokemonVersionsImgType;
    yellow: PokemonVersionsImgType;
  };
  "generation-ii": {
    crystal: PokemonVersionsImgType;
    gold: PokemonVersionsImgType;
    silver: PokemonVersionsImgType;
  };
  "generation-iii": {
    emerald: PokemonVersionsImgType;
    "firered-leafgreen": PokemonVersionsImgType;
    "ruby-sapphire": PokemonVersionsImgType;
  };
  "generation-iv": {
    "diamond-pearl": PokemonVersionsImgType;
    "heartgold-soulsilver": PokemonVersionsImgType;
    platinum: PokemonVersionsImgType;
  };
  "generation-v": {
    "black-white": PokemonVersionsImgWithAnimatedType;
  };
  "generation-vi": {
    "omegaruby-alphasapphire": PokemonImgBasicFrontType;
    "x-y": PokemonImgBasicFrontType;
  };
  "generation-vii": { "ultra-sun-ultra-moon": PokemonImgBasicFrontType };
}

export interface PokemonOther {
  dream_world: {
    front_default?: string;
    front_female?: string;
  };
  home: {
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };
  "official-artwork": {
    front_default?: string;
    front_shiny?: string;
  };
}

export interface PokemonDetailType {
  abilities: PokemonAblities;
  base_experience: number;
  forms: PokemonBasic;
  game_indices: PokemonGameIndices;
  height: number;
  held_items: {
    items: PokemonBasic;
    version_details: PokemonVersion;
  };
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: PokemonBasic;
  sprites: PokemonImgType;
  stats: {
    base_stat: number;
    effort: number;
    stat: PokemonBasic;
  }[];
  types: PokemonTypes[];
  weight: number;
}

export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: PokemonBasic;
  pokedex_numbers: [];
  egg_groups: PokemonBasic;
  color: PokemonBasic;
  shape: PokemonBasic;
  evolves_from_species: PokemonBasic;
  evolution_chain: {
    url: string;
  };
  habitat: null;
  generation: PokemonBasic;
  names: PokemonName[];
  flavor_text_entries: [];
  form_descriptions: [];
  genera: PokemonGenera[];
  varieties: [];
}
