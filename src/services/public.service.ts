import client from '@/utilities';
import { gql } from '@apollo/client';

// export const pokemonList = () => {
//   const controller = loadAbort();

//   return {
//     call: axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', { signal: controller.signal }),
//     controller
//   };
// };

export const POKEMON_LIST = gql`
  query ListPokemon {
    listPokemon {
      id
      name
      image
      url
    }
  }
`;

export const pokemonList = () => {
  const controller = new AbortController();

  return {
    call: client.query({
      query: POKEMON_LIST,
      context: {
        fetchOptions: {
          signal: controller.signal
        }
      }
    }),
    controller
  };
};

export const POKEMON_GET = gql`
  query GetPokemon($pokemonUrl: String!) {
    getPokemon(pokemonUrl: $pokemonUrl) {
      id
      name
      image
      url
    }
  }
`;

export const pokemonGet = (pokemonUrl: string) => {
  const controller = new AbortController();

  return {
    call: client.query({
      query: POKEMON_GET,
      variables: { pokemonUrl },
      context: {
        fetchOptions: {
          signal: controller.signal
        }
      }
    }),
    controller
  };
};
