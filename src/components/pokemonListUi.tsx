export const PokemonListUi = () => {
  const boxCount = 8;
  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-4 sm:gap-2 w-full h-[800px]'>
        {Array.from({ length: boxCount }).map((_, index) => (
          <Box key={index} />
        ))}
      </div>
    </>
  );
};

const Box = () => {
  return (
    <div className='flex flex-col border-2 justify-center items-center rounded-lg shadow-md transition hover:bg-slate-400 hover:shadow-2xl overflow-hidden sm:mb-[105px] sm:h-72 w-full'></div>
  );
};
