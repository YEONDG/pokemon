import { Img } from "@/components/ui/Img";
import { PokemonImgBasicFrontType, PokemonVersionsImgType } from "@/types";

interface VersionImgSpritesProps {
  title: string;
  sprites: PokemonVersionsImgType | PokemonImgBasicFrontType | null;
}

export const VersionImgSprites = ({
  title,
  sprites,
}: VersionImgSpritesProps) => {
  if (!sprites || !sprites.front_default) {
    return null;
  }

  return (
    <div className="flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-center shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <div className="flex h-20 items-center justify-center">
        <Img
          src={sprites.front_default}
          alt={`${title} 기본 이미지`}
          className="h-20 w-20 object-contain"
        />
      </div>
      <p className="mt-1 truncate text-sm font-semibold text-slate-700 dark:text-slate-300">
        {title}
      </p>
    </div>
  );
};
