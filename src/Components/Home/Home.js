import React, { Component } from "react";
import Brzmi from "./Brzmi/Brzmi";
import MainProducts from "./MainProducts/MainProducts";
import Banner from "./Banner/Banner";
class Home extends Component {
  render() {
    return (<React.Fragment>
        <Banner />
        <MainProducts />
        <Brzmi />
      </React.Fragment>
    );
  }
}
export default Home;
