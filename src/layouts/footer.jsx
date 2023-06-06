import React from "react"
import {CContainer, CNavbar, CNavbarBrand} from "@coreui/react"

const Footer = () => {
  return (
    <footer>
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">
            Developed by: Carlos Ventura (S&M Developer).
          </CNavbarBrand>
        </CContainer>
      </CNavbar>
    </footer>
  )
}

export default Footer
