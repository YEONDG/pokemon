import type { PokemonImgType, PokemonVersionsGeneration } from "@/types";

import ImageDefaultContainer from "./image-default-container";
import ImageVersionsContainer from "./Image-versions-container";

interface PokemonImageGalleryProps {
  sprites: PokemonImgType | null;
  versions: PokemonVersionsGeneration | null;
}

const PokemonImageGallery = ({
  sprites,
  versions,
}: PokemonImageGalleryProps) => {
  const hasSprites =
    !!sprites &&
    Object.keys(sprites).some((key) => sprites[key as keyof PokemonImgType]);
  const hasVersions = !!versions && Object.keys(versions).length > 0;

  // 표시할 내용이 없는 경우 메시지 표시
  if (!hasSprites && !hasVersions) {
    return (
      <section className="w-full py-4 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          이미지를 불러올 수 없습니다.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full">
      {hasSprites && <ImageDefaultContainer sprites={sprites} />}
      {hasVersions && <ImageVersionsContainer versions={versions} />}
    </section>
  );
};

export default PokemonImageGallery;
