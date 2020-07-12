import React, { Component } from "react";
import Logo from "./HeaderComponents/Logo/Logo";
import Navi from "./HeaderComponents/Navi/Navi";
import {Container} from "./HeaderStyle";

class Header extends Component {

  render() {
    return (
      <Container>
          <Logo/>
          <Navi/>
      </Container>
    );
  }
}
export default Header;