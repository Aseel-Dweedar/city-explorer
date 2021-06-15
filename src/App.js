import React, { Component } from "react";
import FormData from "./Components/FormData";
import MapAndData from "./Components/MapAndData";
import AlertMsg from "./Components/AlertMsg";
import Weather from "./Components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: "",
      cityInfo: [],
      weatherData: [],
      lat: "",
      lon: "",
      errorMsg: "",
      showImg: false,
      showAlert: false,
    };
  }

  getCityName = (e) => {
    this.setState({
      selectedCity: e.target.value,
    });
  };

  getCityInfo = async (e) => {
    e.preventDefault();
    try {
      await axios
        .get(
          `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&city=${this.state.selectedCity}&format=json`
        )
        .then((axiosResponse) => {
          this.setState({
            cityInfo: axiosResponse.data[0],
            lat: axiosResponse.data[0].lat,
            lon: axiosResponse.data[0].lon,
          });
          axios
            .get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`)
            .then((weatherResponse) => {
              this.setState({
                weatherData: weatherResponse.data,
                showImg: true,
                showAlert: false,
              });
            });
        });
    } catch (error) {
      this.setState({
        errorMsg: error.message,
        showAlert: true,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.showAlert && <AlertMsg errorMsg={this.state.errorMsg} />}
        <FormData getCityName={this.getCityName} getCityInfo={this.getCityInfo} />
        {this.state.showImg && (
          <div>
            <MapAndData cityInfo={this.state.cityInfo} />
            <Weather weatherData={this.state.weatherData} />
          </div>
        )}
      </div>
    );
  }
}
export default App;
