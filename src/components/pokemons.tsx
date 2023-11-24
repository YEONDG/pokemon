import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemonWithId, getPokemonWithSpec } from '../apis/pokemon/pokemon';
import { Link } from 'react-router-dom';

interface PokemonsProps {
  name: string;
}

const Pokemons: React.FC<PokemonsProps> = ({ name }) => {
  const { data: pokemonInfo } = useQuery({
    queryKey: [`${name}`, name],
    queryFn: () => getPokemonWithId(name),
    enabled: !!name,
    staleTime: 1000 * 60 * 60,
  });

  const { data: pokemonSpeciesInfo } = useQuery({
    queryKey: [`${name}Spec`, name],
    queryFn: () => getPokemonWithSpec(name),
    enabled: !!name,
    staleTime: 1000 * 60 * 60,
  });
  // console.log(pokemonInfo?.types);

  return (
    <>
      <Link
        to={`/pokemon/${name}`}
        className='flex flex-col w-32 border-2 h-32 justify-center items-center'
      >
        <img className='h-20 w-20' src={pokemonInfo?.sprites?.front_default} />
        <div>{pokemonSpeciesInfo?.names[2].name}</div>
        <div>
          {pokemonInfo?.types.map((type) => (
            <div key={type.slot}>{type.type.name}</div>
          ))}
        </div>
      </Link>
    </>
  );
};

export default Pokemons;
