import { Pokemon } from '@/models';
import { loadAbort } from '@/utilities';
import axios from 'axios';

export const pokemonList = () => {
  const controller = loadAbort();

  return {
    call: axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', { signal: controller.signal }),
    controller
  };
};

export const pokemonGet = (nameOrId: string) => {
  const controller = loadAbort();

  return {
    call: axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`, { signal: controller.signal }),
    controller
  };
};
