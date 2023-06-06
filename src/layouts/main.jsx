import React from "react"
import {PropTypes} from "prop-types"
import {CContainer} from "@coreui/react"
import Header from "./header"
import Footer from "./footer"

const MainLayout = ({children}) => {
  return (
    <div>
      <CContainer fluid style={{padding: 0}}>
        <Header />
      </CContainer>
      <CContainer style={{marginTop: 40, marginBottom: 40}}>{children}</CContainer>
      <CContainer fluid style={{padding: 0}}>
        <Footer />
      </CContainer>
    </div>
  )
}

MainLayout.propTypes = {
  child: PropTypes.element.isRequired,
}

export default MainLayout
