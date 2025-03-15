import { Link } from "react-router-dom";

import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  return (
    <div className="fixed top-0 z-10 h-20 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between px-6">
          <Link to={"/"} className="m-5 flex text-3xl dark:text-slate-100">
            <img src="/poke.svg" width={30} height={30} alt="포켓몬 아이콘" />{" "}
            포켓몬도감
          </Link>

          <div className="m-5 text-3xl">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
