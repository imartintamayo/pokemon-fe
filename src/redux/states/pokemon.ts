import { Pokemon } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

export const PokemonEmptyState = {
  list: [],
  selected: {
    id: '',
    name: '',
    image: ''
  }
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: PokemonEmptyState,
  reducers: {
    pokemonList: (state, action) => ({ ...state, list: action.payload }),
    pokemonSelect: (state, action) => ({ ...state, selected: action.payload }),
    pokemonReset: () => PokemonEmptyState
  }
});

export const { pokemonList, pokemonSelect, pokemonReset } = pokemonSlice.actions;

export default pokemonSlice.reducer;
