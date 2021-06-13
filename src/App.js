import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedCity : '',
      cityInfo: {},
      showImg : false,
      showAlert : false,
    }
  }

  getCityName = (e) => {
    this.setState({
      selectedCity : e.target.value,
    });
  }

  getCityInfo = async  (e) => {
    e.preventDefault();
    const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&city=${this.state.selectedCity}&format=json`).catch(() => {
      this.setState({
      showAlert : true,
         });
      });    
      this.setState({
      cityInfo : axiosResponse.data[0],
      showImg : true,
      showAlert : false,
    });
  }

  render() {
      return (
        <div>
            {this.state.showAlert &&     
            <Alert variant="success">
              <Alert.Heading>Error 404</Alert.Heading>
              <p>
                "error":"Unable to geocode"
              </p>
            </Alert>}

          <Form
          style={{ width: "25%" , margin: 'Auto', textAlign: 'center' , marginBottom: '30px'}}
          onSubmit={this.getCityInfo}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: '#0a1931', fontSize: '30px'}} >City Name</Form.Label>
              <Form.Control onChange={this.getCityName} type="text" placeholder="Enter city name" />
            </Form.Group>
              <Button style={{ width: "100%" }}  variant="primary" type="submit">
                Explore!
              </Button>
            </Form>
            
        {this.state.showImg &&     

            <Card
              bg="secondary"
              text="white"
              className="text-center p-3"
              style={{ width: "30%", height: "100%" , margin: 'Auto', marginBottom: '30px'}}>
                 <Image style={{ width: "100%" }} src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=15`} rounded  />
              <Card.Body>
                <Card.Title>{this.state.cityInfo.display_name}</Card.Title>
                <Card.Text>
                  <p>{this.state.cityInfo.lat}</p>
                  <p>{this.state.cityInfo.lon}</p>
                </Card.Text>
             </Card.Body>
            </Card>
        }    
        </div>
      )
  }
}

export default App