import React from "react"
import {CContainer, CNavbar, CNavbarBrand} from "@coreui/react"
import Pokeball_logo from "../assets/pokeball_icon.png"

const Header = () => {
  return (
    <header>
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">
            <img src={Pokeball_logo} alt="Poketest" width="70" height="70" />
            Poketest
          </CNavbarBrand>
        </CContainer>
      </CNavbar>
    </header>
  )
}

export default Header
