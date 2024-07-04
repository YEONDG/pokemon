import { Skeleton } from "@/components/ui/skeleton";

export const PokemonListUi = () => {
  const boxCount = 8;
  return (
    <>
      <div className="grid h-[800px] w-full grid-cols-2 pt-5 sm:grid-cols-4 sm:gap-2">
        {Array.from({ length: boxCount }).map((_, index) => (
          <Box key={index} />
        ))}
      </div>
    </>
  );
};

const Box = () => {
  return <Skeleton className="h-[300px] w-full" />;
};
