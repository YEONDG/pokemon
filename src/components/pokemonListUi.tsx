import React from 'react';

const PokemonListUi = () => {
  const boxCount = 8;
  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  gap-2'>
        {Array.from({ length: boxCount }).map((_, index) => (
          <Box key={index} />
        ))}
      </div>
    </>
  );
};

export default PokemonListUi;

const Box = () => {
  return (
    <div className='animate-pulse flex w-64 border-2 h-64 justify-center items-center'>
      <div className='flex flex-col space-y-4'>
        <div className=' rounded-full h-20 w-20 bg-slate-300' />
        <div className='h-3 bg-slate-300 rounded col-span-2'></div>
        <div className='h-3 bg-slate-300 rounded col-span-1'></div>
      </div>
    </div>
  );
};
