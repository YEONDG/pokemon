import { useStore } from "@/store/store";
import {
  clearLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/localStorage";
import { filterPokemon } from "@/utils/pokemonFilter";
import { AnimatePresence, motion } from "framer-motion";
import debounce from "lodash/debounce";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

import { PokemonCard } from "../../pokemon-card";
import { SearchButtons } from "./search-btns";

type PokemonName = {
  englishName: string;
  koreanName: string;
};

const SEARCH_QUERY_KEY = "searchQuery";
const SEARCH_RESULTS_KEY = "searchResults";

// 애니메이션 변수 정의
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 0, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

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

  const handleSearchClick = useCallback(() => {
    debouncedSearch(query);
  }, [debouncedSearch, query]);

  const handleClearClick = useCallback(() => {
    setQuery("");
    clearSearchResults();
  }, [clearSearchResults]);

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex items-center justify-start gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded-lg border-2 border-gray-500 p-2 text-black focus:border-blue-500 focus:outline-none"
          value={query}
          onChange={handleChange}
        />
        <SearchButtons
          onSearch={handleSearchClick}
          onClear={handleClearClick}
        />
      </div>

      <AnimatePresence mode="wait">
        {results.length > 0 && (
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-2 sm:grid-cols-4"
          >
            {results.map((pokemon) => (
              <motion.li
                key={pokemon.englishName}
                variants={item}
                layout
                exit={{ opacity: 0.2, transition: { duration: 0.2 } }}
              >
                <PokemonCard name={pokemon.englishName} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
