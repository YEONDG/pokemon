import { typeBgColor } from "@/utils/typeColor";
import { typeConverter, typeList } from "@/utils/typeConverter";
import { Link } from "react-router-dom";

export const MainTypesLabel = () => {
  return (
    <section className="my-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-start gap-1 md:gap-3">
          {typeList.map((type) => (
            <Link
              to={`pokemon/type/${type}`}
              key={type}
              className={`${typeBgColor[type]} w-25 flex h-16 items-center justify-center rounded-lg px-3 text-center font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg sm:rounded-xl md:h-14 md:w-28`}
            >
              <div className="flex flex-col items-center">
                <span className="text-xs opacity-80">{type.toUpperCase()}</span>
                <span className="mt-1 text-lg">{typeConverter[type]}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainTypesLabel;
