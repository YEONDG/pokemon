import ErrorPage from "@/error-page";
import HomePage from "@/pages/Home";
import NotFoundPage from "@/pages/NotFound";
import PokemonDetailPage from "@/pages/pokemon/Detail";
import PokemonTypePage from "@/pages/pokemon/type/Type";
import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/pokemon/:name",
        element: <PokemonDetailPage />,
      },
      {
        path: "/pokemon/type/:type",
        element: <PokemonTypePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
