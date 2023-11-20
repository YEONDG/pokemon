import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonWithId, getPokemonWithSpec } from '../apis/pokemon/pokemon';

interface PokemonsProps {
  name: string;
}

const Pokemons: React.FC<PokemonsProps> = ({ name }) => {
  const { data: pokemonInfo } = useQuery({
    queryKey: [`${name}`],
    queryFn: () => getPokemonWithId(name),
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: [`${name}Spec`],
    queryFn: () => getPokemonWithSpec(name),
  });

  return (
    <div className='flex flex-col w-32 border-2 h-32 justify-center items-center'>
      <img className='h-20 w-20' src={pokemonInfo?.sprites?.front_default} />
      <div>{pokemonSpeciesInfo?.names[2].name}</div>
    </div>
  );
};

export default Pokemons;
