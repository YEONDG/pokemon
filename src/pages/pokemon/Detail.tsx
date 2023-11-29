import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  getPokemonInfoWithId,
  getPokemonWithSpec,
} from '../../apis/pokemon/pokemon';

const PokemonDetail = () => {
  const { name } = useParams();

  const { data: pokemonInfo } = useQuery({
    queryKey: ['pokemonInfo', `${name}`],
    queryFn: () => getPokemonInfoWithId(name),
    staleTime: 1000 * 60 * 60,
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: ['pokemonSpec', `${name}`],
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
