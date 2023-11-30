import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getPokemonTypeWithName } from '../../../apis/pokemon/pokemon';
import PokemonCard from '../../../components/pokemonCard';
import { typeConverter } from '../../../utils/typeConverter';
import { typeBgColor } from '../../../utils/typeColor';
const PokemonTypePage = () => {
  const { type } = useParams();

  const { data: pokemonTypeList } = useQuery({
    queryKey: ['type', `${type}`],
    queryFn: () => getPokemonTypeWithName(type),
    enabled: !!type,
    staleTime: Infinity,
  });

  const pokemonCount = pokemonTypeList?.pokemon?.length;

  return (
    <div>
      <section className='w-full'>
        <header
          className={`flex relative justify-center items-center border-2 rounded-xl mx-10 mt-5 p-5 text-5xl ${typeBgColor[type]} text-white`}
        >
          <h2>{typeConverter[type]}</h2>
          <div className='absolute bottom-0 right-10 text-xl'>
            {pokemonCount} 마리
          </div>
        </header>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 w-full p-10 gap-4'>
          {pokemonTypeList?.pokemon?.map((item) => (
            <PokemonCard
              key={item?.pokemon?.name}
              name={item?.pokemon?.name}
              url={item?.pokemon?.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PokemonTypePage;
