import React from 'react';
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import MainProducts from "./Components/MainProducts/MainProducts";
import Brzmi from "./Components/Brzmi/Brzmi";
import './App.css';

function App() {
  return (
      <React.Fragment>
        <Header/>
        <Banner/>
        <MainProducts/>
        <Brzmi/>
      </React.Fragment>
  );
}

export default App;
