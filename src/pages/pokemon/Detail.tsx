import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  getPokemonWithId,
  getPokemonWithSpec,
} from '../../apis/pokemon/pokemon';

const PokemonDetail = () => {
  const { pathname } = useLocation();
  const name = pathname.split('/')[2];

  const { data: pokemonInfo } = useQuery({
    queryKey: [`${name}`, name],
    queryFn: () => getPokemonWithId(name),
    staleTime: 1000 * 60 * 60,
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: [`${name}Spec`, name],
    queryFn: () => getPokemonWithSpec(name),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <div className='flex flex-col justify-center items-center'>
      <img className='h-40 w-40' src={pokemonInfo?.sprites?.front_default} />
      <div>{pokemonSpeciesInfo?.names[2].name}</div>
    </div>
  );
};

export default PokemonDetail;
