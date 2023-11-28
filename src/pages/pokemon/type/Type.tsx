import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getPokemonTypeWithName } from '../../../apis/pokemon/pokemon';
import PokemonCard from '../../../components/pokemonCard';

const PokemonTypePage = () => {
  const { type } = useParams();

  const { data: pokemonType } = useQuery({
    queryKey: ['type', `${type}`],
    queryFn: () => getPokemonTypeWithName(type),
    staleTime: Infinity,
  });

  console.log(pokemonType?.pokemon);
  return (
    <div>
      <section className='w-full'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 w-full p-10 gap-4'>
          {pokemonType?.pokemon?.map((item) => (
            <PokemonCard key={item?.pokemon?.name} name={item?.pokemon?.name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PokemonTypePage;
