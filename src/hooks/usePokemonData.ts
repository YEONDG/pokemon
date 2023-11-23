import { useQuery } from '@tanstack/react-query';
import { getPokemonWithId, getPokemonWithSpec } from '../apis/pokemon/pokemon';

const usePokemonData = (name: string) => {
  const { data: pokemonInfo } = useQuery({
    queryKey: [`${name}`],
    queryFn: () => getPokemonWithId(name),
    enabled: !!name,
    staleTime: 1000 * 60 * 60,
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: [`${name}Spec`],
    queryFn: () => getPokemonWithSpec(name),
    enabled: !!name,
    staleTime: 1000 * 60 * 60,
  });

  return { pokemonInfo, pokemonSpeciesInfo };
};

export default usePokemonData;
