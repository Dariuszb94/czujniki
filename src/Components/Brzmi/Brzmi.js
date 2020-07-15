import React, { Component } from "react";
import {BrzmiContainer, BrzmiHeader, BrzmiButton} from "./BrzmiStyle";


class Brzmi extends Component {

  render() {
    return (
      <BrzmiContainer>
        <BrzmiHeader>Brzmi interesująco?</BrzmiHeader>
        <BrzmiButton>Skontaktuj się z nami!</BrzmiButton>
      </BrzmiContainer>
      
    );
  }
}
export default Brzmi;