/**
 * Created by bouchez on 30/07/15.
 */
import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from './components/app/App';
import DatasheetForm from './components/form/DatasheetForm';

export default (
  <Route handler={App}>
    <DefaultRoute />
    <Route path='/datasheet' handler={DatasheetForm}/>
  </Route>
);
