import { pokemonSlice } from '@/redux/states/pokemon';
import { AppStore } from '@/redux/store';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore<AppStore>({
  reducer: {
    pokemon: pokemonSlice.reducer
  }
});
