import './_app.scss';

import React, { Component } from 'react';
import {RouteHandler} from 'react-router';
import Navigation from './Navigation';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <RouteHandler />
      </div>
    );
  }
}
