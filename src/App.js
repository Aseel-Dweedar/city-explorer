import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "./Components/Header";
import FormData from "./Components/FormData";
import MapAndData from "./Components/MapAndData";
import AlertMsg from "./Components/AlertMsg";
import Weather from "./Components/Weather";
import Movies from "./Components/Movies";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: "",
      lat: "",
      lon: "",
      errorMsg: "",
      showAlert: false,
      cityInfo: false,
      weatherData: false,
      moviesData: false,
    };
  }

  getCityName = (e) => {
    this.setState({
      selectedCity: e.target.value,
    });
  };

  getCityInfo = async (e) => {
    e.preventDefault();
    this.setState({
      cityInfo: false,
      weatherData: false,
      moviesData: false,
    });
    try {
      await axios.get(`${process.env.REACT_APP_URL}/location?city=${this.state.selectedCity}`).then((axiosResponse) => {
        if (typeof axiosResponse.data !== "object") throw new Error(axiosResponse.data);
        this.setState({
          cityInfo: axiosResponse.data,
          lat: axiosResponse.data.lat,
          lon: axiosResponse.data.lon,
        });
        axios
          .get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`)
          .then((weatherResponse) => {
            this.setState({
              weatherData: weatherResponse.data,
              showAlert: false,
            });
          });
        axios.get(`${process.env.REACT_APP_URL}/movies?city=${this.state.selectedCity}`).then((moviesResponse) => {
          this.setState({ moviesData: moviesResponse.data });
        });
      });
    } catch (error) {
      console.log({ error });
      this.setState({
        errorMsg: error.message,
        showAlert: true,
      });
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: "#eee" }}>
        <Header />
        {this.state.showAlert && <AlertMsg errorMsg={this.state.errorMsg} />}

        <Container>
          <Row>
            <Col>
              <FormData getCityName={this.getCityName} getCityInfo={this.getCityInfo} />
              {this.state.cityInfo && <MapAndData cityInfo={this.state.cityInfo} />}
            </Col>
            <Col>{this.state.weatherData && <Weather weatherData={this.state.weatherData} />}</Col>
          </Row>
        </Container>

        {this.state.moviesData && (
          <>
            <hr></hr> <Movies moviesData={this.state.moviesData} />
          </>
        )}
      </div>
    );
  }
}
export default App;
