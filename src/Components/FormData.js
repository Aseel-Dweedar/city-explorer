import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class FormData extends Component {
  render() {
    return (
      <Form
        style={{ width: "100%", margin: "Auto", textAlign: "center", marginBottom: "30px" }}
        onSubmit={this.props.getCityInfo}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: "#0a1931", fontSize: "20px" }}>Enter A City Name</Form.Label>
          <Form.Control onChange={this.props.getCityName} type="text" placeholder="Enter city name" />
        </Form.Group>
        <Button style={{ width: "100%", backgroundColor: "#1768AC", color: " white" }} type="submit">
          Explore!
        </Button>
      </Form>
    );
  }
}

export default FormData;
