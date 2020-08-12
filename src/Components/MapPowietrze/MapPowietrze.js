import React, { Component } from "react";
import SimpleExample from "./SimpleExample";
import {
  Search,
  Container,
  ContainerDane,
  Dane,
  Menu,
  MenuElement,
  StyledLink,
  DaneContent,
  Dana,
  DanePolowa,
} from "./MapPowietrzeStyle";
import ReactSearchBox from "react-search-box";
class MapPowietrze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "Wrocław",
          value: "Gostyń, Rybnicka",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław2",
          value: "Wrocław, Prusa",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław3",
          value: "Wrocław, Mennicza",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław4",
          value: "Gostyń, Rybnicka",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław5",
          value: "Wrocław, Prusa",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław6",
          value: "Wrocław, Mennicza",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław7",
          value: "Gostyń, Rybnicka",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław8",
          value: "Wrocław, Prusa",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław9",
          value: "Wrocław, Mennicza",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław10",
          value: "Gostyń, Rybnicka",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław11",
          value: "Wrocław, Prusa",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
        {
          key: "Wrocław12",
          value: "",
          positionDlugosc: "",
          positionSzerokosc: "",
          wilgoc: "",
          temperatura: "",
          PM10: "",
          PM25: "",
          PM100: "",
          cisnienie: "",
          procent_PM10: "",
          procent_PM25: "",
        },
      ],
      actualCoord: [
        {
          positionDlugosc: 45,
          positionSzerokosc: 45,
        },
      ],
      miejsce: "",
      pm10: null,
      pm25: null,
      pm100: null,
      dataPomiaru: null,
      procent_pm25: null,
      procent_pm10: null,
      wilgoc: null,
      temperatura: null,
      cisnienie: null,
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
    const url = "http://srodowiskowokolicy.pl/wspolne_powietrze_json.php"; // site that doesn’t send Access-Control-*
    fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com //fetch(proxy+url)
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
    for (let i = 0; i <= 13; i++) {
      data1[i].key = contentsToJSON["czujniki"][i].nazwa_czujnika;
      data1[i].value = decodeURIComponent(
        contentsToJSON["czujniki"][i].nazwa_czujnika
      );
      data1[i].positionSzerokosc = contentsToJSON["czujniki"][i].dlugosc;
      data1[i].positionDlugosc = contentsToJSON["czujniki"][i].szerokosc;
      data1[i].dataPomiaru = contentsToJSON["czujniki"][i].data;
      data1[i].temperatura = contentsToJSON["czujniki"][i].temperatura;
      data1[i].pm100 = contentsToJSON["czujniki"][i].pm1;
      data1[i].pm10 = contentsToJSON["czujniki"][i].pm2;
      data1[i].pm25 = contentsToJSON["czujniki"][i].pm10;
      data1[i].wilgoc = contentsToJSON["czujniki"][i].wilgotnosc;
      data1[i].cisnienie = contentsToJSON["czujniki"][i].cisnienie;
      data1[i].procent_pm10 = contentsToJSON["czujniki"][i].procent_PM10;
      data1[i].procent_pm25 = contentsToJSON["czujniki"][i].procent_PM25;
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
    this.setState({ temperatura: value.temperatura });
    this.setState({ cisnienie: value.cisnienie });
    this.setState({ wilgoc: value.wilgoc });
    this.setState({ pm10: value.pm10 });
    this.setState({ pm100: value.pm100 });
    this.setState({ pm25: value.pm25 });
    this.setState({ procent_pm25: value.procent_pm25 });
    this.setState({ procent_pm10: value.procent_pm10 });
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
          <MenuElement>
            <StyledLink to="/map">Hałas</StyledLink>
          </MenuElement>
          <MenuElement>
            <StyledLink to="/mapPowietrze" activeClassName="active">
              Powietrze
            </StyledLink>
          </MenuElement>
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
          pomiar={this.state.temperatura}
          cisnienie={this.state.cisnienie}
          wilgoc={this.state.wilgoc}
          pm10={this.state.pm10}
          pm100={this.state.pm100}
          pm25={this.state.pm25}
          procent_pm10={this.state.procent_pm10}
          procent_pm25={this.state.procent_pm25}
        />
        <ContainerDane>
          {this.state.procent_pm25 !== null ? (
            <Dane>
              <Dana>Miejsce pomiaru: {this.state.miejsce}</Dana>
              <Dana>Data odczytu: {this.state.dataPomiaru}</Dana>
              <br />
              <br />
              <DaneContent>
                <DanePolowa>
                  <Dana>PYŁY ZAWIESZONE</Dana>
                  <Dana>Wartości po uśrednienu:</Dana>
                  <Dana>PM 1.0 = {this.state.pm10} μg/m³</Dana>
                  <Dana>
                    PM 2.5 = {this.state.pm25} μg/m³ - {this.state.procent_pm25}{" "}
                    %
                  </Dana>
                  <Dana>
                    PM 10 = {this.state.pm100} μg/m³ - {this.state.procent_pm10}{" "}
                    %
                  </Dana>
                </DanePolowa>
                <DanePolowa>
                  <Dana>DANE POGODOWE</Dana>
                  <Dana>Wartości zmierzone:</Dana>
                  <Dana>Temperatura = {this.state.temperatura} °C</Dana>
                  <Dana>Ciśnienie = {this.state.cisnienie} hPa</Dana>
                  <Dana>Wilgotność = {this.state.wilgoc} %</Dana>
                </DanePolowa>
              </DaneContent>
            </Dane>
          ) : null}
        </ContainerDane>
      </Container>
    );
  }
}
export default MapPowietrze;
