export const getPokemonAdapter = (result: any) => ({
  id: result.data.pokemonGet.id,
  name: result.data.pokemonGet.name,
  image: result.data.pokemonGet.image
});

export const listPokemonAdapter = (result: any) => {
  const data = result.data.results;

  return data.map((pokemon: any) => ({
    id: pokemon.id,
    name: pokemon.name
    // image: pokemon.sprites.front_default
  }));
};
