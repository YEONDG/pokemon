import axios from '../../utils/axios';

const OFFSET = 20;
export const getPoketmonListAll = async ({ pageParam = 0 }) => {
  return await axios
    .get('/pokemon', {
      params: { limit: OFFSET, offset: pageParam },
    })
    .then((response) => response.data)
    .then((pokemonAll) => pokemonAll);
};
