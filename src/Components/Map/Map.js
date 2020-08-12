import React, { Component } from "react";
import SimpleExample from "./SimpleExample";
import { Search, Container, ContainerDane, Dane,Menu,MenuElement,StyledLink } from "./MapStyle";
import ReactSearchBox from "react-search-box";
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "Wrocław",
          value: "Gostyń, Rybnicka",
          positionDlugosc: "",
          positionSzerokosc: "",
          pomiar: 20,
        },
        {
          key: "Wrocław2",
          value: "Wrocław, Prusa",
          positionDlugosc: "",
          positionSzerokosc: "",
          pomiar: 20,
        },
        {
          key: "Wrocław3",
          value: "Wrocław, Mennicza",
          positionDlugosc: "",
          positionSzerokosc: "",
          pomiar: 20,
        },
      ],
      actualCoord: [
        {
          positionDlugosc: 45,
          positionSzerokosc: 45,
        },
      ],
      miejsce: "",
      pomiar: null,
      dataPomiaru: "",
    };
    this.getPHP = this.getPHP.bind(this);
    this.toMap = this.toMap.bind(this);
  }
  componentDidMount() {
    this.getPHP();
  }
  componentDidUpdate() {
    this.getPHP();
  }
  getPHP() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://srodowiskowokolicy.pl/wspolne_halas_json.php"; // site that doesn’t send Access-Control-*
    fetch(proxyurl+url) // https://cors-anywhere.herokuapp.com/https://example.com //fetch(proxyurl+url)
      .then((response) => response.text())
      .then((contents) => this.sensorsMap(contents))
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  }
  sensorsMap(contents) {
    let txt = document.createElement("textarea");
    txt.innerHTML = contents;
    contents = txt.value;
    let contentsToJSON = JSON.parse(contents);
    let data1 = { ...this.state.data };
    for (let i = 0; i <= 3; i++) {
      data1[i].key = contentsToJSON["czujniki"][i].nazwa_czujnika;
      data1[i].value = decodeURIComponent(
        contentsToJSON["czujniki"][i].nazwa_czujnika
      );
      data1[i].positionSzerokosc = contentsToJSON["czujniki"][i].dlugosc;
      data1[i].positionDlugosc = contentsToJSON["czujniki"][i].szerokosc;
      data1[i].pomiar = contentsToJSON["czujniki"][i].pomiar;
      data1[i].dataPomiaru = contentsToJSON["czujniki"][i].data;
    }

    //setTimeout(this.poczatkoweDane(contentsToJSON),300);

    this.setState((prevState) => ({
      data: [...prevState.data, data1],
    }));
  }
  toMap(value) {
    let copyActualCoord = {};
    copyActualCoord.positionSzerokosc = value.positionSzerokosc;
    copyActualCoord.positionDlugosc = value.positionDlugosc;
    this.setState({ actualCoord: copyActualCoord });
    this.setState({ pomiar: value.pomiar });
    this.setState({ miejsce: value.value });
    this.setState({ dataPomiaru: value.dataPomiaru });
  }
  poczatkoweDane(contentsToJSON) {
    this.setState({ pomiar: contentsToJSON["czujniki"][1].pomiar });
    this.setState({ miejsce: contentsToJSON["czujniki"][1].nazwa_czujnika });
    this.setState({ dataPomiaru: contentsToJSON["czujniki"][1].dataPomiaru });
  }

  render() {
    return (
      <Container>
        <Menu>
          <MenuElement><StyledLink to="/map" activeClassName="active">Hałas</StyledLink></MenuElement>
          <MenuElement><StyledLink to="/mapPowietrze" >Powietrze</StyledLink></MenuElement>
        </Menu>
        <Search>
          <ReactSearchBox
            placeholder="Miasto, ulica"
            value="Miasto, ulica"
            data={this.state.data}
            onSelect={this.toMap}
          />
        </Search>
        <SimpleExample
          position={this.state.actualCoord}
          miejsce={this.state.miejsce}
          pomiar={this.state.pomiar}
        />
        <ContainerDane>
          {this.state.pomiar !== null ? (
            <Dane>
              Miejsce pomiaru: {this.state.miejsce}
              <br />
              Data odczytu: {this.state.dataPomiaru}
              <br />
              Poziom hałasu = {this.state.pomiar} dBA
            </Dane>
          ) : null}
        </ContainerDane>
      </Container>
    );
  }
}
export default Map;
