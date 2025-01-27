export const getPokemonAdapter = (result: any) => ({
  id: result.data.getPokemon.id,
  name: result.data.getPokemon.name,
  image: result.data.getPokemon.image,
  url: result.data.getPokemon.url
});

export const listPokemonAdapter = (result: any) => {
  const data = result.data.listPokemon;

  return data.map((pokemon: any) => ({
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.image,
    url: pokemon.url
  }));
};
