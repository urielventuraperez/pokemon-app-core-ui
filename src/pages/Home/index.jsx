import React, {useState, useEffect} from "react"
import usePokeApi from "../../hooks/api/usePokeApi"
import Progress from "../../components/progress"
import PokeGrid from "../../components/pokeGrid.jsx"
import {CAlert} from "@coreui/react"
import {pokemonModePagination} from "../../utils/pokemon"

const Home = () => {
  const {loading, loaded, pokemon, error, fetchPokemons, paginate} = usePokeApi()

  const LIMIT = 24
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetchPokemons(LIMIT, offset)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  const onClickPaginationButton = (type) => {
    setOffset((previous) =>
      type === pokemonModePagination.PREVIOUS ? previous - LIMIT : previous + LIMIT
    )
  }

  return (
    <div>
      <Progress loading={loading} />
      {Boolean(error) && <CAlert color="warning">{error}</CAlert>}
      {loaded && pokemon.length && (
        <PokeGrid
          data={pokemon}
          paginate={paginate}
          pagination={onClickPaginationButton}
        />
      )}
    </div>
  )
}

export default Home
