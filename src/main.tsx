import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorPage from './error-page';
import PokemonDetail from './pages/pokemon/Detail';
import Root from './routes/Root';
import PokemonTypePage from './pages/pokemon/type/Type';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/pokemon/:name',
        element: <PokemonDetail />,
      },
      {
        path: '/pokemon/type/:type',
        element: <PokemonTypePage />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </HelmetProvider>
);
