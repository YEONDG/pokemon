import { typeList } from "@/utils/typeConverter";

import { TypeItem } from "./type-item";

export const PokemonTypeNav = () => {
  return (
    <nav className="my-4" aria-label="포켓몬 타입 네비게이션">
      <div className="mx-auto max-w-7xl">
        <ul className="flex flex-wrap justify-start gap-1 md:gap-3">
          {typeList.map((type) => (
            <li key={type}>
              <TypeItem type={type} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default PokemonTypeNav;
