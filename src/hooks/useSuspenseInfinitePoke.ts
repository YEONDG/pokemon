import { getPoketmonListAll } from "@/apis/pokemon/pokemon";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

export const useSuspenseInfinitePoke = () => {
  const {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: getPoketmonListAll,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { next } = lastPage;
      if (!next) return undefined;
      return Number(new URL(next).searchParams.get("offset"));
    },
    staleTime: Infinity,
  });
  return {
    data,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
};
