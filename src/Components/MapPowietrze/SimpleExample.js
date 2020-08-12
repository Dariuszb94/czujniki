import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class SimpleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 50.1093,
      lng: 18.836207,
      zoom: 15,
      pomiar: 45,
      miejsce: "Gostyń, Rybnicka",
    };
  }
  componentDidUpdate() {
    if (
      this.props.position.positionSzerokosc !== this.state.lat &&
      this.props.position.positionSzerokosc !== undefined
    )
      this.setState({ lat: this.props.position.positionSzerokosc});

    if (
      this.props.position.positionDlugosc !== this.state.lng &&
      this.props.position.positionDlugosc !== undefined
    )
      this.setState({ lng: this.props.position.positionDlugosc });

    if (this.props.miejsce !== this.state.miejsce)
      this.setState({ miejsce: this.props.miejsce});

    if (this.props.temperatura !== this.state.temperatura)
      this.setState({ temperatura: this.props.temperatura });
      
      if (this.props.cisnienie !== this.state.cisnienie)
      this.setState({ cisnienie: this.props.cisnienie });

      if (this.props.wilgoc !== this.state.wilgoc)
      this.setState({ wilgoc: this.props.wilgoc });

      if (this.props.pm100 !== this.state.pm100)
      this.setState({ pm100: this.props.pm100 });

      if (this.props.pm10 !== this.state.pm10)
      this.setState({ pm10: this.props.pm10 });

      if (this.props.pm25 !== this.state.pm25)
      this.setState({ pm25: this.props.pm25 });

      if (this.props.procent_pm25 !== this.state.procent_pm25)
      this.setState({ procent_pm25: this.props.procent_pm25 });

      if (this.props.procent_pm10 !== this.state.procent_pm10)
      this.setState({ procent_pm10: this.props.procent_pm10 });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {this.state.miejsce} <br />
             PM 1.0 = {this.state.pm10} μg/m³<br />
            PM 2.5 = {this.state.pm25} μg/m³ - {this.state.procent_pm25} % <br />
            PM 10 = {this.state.pm100} μg/m³ - {this.state.procent_pm10} %<br />
             Temperatura:{this.state.temperatura} °C <br />
             Ciśnienie: {this.state.cisnienie}hPa<br />
              Wilgotność: {this.state.wilgoc} %
          </Popup>
        </Marker>
      </Map>
    );
  }
}
