/**
 * Created by bouchez on 30/07/15.
 */
import React, { Component } from 'react';
import { Alert, Button} from 'react-bootstrap';

export default
class Home extends Component {

  callApi() {
    console.log('Home BUTTON handler');
  }

  render() {
    return (
      <div>
        <h1>Hello, home.</h1>
        <Alert bsStyle="warning">
          <Button bsSize="large" bsStyle="success" onClick={this.callApi}>
            This is a cool bootsstrap
          </Button>
        </Alert>
      </div>
    );
  }
}
