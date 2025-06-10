import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { Link } from "react-router-dom";

import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  const isVisible = useNavbarVisibility();

  return (
    <nav
      className={`fixed top-0 z-10 h-20 w-full bg-white/80 transition-transform duration-300 dark:bg-slate-800/80 ${isVisible ? "translate-y-0" : "-translate-y-full"} `}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-6">
          <Link to="/" className="m-5 flex text-3xl dark:text-slate-100">
            <img src="/poke.svg" width={30} height={30} alt="포켓몬 아이콘" />
            <h1 className="hidden md:block">포켓몬도감</h1>
          </Link>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
