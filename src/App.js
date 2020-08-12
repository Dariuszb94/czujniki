import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Map from "./Components/Map/Map";
import MapPowietrze from "./Components/MapPowietrze/MapPowietrze";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
               
        <Route path="/map" component={Map} />
        <Route path="/mapPowietrze" component={MapPowietrze} />
        <Route component={Home} />{" "}
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
