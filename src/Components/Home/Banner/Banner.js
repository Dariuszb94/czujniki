import React, { Component } from "react";
import {Container, Header, Subheader, ContactButton} from "./BannerStyle";

class Banner extends Component {

  render() {
    return (
      <Container>
          <Header>Czujniki na poziomie</Header>
          <Subheader>Oferujemy mierniki poziomu hałasu</Subheader>
          <ContactButton>Skontaktuj się z nami!</ContactButton>
      </Container>
    );
  }
}
export default Banner;