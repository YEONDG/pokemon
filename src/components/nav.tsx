import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  return (
    <div className="fixed top-0 z-10 h-20 w-full bg-red-300">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link to={"/"} className="m-5 text-3xl dark:text-slate-100">
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
