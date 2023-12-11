import { typeBgColor } from '../utils/typeColor';
import { typeConverter, typeList } from '../utils/typeConverter';
import { Link } from 'react-router-dom';

const MainTypesLabel = () => {
  const data = typeList;

  return (
    <>
      <section className='px-2 my-10'>
        <div className='flex flex-wrap gap-2 text-lg text-white font-bold max-w-3xl'>
          {data.map((type) => (
            <Link
              to={`pokemon/type/${type}`}
              key={type}
              className={`${typeBgColor[type]} rounded-xl px-4`}
            >
              {typeConverter[type]}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainTypesLabel;
