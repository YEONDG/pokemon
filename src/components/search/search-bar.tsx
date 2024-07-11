import { useStore } from "@/store/store";
import {
  clearLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/localStorage";
import { filterPokemon } from "@/utils/pokemonFilter";
import debounce from "lodash/debounce";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

import { PokemonCard } from "../pokemon-card";
import { Button } from "../ui/button";

type PokemonName = {
  englishName: string;
  koreanName: string;
};

const SEARCH_QUERY_KEY = "searchQuery";
const SEARCH_RESULTS_KEY = "searchResults";

export const SearchBar = () => {
  const [query, setQuery] = useState(() =>
    getLocalStorageItem(SEARCH_QUERY_KEY, ""),
  );
  const [results, setResults] = useState<PokemonName[]>(() =>
    getLocalStorageItem(SEARCH_RESULTS_KEY, []),
  );
  const setIsSearchActive = useStore((state) => state.setIsSearchActive);

  const updateSearchResults = useCallback(
    (searchQuery: string, filteredResults: PokemonName[]) => {
      setResults(filteredResults);
      setLocalStorageItem(SEARCH_QUERY_KEY, searchQuery);
      setLocalStorageItem(SEARCH_RESULTS_KEY, filteredResults);
      setIsSearchActive(true);
    },
    [setIsSearchActive],
  );

  const clearSearchResults = useCallback(() => {
    setResults([]);
    clearLocalStorageItem(SEARCH_QUERY_KEY);
    clearLocalStorageItem(SEARCH_RESULTS_KEY);
    setIsSearchActive(false);
  }, [setIsSearchActive]);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchQuery: string) => {
        if (searchQuery) {
          const filteredResults: PokemonName[] = filterPokemon(searchQuery);
          updateSearchResults(searchQuery, filteredResults);
        } else {
          clearSearchResults();
        }
      }, 500),
    [updateSearchResults, clearSearchResults],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);
    debouncedSearch(searchQuery);
  };

  const handleSearchClick = () => {
    debouncedSearch(query);
  };

  const handleClearClick = () => {
    setQuery("");
    clearSearchResults();
  };

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded-lg border-2 border-gray-300 p-2 text-black focus:border-blue-500 focus:outline-none"
          value={query}
          onChange={handleChange}
        />
        <Button onClick={handleSearchClick}>검색</Button>
        <Button onClick={handleClearClick}>전체목록</Button>
      </div>
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
