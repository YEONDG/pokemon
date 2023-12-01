import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonInfoWithId, getPokemonSpec } from '../apis/pokemon/pokemon';
import { Link } from 'react-router-dom';
import { PokemonType } from '../types';
import PokemonTypeLabel from './pokemonTypeLabel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useIsImgLoaded } from '../hooks/useIsImgLoaded';

interface PokemonsProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonsProps> = ({ name }) => {
  const { data: pokemonInfo } = useQuery({
    queryKey: ['pokemonInfo', name],
    queryFn: () => getPokemonInfoWithId(name),
    enabled: !!name,
    staleTime: Infinity,
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: ['pokemonSpec', pokemonInfo?.species?.name],
    queryFn: () => getPokemonSpec(pokemonInfo?.species?.name),
    enabled: !!pokemonInfo?.species?.name,
    staleTime: Infinity,
  });

  // const imgSrc = pokemonImgSrc(pokemonInfo);
  const { elementRef, isLoaded } = useIsImgLoaded(true);
  return (
    <>
      <Link
        to={`/pokemon/${pokemonInfo?.id}`}
        className='flex flex-col border-2 justify-center items-center rounded-lg shadow-md transition hover:-translate-y-2 hover:shadow-2xl overflow-hidden h-56'
        ref={elementRef}
      >
        {isLoaded ? (
          <div className='flex h-full flex-col w-full justify-center items-center'>
            <div className='flex h-full'>
              #{pokemonInfo?.id} {pokemonSpeciesInfo?.name}
            </div>
            <LazyLoadImage
              className={''}
              alt=''
              src={
                pokemonInfo?.sprites?.versions?.['generation-v']?.[
                  'black-white'
                ]?.animated?.front_default ??
                pokemonInfo?.sprites?.front_default ??
                pokemonInfo?.sprites?.other?.['official-artwork'].front_default
              }
              width={
                pokemonInfo?.sprites?.versions?.['generation-v']?.[
                  'black-white'
                ]?.animated?.front_default
                  ? 80
                  : 120
              }
              height={120}
            />
            <div className='text-3xl font-semibold'>
              {pokemonSpeciesInfo ? pokemonSpeciesInfo?.names[2].name : null}
            </div>
            <div className='flex w-full p-2 gap-2'>
              {pokemonInfo?.types?.map((type: PokemonType) => (
                <PokemonTypeLabel key={type.slot} types={type} />
              ))}
            </div>
          </div>
        ) : (
          <div className='h-48'>로딩중</div>
        )}
      </Link>
    </>
  );
};

export default PokemonCard;
