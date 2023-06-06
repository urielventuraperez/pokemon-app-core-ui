import React from "react"
import {PropTypes} from "prop-types"
import Card from "../../components/card"
import Pagination from "../../components/pagination"
import {CContainer, CRow, CCol} from "@coreui/react"

const PokeGrid = ({data}) => {
  return (
    <>
      <CContainer>
        <CRow>
          {data.map((item) => (
            <CCol key={item.id} xs={4}>
              <Card data={item} />
            </CCol>
          ))}{" "}
        </CRow>
        <Pagination />
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
}

export default PokeGrid
