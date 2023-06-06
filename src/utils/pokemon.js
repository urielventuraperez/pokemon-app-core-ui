export const pokemonsFormat = (pokemonsList) =>
  pokemonsList.map((pokemon, index) => {
    let formatData = {}
    formatData.id = index
    formatData.name = pokemon.name
    formatData.image = `${process.env.REACT_APP_POKEPHOTOS}${index + 1}.svg`
    return formatData
  })
