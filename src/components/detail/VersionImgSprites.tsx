import { FC } from "react";

import { PokemonImgBasicFrontType, PokemonVersionsImgType } from "../../types";
import { Img } from "../ui/Img";

interface VersionImgSpritesProps {
  title: string;
  sprites: PokemonVersionsImgType | PokemonImgBasicFrontType;
}

export const VersionImgSprites: FC<VersionImgSpritesProps> = ({
  title,
  sprites,
}) => {
  if (!sprites.front_default) {
    return;
  }
  return (
    <>
      <div className="flex h-32 flex-col items-center justify-end gap-2 rounded-xl bg-slate-50 p-2 hover:shadow-xl">
        <div className="flex flex-wrap items-center justify-center">
          <Img src={sprites?.front_default} alt="front_default" />
        </div>
        <div className="">{title}</div>
      </div>
    </>
  );
};
