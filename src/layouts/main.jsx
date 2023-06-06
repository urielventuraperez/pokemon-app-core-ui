import React from "react"
import {PropTypes} from "prop-types"
import {CContainer} from "@coreui/react"
import Header from "./header"
import Footer from "./footer"

const MainLayout = ({children}) => {
  return (
    <div>
      <CContainer fluid>
        <Header />
      </CContainer>
      <CContainer>{children}</CContainer>
      <CContainer fluid>
        <Footer />
      </CContainer>
    </div>
  )
}

MainLayout.propTypes = {
  child: PropTypes.element.isRequired,
}

export default MainLayout
