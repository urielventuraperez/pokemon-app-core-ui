import React, {useState, useCallback} from "react"
import {pokemonsFormat} from "../../utils/pokemon"
import {getQueryParamFromUrl} from "../../utils/getQueryParams"

function usePokeApi() {
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = React.useState(false)
  const [pokemon, setPokemon] = useState({})
  const [error, setError] = useState("")
  const [paginate, setPaginate] = useState({next: 0, previous: 0})

  const fetchPokemons = useCallback((limit, offset) => {
    setLoading(true)
    setLoaded(false)
    setError("")

    fetch(
      `${process.env.REACT_APP_POKEAPI}pokemon?limit=${limit}&offset=${offset}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPokemon(pokemonsFormat(data?.results))
        setPaginate({
          next: getQueryParamFromUrl(data?.next || ""),
          previous: getQueryParamFromUrl(data?.previous || ""),
        })
        setLoaded(true)
        setLoading(false)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
        setLoading(false)
        setError("Failed to fetch info about the pokemons, try later...")
      })
  }, [])

  return {
    loading,
    loaded,
    error,
    pokemon,
    paginate,
    fetchPokemons,
  }
}

export default usePokeApi
