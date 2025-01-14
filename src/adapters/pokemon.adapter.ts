export const getPokemonAdapter = (result: any) => ({
  id: result.data.id,
  name: result.data.name,
  image: result.data.sprites.front_default
});

export const listPokemonAdapter = (result: any) => {
  const data = result.data.results;

  return data.map((pokemon: any) => ({
    id: pokemon.id,
    name: pokemon.name
    // image: pokemon.sprites.front_default
  }));
};
