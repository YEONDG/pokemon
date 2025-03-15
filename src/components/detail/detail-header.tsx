import { typeBgColor } from "@/utils/typeColor";

interface DetailHeaderProps {
  type: string;
  name: string | null;
}

export const DetailHeader = ({ type, name }: DetailHeaderProps) => (
  <header
    className={`relative mx-10 mt-5 flex items-center justify-center rounded-xl p-5 text-5xl ${typeBgColor[type]} w-full text-white`}
  >
    <h2 className="h-11">{name}</h2>
  </header>
);
