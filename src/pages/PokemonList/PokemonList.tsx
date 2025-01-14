import { listPokemonAdapter } from '@/adapters';
import { useFetchAndLoad } from '@/hooks';
import { pokemonList } from '@/redux/states/pokemonList';
import { AppStore } from '@/redux/store';
import { pokemonList as pokemonListFetch } from '@/services/public.service';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import PokemonSelect from './PokemonSelect';
import PokemonCard from './PokemonCard';

export const PokemonList = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const pokemonListState = useSelector((store: AppStore) => store.pokemonList);
  const pokemonState = useSelector((store: AppStore) => store.pokemon);

  const handleClick = async () => {
    const pList = await callEndpoint(pokemonListFetch());
    dispatch(pokemonList(listPokemonAdapter(pList)));
  };

  const isPokemonListEmpty = pokemonListState.length === 0;
  const hasImg = pokemonState.image.length > 0;
  
  return (
    <>
      {loading ? (
        <div>
          <h3>LOADING</h3>
        </div>
      ) : (
        <>
          { isPokemonListEmpty && (
              <Button variant="text" onClick={handleClick}>
                FETCH POKEMON LIST
              </Button>
          )}
          
          <div>
            { !isPokemonListEmpty && <PokemonSelect /> }
            { hasImg && <PokemonCard /> } 
          </div>
        </>
      )}
    </>
  );
};

export default PokemonList;
