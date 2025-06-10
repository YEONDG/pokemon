import axiosInstanse from "@/utils/axios";

export const getPokemonInfoWithId = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Pokemon ID is required");
  }
  const { data } = await axiosInstanse.get(`pokemon/${id}`);
  return data;
};

const OFFSET = 16;
export const getPoketmonListAll = async ({ pageParam = 0 }) => {
  const { data } = await axiosInstanse.get("pokemon", {
    params: { limit: OFFSET, offset: pageParam },
  });
  return data;
};

export const getPokemonSpec = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Pokemon ID is required");
  }
  const { data } = await axiosInstanse.get(`pokemon-species/${id}`);
  return data;
};

export const getPokemonTypeWithName = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Type ID is required");
  }
  const { data } = await axiosInstanse.get(`type/${id}`);
  return data;
};
