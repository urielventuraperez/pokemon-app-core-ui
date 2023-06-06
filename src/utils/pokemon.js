export const pokemonsFormat = (pokemonsList) =>
  pokemonsList.map((pokemon) => {
    let formatData = {}
    formatData.id = pokemon.id
    formatData.name = pokemon.name
    formatData.image = `${process.env.REACT_APP_POKEPHOTOS}/${pokemon.id}+1`
    return formatData
  })
