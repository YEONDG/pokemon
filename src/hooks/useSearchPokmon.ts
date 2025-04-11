import { useStore } from "@/store/store";
import {
  clearLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/localStorage";
import { filterPokemon } from "@/utils/pokemonFilter";
import debounce from "lodash/debounce";
import { useCallback, useMemo, useState } from "react";

const SEARCH_QUERY_KEY = "searchQuery";
const SEARCH_RESULTS_KEY = "searchResults";

type SearchPokemonResult = {
  englishName: string;
  koreanName: string;
};

export const useSearchPokemon = () => {
  const [query, setQuery] = useState(() =>
    getLocalStorageItem(SEARCH_QUERY_KEY, ""),
  );
  const [results, setResults] = useState<SearchPokemonResult[]>(() =>
    getLocalStorageItem(SEARCH_RESULTS_KEY, []),
  );
  const setIsSearchActive = useStore((state) => state.setIsSearchActive);

  const updateSearchResults = useCallback(
    (searchQuery: string, filteredResults: SearchPokemonResult[]) => {
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
          const filteredResults: SearchPokemonResult[] =
            filterPokemon(searchQuery);
          updateSearchResults(searchQuery, filteredResults);
        } else {
          clearSearchResults();
        }
      }, 500),
    [updateSearchResults, clearSearchResults],
  );

  const handleChange = (value: string) => {
    const searchQuery = value.toLowerCase();
    setQuery(searchQuery);
    debouncedSearch(searchQuery);
  };

  const handleSearchClick = useCallback(() => {
    debouncedSearch(query);
  }, [debouncedSearch, query]);

  const handleClearClick = useCallback(() => {
    setQuery("");
    clearSearchResults();
  }, [clearSearchResults]);

  return {
    query,
    results,
    handleChange,
    handleSearchClick,
    handleClearClick,
  };
};
