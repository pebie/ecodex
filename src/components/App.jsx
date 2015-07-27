import React, { Component } from 'react';
import {RouteHandler} from 'react-router';
import Header from './Header';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
}
