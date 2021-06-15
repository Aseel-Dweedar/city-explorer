import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export class MapAndData extends Component {
  render() {
    return (
      <Card
        bg="secondary"
        text="white"
        className="text-center p-3"
        style={{ width: "30%", height: "100%", margin: "Auto", marginBottom: "30px" }}
      >
        <Image
          style={{ width: "100%" }}
          src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.cityInfo.lat},${this.props.cityInfo.lon}&zoom=15`}
          rounded
        />
        <Card.Body>
          <Card.Title>{this.props.cityInfo.display_name}</Card.Title>
          <Card.Text>
            <span>Latitude: {this.props.cityInfo.lat}</span>
            <br />
            <span>Longitude: {this.props.cityInfo.lon}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default MapAndData;
