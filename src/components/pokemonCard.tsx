import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonInfoWithId, getPokemonSpec } from '../apis/pokemon/pokemon';
import { Link } from 'react-router-dom';
import { PokemonDetailType, PokemonSpecies } from '../types';
import { PokemonTypeLabel } from './pokemonTypeLabel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { pokemonImgSrc } from '../utils/path';

interface PokemonsProps {
  name: string;
  url: string;
}

export const PokemonCard = memo(({ name }: PokemonsProps) => {
  const { data: pokemonInfo } = useQuery<PokemonDetailType, Error>({
    queryKey: ['pokemonInfo', name],
    queryFn: () => getPokemonInfoWithId(name),
    enabled: !!name,
    staleTime: Infinity,
  });

  const { data: pokemonSpeciesInfo } = useQuery<PokemonSpecies, Error>({
    queryKey: ['pokemonSpec', pokemonInfo?.species?.name],
    queryFn: () => getPokemonSpec(pokemonInfo?.species?.name),
    enabled: !!pokemonInfo?.species?.name,
    staleTime: Infinity,
  });

  const imgSrc = pokemonInfo
    ? pokemonImgSrc(pokemonInfo) ?? undefined
    : undefined;

  return (
    <>
      <Link
        to={`/pokemon/${pokemonInfo?.id}`}
        className='flex flex-col border-2 justify-center items-center rounded-lg shadow-md transition hover:bg-slate-400 hover:shadow-lg overflow-hidden h-full sm:h-72 w-full'
      >
        <div className='flex h-full sm:h-full flex-col w-full justify-end items-center'>
          <div className='hidden sm:flex h-full dark:text-slate-100'>
            {pokemonInfo?.id} {pokemonSpeciesInfo?.name}
          </div>
          <div className='flex items-center justify-center w-full h-24 sm:h-48'>
            <LazyLoadImage
              alt={pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : ''}
              src={imgSrc}
              width={
                pokemonInfo?.sprites?.versions?.['generation-v']?.[
                  'black-white'
                ]?.animated?.front_default
                  ? 80
                  : 120
              }
              height={120}
              className='object-contain'
            />
          </div>
          <div className='text-3xl font-semibold dark:text-slate-100'>
            {pokemonSpeciesInfo?.names[2].name}
          </div>
          <div className='flex w-full p-2 gap-2'>
            {pokemonInfo?.types?.map((type) => (
              <PokemonTypeLabel key={type.slot} types={type.type} />
            ))}
          </div>
        </div>
      </Link>
    </>
  );
});
