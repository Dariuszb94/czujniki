import React, { Component } from "react";
import {HamburgerMenuElement,HamburgerMenu} from "./HamburgerStyle";
import { slide as Menu } from 'react-burger-menu';
import Logo from "../Logo/Logo";
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '20px',
    height: '12px',
    right: '18px',
    top: '22px'
  },
  bmBurgerBars: {
    background: '#ffffff'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmMenuWrap:{
    paddingLeft:'32px',
    paddingTop:'32px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)'
  }
}




class Hamburger extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
      <Logo/>
      <HamburgerMenu>
        <Menu styles={ styles }>
          <HamburgerMenuElement id="home" href="/">Mapa czujników</HamburgerMenuElement>
          <HamburgerMenuElement id="home" href="/">Wykresy</HamburgerMenuElement>
          <HamburgerMenuElement id="home" href="/">Czujniki</HamburgerMenuElement>
          <HamburgerMenuElement id="home" href="/">O nas</HamburgerMenuElement>
        </Menu>
      </HamburgerMenu>
      </React.Fragment>
    );
  }
}
export default Hamburger;