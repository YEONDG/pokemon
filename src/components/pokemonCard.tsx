import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonInfoUrl, getPokemonWithSpec } from '../apis/pokemon/pokemon';
import { Link } from 'react-router-dom';
import { PokemonType } from '../types';
import PokemonTypeLabel from './pokemonTypeLabel';
import Img from './ui/Img';

interface PokemonsProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonsProps> = ({ name, url }) => {
  const { data: pokemonInfo } = useQuery({
    queryKey: ['pokemonInfo', `${name}`],
    queryFn: () => getPokemonInfoUrl(url),
    staleTime: Infinity,
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: ['pokemonSpec', `${pokemonInfo?.species?.name}`],
    queryFn: () => getPokemonWithSpec(pokemonInfo?.species?.name),
    staleTime: Infinity,
  });

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
          src={
            pokemonInfo?.sprites?.versions?.['generation-v']?.['black-white']
              ?.animated?.front_default ??
            pokemonInfo?.sprites?.front_default ??
            pokemonInfo?.sprites?.other?.['official-artwork'].front_default
          }
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
