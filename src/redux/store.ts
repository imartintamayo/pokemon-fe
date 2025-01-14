import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './states/pokemon';

export interface AppStore {
  pokemon: any;
}

export default configureStore<AppStore>({
  reducer: {
    pokemon: pokemonSlice.reducer
  }
});
