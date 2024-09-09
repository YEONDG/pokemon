import { typeBgColor } from "@/utils/typeColor";
import { typeConverter, typeList } from "@/utils/typeConverter";
import { Link } from "react-router-dom";

export const MainTypesLabel = () => {
  return (
    <>
      <section className="my-5 px-2">
        <div className="flex max-w-3xl flex-wrap justify-center gap-2 text-lg font-bold text-white">
          {typeList.map((type) => (
            <Link
              to={`pokemon/type/${type}`}
              key={type}
              className={`${typeBgColor[type]} w-24 rounded-xl px-4 text-center`}
            >
              {typeConverter[type]}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainTypesLabel;
