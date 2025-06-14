interface PokemonCardInfoProps {
  name: string;
}

export const PokemonCardInfo = ({ name }: PokemonCardInfoProps) => {
  return (
    <div className="w-full">
      <h2 className="h-10 truncate text-center text-lg font-semibold dark:text-slate-100 sm:text-2xl">
        {name}
      </h2>
    </div>
  );
};
