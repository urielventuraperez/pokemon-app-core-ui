import {getLastSlashFromUrl} from "./getQueryParams"

export const pokemonsFormat = (pokemonsList) =>
  pokemonsList.map((pokemon) => {
    let formatData = {}
    formatData.id = getLastSlashFromUrl(pokemon.url)
    formatData.name = pokemon.name
    formatData.image = `${process.env.REACT_APP_POKEPHOTOS}${getLastSlashFromUrl(
      pokemon.url
    )}.svg`
    return formatData
  })

export const pokemonModePagination = {
  PREVIOUS: "previous",
  NEXT: "next",
}
