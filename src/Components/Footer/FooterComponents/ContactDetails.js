import React, { Component } from "react";
import {Container, Mail, Telefon, ContactMain,ContactContent,LogoImg, Link} from "./ContactDetailsStyle";
import logo from "../../../Assets/group-12-copy-5.png"

class ContactDetails extends Component {

  render() {
    return (
      <Container>
            <Mail><ContactMain>adres e-mail</ContactMain><br /><ContactContent><Link href="mailto:mail@gmail.pl">mail@gmail.pl</Link></ContactContent></Mail>
            <Telefon><ContactMain>numer telefonu</ContactMain><br /><ContactContent>Jan Kowalski - <Link href="tel:+48601542606">333 333 333</Link></ContactContent><br /><ContactContent>Kowal Janski - <Link href="tel:+48601786159">333 333 333</Link></ContactContent></Telefon>
            <LogoImg src={logo}/>
      </Container>
    );
  }
}
export default ContactDetails;