import { getPoketmonListAll } from "@/apis/pokemon/pokemon";
import { pokemonQueryKeys } from "@/lib/queryKeys";
import { PokemonAll } from "@/types";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

export interface UseSuspenseInfinitePokeReturn {
  data: InfiniteData<PokemonAll>;
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<PokemonAll>, Error>>;
  hasNextPage: boolean;
  isFetching: boolean;
  isFetchingNextPage: boolean;
}

export const useSuspenseInfinitePoke = (): UseSuspenseInfinitePokeReturn => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: pokemonQueryKeys.list(),
      queryFn: getPoketmonListAll,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;
        if (!next) return undefined;
        const nextUrl = new URL(next);
        const offset = nextUrl.searchParams.get("offset");
        return offset ? Number(offset) : undefined;
      },
      staleTime: Infinity,
    });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
};
