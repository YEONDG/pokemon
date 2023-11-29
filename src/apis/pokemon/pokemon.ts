import instanse from '../../utils/axios';

export const getPokemonInfoUrl = async (url: string) => {
  const { data } = await instanse.get(url);
  return data;
};

export const getPokemonInfoWithId = async (Id: string | undefined) => {
  const { data } = await instanse.get(`pokemon/${Id}`);
  return data;
};

const OFFSET = 20;
export const getPoketmonListAll = async ({ pageParam }) => {
  const { data } = await instanse.get('pokemon', {
    params: { limit: OFFSET, offset: pageParam },
  });
  return data;
};

export const getPokemonWithSpec = async (Id: string | undefined) => {
  const { data } = await instanse.get(`pokemon-species/${Id}`);
  return data;
};

export const getPokemonType = async () => {
  const { data } = await instanse.get('type');
  return data;
};

export const getPokemonTypeWithName = async (id: string | undefined) => {
  const { data } = await instanse.get(`type/${id}`);
  return data;
};
