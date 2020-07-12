import React, { Component } from "react";
import {Container, LogoImg} from "./LogoStyle";
import logo from "../../../../Assets/group-12-copy-5.png"

class Logo extends Component {

  render() {
    return (
      <Container>
          <LogoImg src={logo}/>
      </Container>
    );
  }
}
export default Logo;