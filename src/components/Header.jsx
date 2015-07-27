import React, { Component } from 'react';
import $ from 'jQuery';
import {Button} from 'react-bootstrap';

export default
class Header extends Component {

  callApi() {
    $.ajax({url: '/api/users'})
      .done((data) => {
        console.log(data);
      })
      .fail((jqXhr) => {
        console.log(jqXhr);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello, header</h1>
        <Button bsStyle='danger' onClick={this.callApi}>Call api</Button>
      </div>
    );
  }
}
