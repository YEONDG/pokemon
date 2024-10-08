import { Skeleton } from "@/components/ui/skeleton";

export const PokemonListSkeleton = () => {
  const boxCount = 8;
  return (
    <>
      <div className="grid h-[600px] w-full grid-cols-2 gap-2 pt-1 sm:grid-cols-4">
        {Array.from({ length: boxCount }).map((_, index) => (
          <Box key={index} />
        ))}
      </div>
    </>
  );
};

const Box = () => {
  return <Skeleton className="h-[290px] w-full rounded-md" />;
};
