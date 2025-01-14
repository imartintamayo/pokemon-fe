import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './states/pokemon';
import { pokemonListSlice } from './states/pokemonList';
import { Pokemon } from '@/models';

export interface AppStore {
  pokemon: Pokemon;
  pokemonList: Pokemon[];
}

export default configureStore<AppStore>({
  reducer: {
    pokemon: pokemonSlice.reducer,
    pokemonList: pokemonListSlice.reducer
  }
});
