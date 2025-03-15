import { typeBgColor } from "@/utils/typeColor";

interface DetailHeaderProps {
  type: string;
  name: string | null;
}

export const DetailHeader = ({ type, name }: DetailHeaderProps) => (
  <header
    className={`relative flex items-center justify-center rounded-xl text-3xl ${typeBgColor[type]} w-full text-white`}
  >
    <h2 className="h-10">{name}</h2>
  </header>
);
