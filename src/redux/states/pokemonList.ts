import { Pokemon } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

export const PokemonListEmptyState: Pokemon[] = [];

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState: PokemonListEmptyState,
  reducers: {
    pokemonList: (state, action) => action.payload,
    pokemonListReset: () => PokemonListEmptyState
  }
});

export const { pokemonList, pokemonListReset } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
