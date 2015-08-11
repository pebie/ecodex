/**
 * Created by bouchez on 30/07/15.
 */
import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from './components/app/App';
import DatasheetsSwager from './components/common/DatasheetsSwager';
import DatasheetForm from './components/form/DatasheetForm';


export default (
  <Route handler={App}>
    <DefaultRoute />
    <Route path='/swager' handler={DatasheetsSwager}/>
    <Route path='/datasheet' handler={DatasheetForm}/>
  </Route>
);
