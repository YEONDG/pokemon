import axiosInstanse from '../../utils/axios';

export const getPokemonInfoUrl = async (url: string) => {
  const { data } = await axiosInstanse.get(url);
  return data;
};

export const getPokemonInfoWithId = async (Id: string | undefined) => {
  const { data } = await axiosInstanse.get(`pokemon/${Id}`);
  return data;
};

const OFFSET = 16;
export const getPoketmonListAll = async ({ pageParam = 0 }) => {
  const { data } = await axiosInstanse.get('pokemon', {
    params: { limit: OFFSET, offset: pageParam },
  });
  return data;
};

export const getPokemonSpec = async (Id: string | undefined) => {
  const { data } = await axiosInstanse.get(`pokemon-species/${Id}`);
  return data;
};

export const getPokemonSpecWithUrl = async (url: string) => {
  const { data } = await axiosInstanse.get(url);
  return data;
};

export const getPokemonType = async () => {
  const { data } = await axiosInstanse.get('type');
  return data;
};

export const getPokemonTypeWithName = async (id: string | undefined) => {
  const { data } = await axiosInstanse.get(`type/${id}`);
  return data;
};
