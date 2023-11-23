import { useLocation } from 'react-router-dom';
import usePokemonData from '../../hooks/usePokemonData';

const PokemonDetail = () => {
  const { pathname } = useLocation();
  const name = pathname.split('/')[2];
  const { pokemonInfo, pokemonSpeciesInfo } = usePokemonData(name);

  console.log(pokemonInfo);
  return (
    <div>
      <img className='h-40 w-40' src={pokemonInfo?.sprites?.front_default} />
      <div>{pokemonSpeciesInfo?.names[2].name}</div>
    </div>
  );
};

export default PokemonDetail;
