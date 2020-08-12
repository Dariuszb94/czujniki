import React, { Component } from "react";
import {Container, Menu, MenuElement, StyledLink} from "./NaviStyle";

class Logo extends Component {

  render() {
    return (
      <Container>
        <Menu>
        <MenuElement><StyledLink to="/map" activeClassName="active">Mapa czujników</StyledLink></MenuElement>
          <MenuElement>Wykresy</MenuElement>
          <MenuElement>Czujniki</MenuElement>
          <MenuElement>O Nas</MenuElement>
          <MenuElement>Kontakt</MenuElement>
        </Menu>
      </Container>
    );
  }
}
export default Logo;