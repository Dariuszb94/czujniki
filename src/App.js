import React from 'react';
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import MainProducts from "./Components/MainProducts/MainProducts";
import Brzmi from "./Components/Brzmi/Brzmi";
import Footer from "./Components/Footer/Footer";
import './App.css';

function App() {
  return (
      <React.Fragment>
        <Header/>
        <Banner/>
        <MainProducts/>
        <Brzmi/>
        <Footer/>
      </React.Fragment>
  );
}

export default App;
