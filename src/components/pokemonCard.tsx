import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonInfoUrl, getPokemonWithSpec } from '../apis/pokemon/pokemon';
import { Link } from 'react-router-dom';
import { PokemonType } from '../types';
import PokemonTypeLabel from './pokemonTypeLabel';
import Img from './ui/Img';
import { pokemonImgSrc } from '../utils/path';

interface PokemonsProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonsProps> = ({ name, url }) => {
  const id = url.split('/')[6];
  console.log(id);
  const { data: pokemonInfo } = useQuery({
    queryKey: ['pokemonInfo', id],
    queryFn: () => getPokemonInfoUrl(url),
    staleTime: Infinity,
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: ['pokemonSpec', id],
    queryFn: () => getPokemonWithSpec(id),
    staleTime: Infinity,
  });

  const imgSrc = pokemonImgSrc(pokemonInfo);

  return (
    <>
      <Link
        to={`/pokemon/${pokemonInfo?.id}`}
        className='flex flex-col border-2 justify-center items-center rounded-lg shadow-md transition hover:-translate-y-2 hover:shadow-2xl overflow-hidden'
      >
        <div className='flex'>
          #{pokemonInfo?.id} {pokemonSpeciesInfo?.name}
        </div>
        <Img
          className={'h-32 w-32'}
          alt='pokemon Img'
          lazy={true}
          src={imgSrc}
        />
        <div className='text-3xl font-semibold'>
          {pokemonSpeciesInfo?.names[2].name}
        </div>
        <div className='flex w-full p-2 gap-2'>
          {pokemonInfo?.types?.map((type: PokemonType) => (
            <PokemonTypeLabel key={type.slot} types={type} />
          ))}
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;
