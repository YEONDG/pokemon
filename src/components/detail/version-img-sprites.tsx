import { Img } from "@/components/ui/Img";
import { PokemonImgBasicFrontType, PokemonVersionsImgType } from "@/types";

interface VersionImgSpritesProps {
  title: string;
  sprites: PokemonVersionsImgType | PokemonImgBasicFrontType;
}

export const VersionImgSprites = ({
  title,
  sprites,
}: VersionImgSpritesProps) => {
  if (!sprites.front_default) {
    return;
  }
  return (
    <>
      <div className="flex h-32 flex-col items-center justify-end gap-2 rounded-xl bg-slate-50 p-2 hover:shadow-xl">
        <div className="flex flex-wrap items-center justify-center">
          <Img src={sprites?.front_default} alt="front_default" />
        </div>
        <div>{title}</div>
      </div>
    </>
  );
};
