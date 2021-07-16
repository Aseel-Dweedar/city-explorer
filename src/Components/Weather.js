import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export class Weather extends Component {
  render() {
    return (
      <div>
        <h5 style={{ textAlign: "center" }}> WEATHER DETAILS</h5>
        <ListGroup style={{ width: "80%", margin: "Auto", textAlign: "center" }}>
          {this.props.weatherData.map((value, i) => {
            return (
              <ListGroup.Item key={i} style={{ backgroundColor: "#1768AC", color: "white", marginBottom: "2px" }}>
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
