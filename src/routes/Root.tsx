import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";

import { NavBar } from "../components/nav";

const Root = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="h-full dark:bg-black">
          <NavBar />
          <main className="container mx-auto h-full pt-20">
            <Outlet />
            <Analytics />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Root;
