import React from "react"
import {PropTypes} from "prop-types"
import Card from "../../components/card"
import Pagination from "../../components/pagination"
import {CContainer, CRow, CCol} from "@coreui/react"

const PokeGrid = ({data, paginate, pagination}) => {
  return (
    <>
      <CContainer>
        <CRow>
          {data.map((item) => (
            <CCol key={item.id} md={4} sm={12}>
              <Card data={item} />
            </CCol>
          ))}
        </CRow>
        <Pagination paginate={paginate} onClickPaginate={pagination} />
      </CContainer>
    </>
  )
}

PokeGrid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      redirect: PropTypes.string,
    })
  ).isRequired,
  paginate: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
  }).isRequired,
  pagination: PropTypes.func.isRequired,
}

export default PokeGrid
