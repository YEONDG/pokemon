import pokemonData from "@/data/pokemon_data.json";
import { useStore } from "@/store/store";
import debounce from "lodash/debounce";
import { ChangeEvent, useMemo, useState } from "react";

import { PokemonCard } from "../pokemonCard";

type PokemonName = {
  englishName: string;
  koreanName: string;
};

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PokemonName[]>([]);
  const setIsSearchActive = useStore((state) => state.setIsSearchActive);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchQuery: string) => {
        if (searchQuery) {
          const filteredResults: PokemonName[] = Object.entries(pokemonData)
            .filter(
              ([key, value]) =>
                value.includes(searchQuery) ||
                key.toLowerCase().includes(searchQuery),
            )
            .map(([key, value]) => ({
              englishName: key,
              koreanName: value,
            }));
          setResults(filteredResults);
          setIsSearchActive(true);
        } else {
          setResults([]);
          setIsSearchActive(false);
        }
      }, 500),
    [],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);
    debouncedSearch(searchQuery);
  };

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-lg border-2 border-gray-300 p-2 text-black focus:border-blue-500 focus:outline-none"
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
