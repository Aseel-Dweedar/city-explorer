import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export class Weather extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> WEATHER DETAILS</h1>
        <ListGroup style={{ width: "30%", margin: "Auto", textAlign: "center" }}>
          {this.props.weatherData.map((value) => {
            return (
              <ListGroup.Item style={{ backgroundColor: "#77ACF1", color: "white", marginBottom: "2px" }}>
                <p>DATE: {value.date}</p>
                <p>DESCRIPTION: {value.description}</p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default Weather;
