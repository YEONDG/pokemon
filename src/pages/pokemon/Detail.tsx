import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  getPokemonInfoWithId,
  getPokemonSpec,
  getPokemonSpecWithUrl,
  getPokemonWithSpec,
} from '../../apis/pokemon/pokemon';
import { pokemonImgSrc } from '../../utils/path';
import { PokemonDetailType, PokemonSpecies } from '../../types';
import Img from '../../components/ui/Img';

const PokemonDetailPage = () => {
  const { name } = useParams();

  const { data: pokemonInfo } = useQuery<PokemonDetailType, Error>({
    queryKey: ['pokemonInfo', `${name}`],
    queryFn: () => getPokemonInfoWithId(name),
    enabled: !!name,
    staleTime: Infinity,
  });

  const { data: pokemonSpeciesInfo } = useQuery<PokemonSpecies, Error>({
    queryKey: ['pokemonSpec', `${pokemonInfo?.species?.name}`],
    queryFn: () => getPokemonSpec(pokemonInfo?.species?.name),
    enabled: !!pokemonInfo?.species?.name,
    staleTime: Infinity,
  });

  const imgSrc = pokemonInfo ? pokemonImgSrc(pokemonInfo) : '';

  return (
    <div className='flex flex-col justify-center items-center'>
      <Img className={'h-32 w-32'} alt='pokemon Img' lazy={true} src={imgSrc} />
      <div>{pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : null}</div>
    </div>
  );
};

export default PokemonDetailPage;
