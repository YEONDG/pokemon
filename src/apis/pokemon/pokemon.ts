import axiosInstanse from "@/utils/axios";

export const getPokemonInfoWithId = async (Id: string | undefined) => {
  if (!Id) {
    throw new Error("Pokemon ID is required");
  }
  const { data } = await axiosInstanse.get(`pokemon/${Id}`);
  return data;
};

const OFFSET = 16;
export const getPoketmonListAll = async ({ pageParam = 0 }) => {
  const { data } = await axiosInstanse.get("pokemon", {
    params: { limit: OFFSET, offset: pageParam },
  });
  return data;
};

export const getPokemonSpec = async (Id: string | undefined) => {
  if (!Id) {
    throw new Error("Pokemon ID is required");
  }
  const { data } = await axiosInstanse.get(`pokemon-species/${Id}`);
  return data;
};

export const getPokemonTypeWithName = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Type ID is required");
  }
  const { data } = await axiosInstanse.get(`type/${id}`);
  return data;
};
