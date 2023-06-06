import React from "react"
import {PropTypes} from "prop-types"
import {CButton, CPagination, CPaginationItem} from "@coreui/react"
import {pokemonModePagination} from "../../utils/pokemon"

const Pagination = ({paginate, onClickPaginate}) => {
  return (
    <div>
      <CPagination align="center" aria-label="Page navigation example">
        <CPaginationItem
          component={CButton}
          onClick={() => onClickPaginate(pokemonModePagination.PREVIOUS)}
          disabled={paginate.previous === null}
        >
          Previous
        </CPaginationItem>
        <CPaginationItem
          component={CButton}
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
