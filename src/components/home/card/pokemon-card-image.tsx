import { LazyLoadImage } from "react-lazy-load-image-component";

interface PokemonCardImageProps {
  src?: string;
  alt: string;
  isAnimated: boolean;
}

export const PokemonCardImage = ({
  src,
  alt,
  isAnimated,
}: PokemonCardImageProps) => {
  return (
    <div className="flex w-full flex-1 items-center justify-center p-2">
      <LazyLoadImage
        alt={alt}
        src={src}
        width={isAnimated ? 120 : 150}
        height={120}
        className="max-h-full max-w-full object-contain transition-transform hover:scale-110"
        effect="opacity"
      />
    </div>
  );
};
