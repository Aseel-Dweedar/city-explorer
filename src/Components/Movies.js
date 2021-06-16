import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class Movies extends Component {
  render() {
    return (
      <Card
        bg="secondary"
        text="white"
        className="text-center p-3"
        style={{ margin: "50px", width: "30%", height: "750px", display: "inline-block", overflow: "auto" }}
      >
        <Card.Title> {this.props.moviesData.title} </Card.Title>
        <Card.Img
          style={{ maxHeight: "350px" }}
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${this.props.moviesData.image_url}`}
          alt={this.props.title}
          onClick={this.renderModel}
        />
        <Card.Body>
          <Card.Text> Total vote ❤️ = {this.props.moviesData.total_votes} </Card.Text>
          <Card.Text> Vote average: {this.props.moviesData.average_vote} </Card.Text>
          <Card.Text>Popularity: {this.props.moviesData.popularity} </Card.Text>
          <Card.Text> Released date: {this.props.moviesData.released_on} </Card.Text>
          <Card.Text> Review: {this.props.moviesData.overview} </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Movies;
