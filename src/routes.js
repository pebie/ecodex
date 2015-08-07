/**
 * Created by bouchez on 30/07/15.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import DatasheetsSwager from './components/DatasheetsSwager';


export default (
  <Route handler={App}>
    <Route path='/' handler={DatasheetsSwager}/>
  </Route>
);
