interface PokemonCardHeaderProps {
  id: number;
  name: string;
}

export const PokemonCardHeader = ({ id, name }: PokemonCardHeaderProps) => {
  return (
    <div className="hidden w-full px-2 dark:text-slate-100 sm:flex sm:justify-between">
      <div>#{id.toString().padStart(3, "0")}</div>
      <div className="truncate">{name}</div>
    </div>
  );
};
