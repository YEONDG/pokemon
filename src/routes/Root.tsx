import { getPokemonInfoWithId, getPokemonSpec } from "@/apis/pokemon/pokemon";
import { ThemeProvider } from "@/components/theme-provider";
import { pokemonQueryKeys } from "@/lib/queryKeys";
import { useQueryClient } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "../components/nav";

export const PREFETCH_POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
];

const Root = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    PREFETCH_POKEMONS.forEach((name) => {
      // 포켓몬 상세 정보 프리페칭
      queryClient.prefetchQuery({
        queryKey: pokemonQueryKeys.info(name),
        queryFn: () => getPokemonInfoWithId(name),
        staleTime: Infinity,
      });

      // 포켓몬 종 정보 프리페칭
      queryClient.prefetchQuery({
        queryKey: pokemonQueryKeys.species(name),
        queryFn: () => getPokemonSpec(name),
        staleTime: Infinity,
      });
    });
  }, [queryClient]);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="fixed-scrollbar h-full">
          <NavBar />
          <main className="mx-auto h-full max-w-7xl px-4 pt-16">
            <Outlet />
            <Analytics />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Root;
