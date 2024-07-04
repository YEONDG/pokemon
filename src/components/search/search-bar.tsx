import pokemonData from "@/data/pokemon_data.json";
import { debounce } from "lodash";
import { ChangeEvent, useCallback, useState } from "react";

import { PokemonCard } from "../pokemonCard";

type PokemonName = {
  englishName: string;
  koreanName: string;
};

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PokemonName[]>([]);

  const handleSearch = useCallback(
    debounce((searchQuery: string) => {
      if (searchQuery) {
        const filteredResults: PokemonName[] = Object.entries(pokemonData)
          .filter(([, value]) => value.includes(searchQuery))
          .map(([key, value]) => ({
            englishName: key,
            koreanName: value,
          }));
        setResults(filteredResults);
      } else {
        setResults([]);
      }
    }, 300),
    [],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);
    handleSearch(searchQuery);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-lg border-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        value={query}
        onChange={handleChange}
      />
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {results.map((pokemon) => (
          <li key={pokemon.englishName}>
            <PokemonCard name={pokemon.englishName} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
