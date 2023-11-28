import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonWithId, getPokemonWithSpec } from '../apis/pokemon/pokemon';
import { Link } from 'react-router-dom';
import { PokemonType } from '../types';
import PokemonTypeLabel from './pokemonTypeLabel';
import Img from './ui/Img';

interface PokemonsProps {
  name: string;
}

const PokemonCard: React.FC<PokemonsProps> = ({ name }) => {
  const { data: pokemonInfo } = useQuery({
    queryKey: ['pokemonInfo', `${name}`],
    queryFn: () => getPokemonWithId(name),
    staleTime: Infinity,
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: ['pokemonSpec', `${name}`],
    queryFn: () => getPokemonWithSpec(name),
    staleTime: Infinity,
  });

  return (
    <>
      <Link
        to={`/pokemon/${name}`}
        className='flex flex-col border-2 justify-center items-center rounded-lg shadow-md transition hover:-translate-y-2 hover:shadow-2xl overflow-hidden'
      >
        <div className='flex'>
          #{pokemonInfo?.id} {pokemonSpeciesInfo?.name}
        </div>
        <Img
          className={'h-32 w-32'}
          alt='pokemon Img'
          lazy={true}
          src={pokemonInfo?.sprites?.front_default}
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
