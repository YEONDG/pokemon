import { useSearchPokemon } from "@/hooks/useSearchPokmon";
import { ChangeEvent } from "react";

import { SearchButtons } from "./search-btns";
import { SearchResults } from "./search-results";

export type SearchPokemonResult = {
  englishName: string;
  koreanName: string;
};

export const SearchBar = () => {
  const { query, results, handleChange, handleSearchClick, handleClearClick } =
    useSearchPokemon();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex items-center justify-start gap-2">
        <label htmlFor="pokemon-search" className="sr-only">
          포켓몬 검색
        </label>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded-lg border-2 border-gray-500 p-2 text-black focus:border-blue-500 focus:outline-none dark:bg-gray-200"
          value={query}
          onChange={onInputChange}
        />
        <SearchButtons
          onSearch={handleSearchClick}
          onClear={handleClearClick}
        />
      </div>

      <SearchResults results={results} />
    </div>
  );
};

export default SearchBar;
