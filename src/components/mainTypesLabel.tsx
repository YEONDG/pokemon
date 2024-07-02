import { typeBgColor } from "@/utils/typeColor";
import { typeConverter, typeList } from "@/utils/typeConverter";
import { Link } from "react-router-dom";

export const MainTypesLabel = () => {
  const data = typeList;

  return (
    <>
      <section className="my-10 px-2">
        <div className="flex max-w-3xl flex-wrap gap-2 text-lg font-bold text-white">
          {data.map((type) => (
            <Link
              to={`pokemon/type/${type}`}
              key={type}
              className={`${typeBgColor[type]} rounded-xl px-4`}
            >
              {typeConverter[type]}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
