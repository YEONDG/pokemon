import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonWithId, getPokemonWithSpec } from '../apis/pokemon/pokemon';
import { Link } from 'react-router-dom';
import usePokemonData from '../hooks/usePokemonData';

interface PokemonsProps {
  name: string;
}

const Pokemons: React.FC<PokemonsProps> = ({ name }) => {
  const { pokemonInfo, pokemonSpeciesInfo } = usePokemonData(name);

  return (
    <>
      <Link
        to={`/pokemon/${name}`}
        className='flex flex-col w-32 border-2 h-32 justify-center items-center'
      >
        <img className='h-20 w-20' src={pokemonInfo?.sprites?.front_default} />
        <div>{pokemonSpeciesInfo?.names[2].name}</div>
      </Link>
    </>
  );
};

export default Pokemons;
