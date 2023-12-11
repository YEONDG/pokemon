import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
  getPokemonInfoWithId,
  getPokemonSpec,
} from '../../apis/pokemon/pokemon';
import PokemonTypeLabel from '../../components/pokemonTypeLabel';
import ImageDefaultContainer from '../../components/detail/ImageDefaultContainer';
import ImageVersionsContainer from '../../components/detail/ImageVersionsContainer';
import DefalutInfo from '../../components/detail/DefalutInfo';

import Img from '../../components/ui/Img';
import { typeBgColor } from '../../utils/typeColor';
import { pokemonImgSrc } from '../../utils/path';

import { PokemonDetailType, PokemonSpecies } from '../../types';
import { Helmet } from 'react-helmet-async';

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

  const type = pokemonInfo ? pokemonInfo?.types[0]?.type.name : 'normal';

  return (
    <>
      <Helmet>
        <title>
          {pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : null}
        </title>
      </Helmet>

      <div className='flex flex-col justify-center items-center w-full'>
        <header
          className={`flex relative justify-center items-center rounded-xl mx-10 mt-5 p-5 text-5xl ${typeBgColor[type]} text-white w-full`}
        >
          <h2 className='h-11'>
            {pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : null}
          </h2>
        </header>

        <main className='flex flex-col justify-center items-center max-w-3xl gap-10 mt-20'>
          <section className='flex flex-col justify-center items-center w-72 h-64'>
            <Img
              className={'h-32 w-36 m-10'}
              alt='pokemon Img'
              lazy={true}
              src={imgSrc}
            />
            <div className='flex w-72'>
              {pokemonInfo?.types?.map((type) => (
                <PokemonTypeLabel key={type.slot} types={type.type} />
              ))}
            </div>
          </section>
          <section className='w-full'>
            <DefalutInfo pokemonInfo={pokemonInfo} />
          </section>
          <section className='w-full'>
            <ImageDefaultContainer sprites={pokemonInfo?.sprites} />
            <ImageVersionsContainer versions={pokemonInfo?.sprites?.versions} />
          </section>
        </main>
      </div>
    </>
  );
};

export default PokemonDetailPage;
