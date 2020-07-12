import React, { Component } from "react";
import {Container, Menu, MenuElement} from "./NaviStyle";

class Logo extends Component {

  render() {
    return (
      <Container>
        <Menu>
          <MenuElement>Mapa Czujników</MenuElement>
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