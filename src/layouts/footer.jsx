import React from "react"
import {CContainer, CNavbar, CNavbarBrand} from "@coreui/react"

const Footer = () => {
  return (
    <footer>
      <CNavbar colorScheme="light" className="bg-info-subtle">
        <CContainer fluid>
          <CNavbarBrand
            href="https://github.com/urielventuraperez/pokemon-app-core-ui"
            alt="github link"
            target="_blank"
          >
            <span className="text-secondary fs-6">Github link</span>
          </CNavbarBrand>
        </CContainer>
      </CNavbar>
    </footer>
  )
}

export default Footer
