import React from "react"
import {PropTypes} from "prop-types"
import {CPagination, CPaginationItem} from "@coreui/react"
import {pokemonModePagination} from "../../utils/pokemon"

const Pagination = ({paginate, onClickPaginate}) => {
  return (
    <div>
      <CPagination align="center" aria-label="Page navigation example">
        <CPaginationItem
          onClick={() => onClickPaginate(pokemonModePagination.PREVIOUS)}
          disabled={paginate.previous === null}
        >
          Previous
        </CPaginationItem>
        <CPaginationItem
          disabled={paginate.next === null}
          onClick={() => onClickPaginate(pokemonModePagination.NEXT)}
        >
          Next
        </CPaginationItem>
      </CPagination>
    </div>
  )
}

Pagination.propTypes = {
  paginate: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
  }).isRequired,
  onClickPaginate: PropTypes.func.isRequired,
}

export default Pagination
