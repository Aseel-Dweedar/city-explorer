import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
class Header extends React.Component {
  render() {
    return (
      <Navbar style={{ marginBottom: "30px", backgroundColor: "#FFC107" }}>
        <Container>
          <Navbar.Brand href="#home">Explore Your Favorite City</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
