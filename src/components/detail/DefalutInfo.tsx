import { FC } from "react";
import { ProgressBar } from "../ui/ProgressBar";
import { PokemonDetailType } from "../../types";

interface DefalutInfoProps {
  pokemonInfo?: PokemonDetailType;
}

export const DefalutInfo: FC<DefalutInfoProps> = ({ pokemonInfo }) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <p className="my-5 rounded-xl bg-slate-300 px-3 py-1 text-center text-3xl">
          기본 정보
        </p>
        <div className="mx-5 flex justify-center gap-10">
          <p className="text-2xl dark:text-white">
            키{" "}
            <span>
              {pokemonInfo?.height ? pokemonInfo.height / 10 + "m" : " ??? "}
            </span>
          </p>
          <p className="text-2xl dark:text-white">
            무게{" "}
            <span>
              {pokemonInfo?.weight ? pokemonInfo.weight / 10 + "kg" : " ??? "}
            </span>
          </p>
        </div>
        <p className="my-5 w-full rounded-xl bg-slate-300 px-3 py-1 text-center text-3xl">
          기본 스탯
        </p>
        <div className="mx-5 flex justify-between gap-5">
          <p className="w-1/6 dark:text-white">체력</p>
          <p className="dark:text-white">{pokemonInfo?.stats[0]?.base_stat}</p>
          <div className="w-4/6">
            <ProgressBar value={pokemonInfo?.stats[0]?.base_stat} />
          </div>
        </div>
        <div className="mx-5 flex justify-between gap-5">
          <p className="w-1/6 dark:text-white">공격</p>
          <p className="dark:text-white">{pokemonInfo?.stats[1]?.base_stat}</p>
          <div className="w-4/6">
            <ProgressBar value={pokemonInfo?.stats[1]?.base_stat} />
          </div>
        </div>
        <div className="mx-5 flex justify-between gap-5">
          <p className="w-1/6 dark:text-white">방어</p>
          <p className="dark:text-white">{pokemonInfo?.stats[2]?.base_stat}</p>
          <div className="w-4/6">
            <ProgressBar value={pokemonInfo?.stats[2]?.base_stat} />
          </div>
        </div>
        <div className="mx-5 flex justify-between gap-5">
          <p className="w-1/6 dark:text-white">특수공격</p>
          <p className="dark:text-white">{pokemonInfo?.stats[3]?.base_stat}</p>
          <div className="w-4/6">
            <ProgressBar value={pokemonInfo?.stats[3]?.base_stat} />
          </div>
        </div>
        <div className="mx-5 flex justify-between gap-5">
          <p className="w-1/6 dark:text-white">특수방어</p>
          <p className="dark:text-white">{pokemonInfo?.stats[4]?.base_stat}</p>
          <div className="w-4/6">
            <ProgressBar value={pokemonInfo?.stats[4]?.base_stat} />
          </div>
        </div>
        <div className="mx-5 flex justify-between gap-5">
          <p className="w-1/6 dark:text-white">스피드</p>
          <p className="dark:text-white">{pokemonInfo?.stats[5]?.base_stat}</p>
          <div className="w-4/6">
            <ProgressBar value={pokemonInfo?.stats[5]?.base_stat} />
          </div>
        </div>
      </div>
    </>
  );
};
