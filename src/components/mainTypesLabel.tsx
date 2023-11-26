import { getPokemonType } from '../apis/pokemon/pokemon';
import { useQuery } from '@tanstack/react-query';
import { typeBgColor } from '../utils/typeColor';
import { typeConverter } from '../utils/typeConverter';
import { PokemonType } from '../types';
import { Link } from 'react-router-dom';

const MainTypesLabel = () => {
  const { data } = useQuery<PokemonType, Error>({
    queryKey: ['types'],
    queryFn: () => getPokemonType(),
    staleTime: Infinity,
  });

  return (
    <>
      <section className='px-2'>
        <div className='flex flex-wrap gap-2 text-lg text-white font-bold max-w-3xl'>
          {data?.results.map((type) => (
            <Link
              to={`pokemon/type/${type.name}`}
              key={type.name}
              className={`${typeBgColor[type.name]} rounded-xl px-4`}
            >
              {typeConverter[type.name]}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainTypesLabel;
