import React, { Component } from 'react'
import { Map,  Marker, Popup, TileLayer } from "react-leaflet";



export default class SimpleExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat:  50.1093,
      lng: 18.836207,
      zoom: 15,
      pomiar:45,
      miejsce:"Gostyń, Rybnicka",
    }
    
  }
  componentDidUpdate(){
    if(this.props.position.positionSzerokosc !== this.state.lat && this.props.position.positionSzerokosc!==undefined)
    this.setState({ lat: this.props.position.positionSzerokosc },()=>{console.log(this.state.lat)});

    if(this.props.position.positionDlugosc !== this.state.lng && this.props.position.positionDlugosc!==undefined)
    this.setState({ lng: this.props.position.positionDlugosc },()=>{console.log(this.state.lng)});

    if(this.props.miejsce !== this.state.miejsce)
    this.setState({ miejsce: this.props.miejsce },()=>{console.log(this.state.miejsce)});

    if(this.props.pomiar !== this.state.pomiar)
    this.setState({ pomiar: this.props.pomiar },()=>{console.log(this.state.pomiar)});
  }
  
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {this.state.miejsce} <br /> {this.state.pomiar}  dBA
          </Popup>
        </Marker>
      </Map>
    )
  }
}