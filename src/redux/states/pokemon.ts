import { Pokemon } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

export const PokemonEmptyState: Pokemon = {
  id: '',
  name: '',
  image: ''
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: PokemonEmptyState,
  reducers: {
    pokemonSelect: (state, action) => action.payload,
    pokemonReset: () => PokemonEmptyState
  }
});

export const { pokemonSelect, pokemonReset } = pokemonSlice.actions;

export default pokemonSlice.reducer;
