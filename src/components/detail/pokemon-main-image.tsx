import { PokemonTypeLabel } from "../home/card/pokemon-type-label";
import { Img } from "../ui/Img";

interface PokemonMainImageProps {
  imgSrc?: string;
  types:
    | {
        slot: number;
        type: {
          name: string;
          url: string;
        };
      }[]
    | null;
}

const PokemonMainImage = ({ imgSrc, types }: PokemonMainImageProps) => (
  <section className="flex h-64 w-72 flex-col items-center justify-end">
    <Img
      className="mb-10 h-32 w-72"
      alt="포켓몬 이미지"
      lazy={true}
      src={imgSrc}
    />
    <div className="flex w-72">
      {types?.map((type) => (
        <PokemonTypeLabel key={type.slot} types={type.type} />
      ))}
    </div>
  </section>
);
export default PokemonMainImage;
