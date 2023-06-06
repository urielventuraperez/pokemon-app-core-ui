import React from "react"
import {PropTypes} from "prop-types"
import {
  CCard,
  CCol,
  CCardImage,
  CCardText,
  CCardTitle,
  CCardBody,
  CRow,
} from "@coreui/react"

const Card = ({data}) => {
  return (
    <CCard className="mb-3">
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage src={data.image} />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle>{data.name}</CCardTitle>
            <CCardText>
              <small className="text-medium-emphasis">View Pokemon</small>
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  )
}

Card.defaultProps = {
  data: {
    id: 0,
    name: "",
    image: "",
    redirect: "",
  },
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    redirect: PropTypes.string,
  }),
}

export default Card
