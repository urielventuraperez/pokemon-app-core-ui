import React, {useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import {CButton, CAlert, CAvatar, CListGroup, CListGroupItem} from "@coreui/react"
import usePokeApi from "../../hooks/api/usePokeApi"
import Progress from "../../components/progress"

const Detail = () => {
  const {pokemonId} = useParams()
  const navigate = useNavigate()
  const {loading, loaded, pokemon, error, fetchPokemon} = usePokeApi()

  useEffect(() => {
    if (pokemonId) fetchPokemon(pokemonId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonId])

  return (
    <div>
      <Progress loading={loading} />
      {Boolean(error) && <CAlert color="warning">{error}</CAlert>}
      {loaded && (
        <div>
          <CAvatar
            size="lg"
            src={`${process.env.REACT_APP_POKEPHOTOS}${pokemonId}.svg`}
          />
          <p className="text-start fs-1 fw-bold text-uppercase text-primary-emphasis">
            {pokemon.name}
          </p>
          <div className="mt-4">
            <p className="text-start fs-5 fw-bold text-uppercase text-primary-emphasis">
              Habilidades
            </p>
            <CListGroup>
              {pokemon.abilities.map((ability) => (
                <CListGroupItem key={ability.ability.name}>
                  <span className="lh-base text-start fs-6 fw-medium text-capitalize text-secondary-emphasis">
                    {ability.ability.name}
                  </span>
                </CListGroupItem>
              ))}
            </CListGroup>
          </div>
          <div className="mt-4">
            <p className="text-start fs-5 fw-bold text-uppercase text-primary-emphasis">
              Movimientos
            </p>
            <CListGroup>
              {pokemon.moves.map((move) => (
                <CListGroupItem key={move.move.name}>
                  <span className="lh-base text-start fs-6 fw-medium text-capitalize text-secondary-emphasis">
                    {move.move.name}
                  </span>
                </CListGroupItem>
              ))}
            </CListGroup>
          </div>
        </div>
      )}
      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
        <CButton onClick={() => navigate("/")} color="secondary" className="me-md-2">
          Regresar al inicio
        </CButton>
      </div>
    </div>
  )
}

export default Detail
