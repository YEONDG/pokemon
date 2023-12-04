import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  getPokemonInfoWithId,
  getPokemonSpec,
} from '../../apis/pokemon/pokemon';
import { PokemonDetailType, PokemonSpecies } from '../../types';
import PokemonTypeLabel from '../../components/pokemonTypeLabel';
import { typeBgColor } from '../../utils/typeColor';

import Img from '../../components/ui/Img';
import { pokemonImgSrc } from '../../utils/path';
import ImageContainer from '../../components/ImageContainer';
import React from 'react';
import ImageVersionsContainer from '../../components/ImageVersionsContainer';

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

  console.log('pokemonInfo', pokemonInfo);
  console.log('pokemonSpeciesInfo', pokemonSpeciesInfo);

  const type = pokemonInfo ? pokemonInfo?.types[0]?.type.name : 'normal';

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <header
        className={`flex relative justify-center items-center border-2 rounded-xl mx-10 mt-5 p-5 text-5xl ${typeBgColor[type]} text-white w-full`}
      >
        <h2>{pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : null}</h2>
      </header>

      <main className='flex flex-col justify-center items-center'>
        <section className='flex flex-col justify-center items-center m-10'>
          <Img
            className={'h-32 w-32'}
            alt='pokemon Img'
            lazy={true}
            src={imgSrc}
          />
        </section>
        <section className='flex w-64'>
          {pokemonInfo?.types?.map((type) => (
            <PokemonTypeLabel key={type.slot} types={type.type} />
          ))}
        </section>
        <section>
          <div>
            키{' '}
            <span>
              {pokemonInfo?.height ? pokemonInfo.height / 10 + 'm' : ' ??? '}
            </span>
          </div>
          <div>
            무게{' '}
            <span>
              {pokemonInfo?.weight ? pokemonInfo.weight / 10 + 'kg' : ' ??? '}
            </span>
          </div>
          <div>HP {pokemonInfo?.stats[0]?.base_stat}</div>
          <div>공격력 {pokemonInfo?.stats[1]?.base_stat}</div>
          <div>방어력 {pokemonInfo?.stats[2]?.base_stat}</div>
        </section>
        <section>
          <ImageContainer sprites={pokemonInfo?.sprites} />
          <ImageVersionsContainer versions={pokemonInfo?.sprites?.versions} />
        </section>
      </main>
    </div>
  );
};

export default PokemonDetailPage;
