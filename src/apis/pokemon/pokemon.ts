import instanse from '../../utils/axios';

export const getPokemonWithId = async (name: string) => {
  const { data } = await instanse.get(`pokemon/${name}`);
  return data;
};

const OFFSET = 20;
export const getPoketmonListAll = async ({ pageParam }) => {
  const { data } = await instanse.get('pokemon', {
    params: { limit: OFFSET, offset: pageParam },
  });
  return data;
};

export const getPokemonWithSpec = async (name: string) => {
  const { data } = await instanse.get(`pokemon-species/${name}`);
  return data;
};

export const getPokemonType = async () => {
  const { data } = await instanse.get('type');
  return data;
};

export const getPokemonTypeWithName = async (id: string) => {
  const { data } = await instanse.get(`type/${id}`);
  return data;
};
