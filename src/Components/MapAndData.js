import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export class MapAndData extends Component {
  render() {
    return (
      <>
        <h5 style={{ textAlign: "center" }}> CITY INFO</h5>
        <Card
          text="white"
          className="text-center p-3"
          style={{ width: "100%", margin: "Auto", marginBottom: "30px", backgroundColor: "#1768AC" }}
        >
          <Image
            style={{ width: "100%" }}
            src={this.props.cityInfo.img}
            alt={this.props.cityInfo.display_name}
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
      </>
    );
  }
}

export default MapAndData;
