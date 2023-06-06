import React from "react"
import {CContainer, CNavbar, CNavbarBrand} from "@coreui/react"
import Pokeball_logo from "../assets/pokeball_icon.png"

const Header = () => {
  return (
    <header>
      <CNavbar colorScheme="light" className="bg-primary">
        <CContainer fluid>
          <CNavbarBrand>
            <img src={Pokeball_logo} alt="Poketest" width="70" height="70" />
            <span className="text-light">Poketest</span>
          </CNavbarBrand>
        </CContainer>
      </CNavbar>
    </header>
  )
}

export default Header
