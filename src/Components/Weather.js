import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export class Weather extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> WEATHER DETAILS</h1>
        <ListGroup style={{ width: "30%", margin: "Auto", textAlign: "center" }}>
          {this.props.weatherData.map((value, i) => {
            return (
              <ListGroup.Item key={i} style={{ backgroundColor: "#77ACF1", color: "white", marginBottom: "2px" }}>
                <span>DATE: {value.date}</span>
                <br />
                <span>DESCRIPTION: {value.description}</span>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default Weather;
