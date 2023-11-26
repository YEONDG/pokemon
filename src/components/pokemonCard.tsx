import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonWithId, getPokemonWithSpec } from '../apis/pokemon/pokemon';
import { Link } from 'react-router-dom';
import { PokemonType } from '../types';
import PokemonTypeLabel from './pokemonTypeLabel';

interface PokemonsProps {
  name: string;
}

const PokemonCard: React.FC<PokemonsProps> = ({ name }) => {
  const { data: pokemonInfo } = useQuery({
    queryKey: [`${name}`, name],
    queryFn: () => getPokemonWithId(name),
    staleTime: Infinity,
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: [`${name}Spec`, name],
    queryFn: () => getPokemonWithSpec(name),
    staleTime: Infinity,
  });

  return (
    <>
      <Link
        to={`/pokemon/${name}`}
        className='flex flex-col border-2 justify-center items-center rounded-lg shadow-md transition hover:-translate-y-2 hover:shadow-2xl'
      >
        <div className='flex'>
          #{pokemonInfo?.id} {pokemonSpeciesInfo?.name}
        </div>
        <img className='h-32 w-32' src={pokemonInfo?.sprites?.front_default} />
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
