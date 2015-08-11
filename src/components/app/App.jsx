import './app.scss';

import React, { Component } from 'react';
import {RouteHandler} from 'react-router';
import Navigation from './../navigation/Navigation';

export default class App extends Component {

  render() {
    return (
      <div className='wrapper'>
        <Navigation />
        <RouteHandler className='container main-container'/>
      </div>
    );
  }
}
