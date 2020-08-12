import React, { Component } from "react";
import {Container, LogoImg, LogoLink} from "./LogoStyle";
import logo from "../../../../Assets/group-12-copy-5.png"

class Logo extends Component {

  render() {
    return (
      <Container>
        <LogoLink href="/home"><LogoImg src={logo}/></LogoLink>
          
      </Container>
    );
  }
}
export default Logo;