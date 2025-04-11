import { PokemonCard } from "@/components/home/card/pokemon-card";
import { ANIMATIONS } from "@/constants/animations";
import { AnimatePresence, motion } from "framer-motion";

import { SearchPokemonResult } from "./search-bar";

interface SearchResultsProps {
  results: SearchPokemonResult[];
}

export const SearchResults = ({ results }: SearchResultsProps) => {
  if (results.length === 0) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.ul
        variants={ANIMATIONS.container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-2 sm:grid-cols-4"
      >
        {results.map((pokemon) => (
          <motion.li
            key={pokemon.englishName}
            variants={ANIMATIONS.item}
            layout
            exit={{ opacity: 0.2, transition: { duration: 0.2 } }}
          >
            <PokemonCard name={pokemon.englishName} />
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};
