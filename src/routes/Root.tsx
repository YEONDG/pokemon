import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav";
import { ThemeProvider } from "@/components/theme-provider";

const Root = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="h-full dark:bg-black">
          <NavBar />
          <main className="container mx-auto h-fit border-2 pt-20">
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Root;
