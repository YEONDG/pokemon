import React from 'react';

const PokemonListUi = () => {
  const boxCount = 12;
  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 w-full p-10 gap-4'>
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
    <div className='animate-pulse flex border-2 h-72 justify-center items-center rounded-lg shadow-md'></div>
  );
};
