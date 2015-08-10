/**
 * Created by bouchez on 30/07/15.
 */
import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from './components/App';
import DatasheetsSwager from './components/DatasheetsSwager';


export default (
  <Route handler={App}>
    <DefaultRoute />
    <Route path='/swager' handler={DatasheetsSwager}/>
  </Route>
);
