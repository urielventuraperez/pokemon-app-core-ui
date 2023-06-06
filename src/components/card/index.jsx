import React from "react"
import {PropTypes} from "prop-types"
import {useNavigate} from "react-router-dom"
import {
  CCard,
  CCol,
  CCardText,
  CCardTitle,
  CCardSubtitle,
  CCardBody,
  CRow,
  CAvatar,
  CButton,
} from "@coreui/react"

const Card = ({data}) => {
  const navigate = useNavigate()

  return (
    <CCard className="mb-3 border border-dark-subtle">
      <CRow className="g-0">
        <CCol
          style={{display: "flex", alignItems: "center", justifyContent: "center"}}
          md={4}
        >
          {data.image ? (
            <CAvatar src={data.image} size="lg" />
          ) : (
            <CAvatar color="primary" textColor="white">
              {data?.name.charAt(0).toUpperCase()}
            </CAvatar>
          )}
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle className="text-capitalize">{data.name}</CCardTitle>
            <CCardSubtitle className="mb-2 text-body-tertiary">{`Pokedex number: ${data.id}`}</CCardSubtitle>
            <CCardText>
              <CButton
                color="primary"
                className="btn-sm"
                onClick={() => navigate(`pokemon/${data.id}`)}
              >
                View Pokemon
              </CButton>
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
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    redirect: PropTypes.string,
  }),
}

export default Card
