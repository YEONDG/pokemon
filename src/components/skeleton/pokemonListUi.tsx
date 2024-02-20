import { Skeleton } from '../ui/skeleton';

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
  return <Skeleton className='w-full h-[300px]' />;
};
