import React, {useState, useCallback} from "react"
import {pokemonsFormat} from "../../utils/pokemon"

function usePokeApi() {
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = React.useState(false)
  const [pokemon, setPokemon] = useState({})
  const [error, setError] = useState("")

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
        setPokemon(pokemonsFormat(data.results))
        setLoaded(true)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        setError(err || "Failed to fetch info about the pokemons, try later...")
      })
  }, [])

  return {
    loading,
    loaded,
    error,
    pokemon,
    fetchPokemons,
  }
}

export default usePokeApi
