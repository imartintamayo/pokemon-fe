import { Pokemon } from '@/models';
import { createContext } from 'react';

export const SelectedPokemonContext = createContext({
  selectedPokemon: {} as Pokemon,
  setSelectedPokemon: (pokemon: Pokemon) => {}
});
