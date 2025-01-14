import { listPokemonAdapter } from '@/adapters';
import { useFetchAndLoad } from '@/hooks';
import { pokemonList, pokemonSelect } from '@/redux/states/pokemon';
import { AppStore } from '@/redux/store';
import { pokemonList as pokemonListFetch } from '@/services/public.service';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export const PokemonList = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const pokemonState = useSelector((store: AppStore) => store.pokemon);

  const handleClick = async () => {
    const pList = await callEndpoint(pokemonListFetch());
    dispatch(pokemonList(listPokemonAdapter(pList)));
  };

  const handleModify = () => {
    dispatch(pokemonSelect({ name: 'Gentleman' }));
  };

  return (
    <>
      {loading ? (
        <div>
          <h3>LOADING</h3>
        </div>
      ) : (
        <>
          <Button variant="text" onClick={handleClick}>
            Fetch Pokemon List
          </Button>
          <Button variant="text" onClick={handleModify}>
            MODIFY
          </Button>
          <div>
            <h3>{JSON.stringify(pokemonState)}</h3>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonList;
