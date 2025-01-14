import { Pokemon } from '@/models';
import client, { loadAbort } from '@/utilities';
import axios from 'axios';
import { gql } from '@apollo/client';

export const pokemonList = () => {
  const controller = loadAbort();

  return {
    call: axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', { signal: controller.signal }),
    controller
  };
};

export const POKEMON_GET = gql`
  query pokemonGet($nameOrId: String!) {
    pokemonGet(nameOrId: $nameOrId) {
      id
      name
      image
    }
  }
`;

export const pokemonGet = (nameOrId: string) => {
  const controller = new AbortController();

  return {
    call: client.query({
      query: POKEMON_GET,
      variables: { nameOrId },
      context: {
        fetchOptions: {
          signal: controller.signal
        }
      }
    }),
    controller
  };
};
