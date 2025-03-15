import type { PokemonImgType, PokemonVersionsGeneration } from "@/types";

import ImageDefaultContainer from "./image-default-container";
import ImageVersionsContainer from "./Image-versions-container";

interface PokemonImagesSectionProps {
  sprites: PokemonImgType | null;
  versions: PokemonVersionsGeneration | null;
}

const PokemonImagesSection = ({
  sprites,
  versions,
}: PokemonImagesSectionProps) => (
  <section className="w-full">
    <ImageDefaultContainer sprites={sprites || null} />
    <ImageVersionsContainer versions={versions || null} />
  </section>
);
export default PokemonImagesSection;
