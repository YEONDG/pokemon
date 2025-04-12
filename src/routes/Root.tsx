import { getPokemonInfoWithId, getPokemonSpec } from "@/apis/pokemon/pokemon";
import { ThemeProvider } from "@/components/theme-provider";
import { useQueryClient } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "../components/nav";

const Root = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetchPokemon = [
      "bulbasaur",
      "ivysaur",
      "venusaur",
      "charmander",
      "charmeleon",
      "charizard",
      "squirtle",
      "wartortle",
    ];

    prefetchPokemon.forEach((name) => {
      // 포켓몬 상세 정보 프리페칭
      queryClient.prefetchQuery({
        queryKey: ["pokemonInfo", name],
        queryFn: () => getPokemonInfoWithId(name),
        staleTime: Infinity,
      });

      // 포켓몬 종 정보 프리페칭
      queryClient.prefetchQuery({
        queryKey: ["pokemonSpec", name],
        queryFn: () => getPokemonSpec(name),
        staleTime: Infinity,
      });
    });
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="fixed-scrollbar h-full bg-gray-100 dark:bg-gray-900">
          <NavBar />
          <main className="mx-auto h-full max-w-7xl px-4 pt-20">
            <Outlet />
            <Analytics />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Root;
