import { ImageDefaultContainerSkeleton } from "@/components/skeleton/image-default-container-skeleton";
import { Img } from "@/components/ui/Img";
import { PokemonImgType } from "@/types";

interface ImageDefaultContainerProps {
  sprites?: PokemonImgType | null;
}

export const ImageDefaultContainer = ({
  sprites,
}: ImageDefaultContainerProps) => {
  if (!sprites) {
    return <ImageDefaultContainerSkeleton />;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3 className="my-2 w-full rounded-xl bg-slate-300 px-3 py-1 text-center text-3xl">
          기본 이미지
        </h3>
        <div className="flex flex-wrap justify-center">
          <Img src={sprites?.front_default} alt="front_default" />

          <Img src={sprites?.front_female} alt="front_female" />

          <Img src={sprites?.front_shiny} alt="front_shiny" />

          <Img src={sprites?.front_shiny_female} alt="front_shiny_female" />

          <Img src={sprites?.back_default} alt="back_default" />

          <Img src={sprites?.back_female} alt="back_female" />

          <Img src={sprites?.back_shiny} alt="back_shiny" />

          <Img src={sprites?.back_shiny_female} alt="back_shiny_female" />
        </div>
      </div>
    </>
  );
};

export default ImageDefaultContainer;
