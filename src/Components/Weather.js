import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.weatherData.map(value => {
                return (
                  <ListGroup
                  style={{ width: "30%" , margin: 'Auto' , textAlign: 'center'}}
                  >
                      <ListGroup.Item style={{ backgroundColor: '#77ACF1', color: 'white'}}>{value.weather.description}</ListGroup.Item>
                  </ListGroup>
                )
              })
            }
      </div>
    )
  }
}

export default Weather
