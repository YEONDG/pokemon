import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getPokemonTypeWithName } from '../../../apis/pokemon/pokemon';

const PokemonTypePage = () => {
  const { pathname } = useLocation();
  const type = pathname.split('/')[3];

  const { data: pokemonType } = useQuery({
    queryKey: [`type`, `${type}`],
    queryFn: () => getPokemonTypeWithName(type),
    staleTime: 1000 * 60 * 60,
  });

  console.log(pokemonType);
  return <div>{pokemonType?.name}</div>;
};

export default PokemonTypePage;
