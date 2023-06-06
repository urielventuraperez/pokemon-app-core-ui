import React, {useEffect} from "react"
import usePokeApi from "../../hooks/api/usePokeApi"
import Progress from "../../components/progress"
import PokeGrid from "../../components/pokeGrid.jsx"
import {CAlert} from "@coreui/react"

const Home = () => {
  const {loading, loaded, pokemon, error, fetchPokemons} = usePokeApi()

  useEffect(() => {
    fetchPokemons(20, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Progress loading={loading} />
      {Boolean(error) && <CAlert color="warning">{error}</CAlert>}
      {loaded && pokemon.length && <PokeGrid data={pokemon} />}
    </div>
  )
}

export default Home
