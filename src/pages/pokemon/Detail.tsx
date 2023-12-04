import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  getPokemonInfoWithId,
  getPokemonSpec,
} from '../../apis/pokemon/pokemon';
import { PokemonDetailType, PokemonSpecies } from '../../types';
import PokemonTypeLabel from '../../components/pokemonTypeLabel';
import { typeBgColor } from '../../utils/typeColor';
import PokemonImgScroll from '../../components/pokemonImgScroll';
import Img from '../../components/ui/Img';
import { pokemonImgSrc } from '../../utils/path';

const PokemonDetailPage = () => {
  const { name: Id } = useParams();

  const { data: pokemonInfo } = useQuery<PokemonDetailType, Error>({
    queryKey: ['pokemonInfo', `${Id}`],
    queryFn: () => getPokemonInfoWithId(Id),
    enabled: !!Id,
    staleTime: Infinity,
  });

  const pokemonName = pokemonInfo?.species?.name;

  const { data: pokemonSpeciesInfo } = useQuery<PokemonSpecies, Error>({
    queryKey: ['pokemonSpec', `${pokemonName}`],
    queryFn: () => getPokemonSpec(pokemonName),
    enabled: !!pokemonName,
    staleTime: Infinity,
  });

  const imgSrc = pokemonInfo ? pokemonImgSrc(pokemonInfo) : '';

  // console.log('pokemonInfo', pokemonInfo);
  // console.log('pokemonSpeciesInfo', pokemonSpeciesInfo);

  const type = pokemonInfo ? pokemonInfo?.types[0]?.type.name : 'normal';

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <header
        className={`flex relative justify-center items-center border-2 rounded-xl mx-10 mt-5 p-5 text-5xl ${typeBgColor[type]} text-white w-full`}
      >
        <h2>{pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : null}</h2>
      </header>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center m-10'>
          <Img
            className={'h-32 w-32'}
            alt='pokemon Img'
            lazy={true}
            src={imgSrc}
          />
          <PokemonImgScroll sprites={pokemonInfo?.sprites} />
        </div>
        <div className='flex w-64'>
          {pokemonInfo?.types?.map((type) => (
            <PokemonTypeLabel key={type.slot} types={type.type} />
          ))}
        </div>
        <div>무게: {pokemonInfo?.weight}</div>
        <div>
          {pokemonInfo?.stats?.map((v, i) => (
            <div key={i}>
              {v.stat.name} {v.base_stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
