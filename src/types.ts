export interface PokemonBasic {
  name: string;
  url: string;
}

export interface PokemonAll {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonBasic[];
}

export interface PokemonType {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonBasic[];
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

export interface PokemonTypeList {
  damage_relations: number;
  game_indices: [];
  generation: string;
  id: number;
  move_damage_class: string;
  move: [];
  name: string;
  names: PokemonName[];
}

export interface PokemonName {
  language: PokemonBasic;
  name: string;
}

export interface PokemonGenera {
  genus: string;
  language: PokemonBasic;
}

export interface PokemonImgType {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: PokemonOther;
  versions: PokemonVersionsGeneration;
}

export interface PokemonVersionsGeneration {
  'generation-i': { 'red-blue': PokemonImgType; yellow: PokemonImgType };
  'generation-ii': {
    crystal: PokemonImgType;
    gold: PokemonImgType;
    silver: PokemonImgType;
  };
  'generation-iii': {
    emerald: PokemonImgType;
    'firered-leafgreen': PokemonImgType;
    'ruby-sapphire': PokemonImgType;
  };
  'generation-iv': {
    'diamond-pearl': PokemonImgType;
    'heartgold-soulsilver': PokemonImgType;
    platinum: PokemonImgType;
  };
  'generation-v': {
    'black-white': { animated: PokemonImgType; front_default: string };
  };
  'generation-vi': {
    'omegaruby-alphasapphire': PokemonImgType;
    'x-y': PokemonImgType;
  };
  'generation-vii': { 'ultra-sun-ultra-moon': PokemonImgType };
}

export interface PokemonOther {
  dream_world: {
    front_default: string | null;
    front_female: string | null;
  };
  home: {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  'official-artwork': {
    front_default: string | null;
    front_shiny: string | null;
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
  };
  types: PokemonType[];
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
