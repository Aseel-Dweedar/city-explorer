import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
export class Movies extends Component {
  render() {
    return (
      <CardColumns style={{ display: "flex", flexWrap: "wrap", width: "90%", margin: "auto" }}>
        {this.props.moviesData.map((movie) => {
          return (
            <Card
              text="white"
              className="text-center p-3"
              style={{
                backgroundColor: "#0A1931",
                display: "inline-block",
                width: "360px",
                height: "500px",
                margin: "20px",
                overflow: "auto",
              }}
            >
              <Card.Title> {movie.title} </Card.Title>
              <Card.Img
                style={{ maxHeight: "350px" }}
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.image_url}`}
                alt={this.props.title}
                onClick={this.renderModel}
              />
              <Card.Body>
                <Card.Text> Total vote ❤️ = {movie.total_votes} </Card.Text>
                <Card.Text> Vote average: {movie.average_vote} </Card.Text>
                <Card.Text>Popularity: {movie.popularity} </Card.Text>
                <Card.Text> Released date: {movie.released_on} </Card.Text>
                <Card.Text> Review: {movie.overview} </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    );
  }
}

export default Movies;
