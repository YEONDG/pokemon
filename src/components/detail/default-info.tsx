import { ProgressBar } from "@/components/ui/progress-bar";
import { PokemonDetailType } from "@/types";

interface DefaultInfoProps {
  pokemonInfo?: PokemonDetailType;
}

interface StatRowProps {
  label: string;
  value?: number;
}

const StatRow = ({ label, value }: StatRowProps) => (
  <div className="flex items-center justify-between">
    <p className="text-md w-1/6 dark:text-white">{label}</p>
    <p className="dark:text-white">{value ?? "???"}</p>
    <div className="w-4/6">
      <ProgressBar value={value} />
    </div>
  </div>
);

export const DefaultInfo = ({ pokemonInfo }: DefaultInfoProps) => {
  const stats = pokemonInfo?.stats ?? [];
  const height = pokemonInfo?.height ? pokemonInfo.height / 10 + "m" : "???";
  const weight = pokemonInfo?.weight ? pokemonInfo.weight / 10 + "kg" : "???";

  return (
    <div className="flex w-full flex-col gap-2 md:flex-row">
      <div className="w-full md:w-1/3">
        <h3 className="rounded-xl bg-slate-300 px-3 py-1 text-center text-2xl">
          기본 정보
        </h3>
        <div className="flex flex-col justify-center py-2">
          <p className="text-md dark:text-white">
            키 <span>{height}</span>
          </p>
          <p className="text-md dark:text-white">
            무게 <span>{weight}</span>
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="w-full rounded-xl bg-slate-300 px-3 py-1 text-center text-2xl">
          기본 스탯
        </h3>
        <div className="py-2">
          <StatRow label="체력" value={stats[0]?.base_stat} />
          <StatRow label="공격" value={stats[1]?.base_stat} />
          <StatRow label="방어" value={stats[2]?.base_stat} />
          <StatRow label="특수공격" value={stats[3]?.base_stat} />
          <StatRow label="특수방어" value={stats[4]?.base_stat} />
          <StatRow label="스피드" value={stats[5]?.base_stat} />
        </div>
      </div>
    </div>
  );
};

export default DefaultInfo;
