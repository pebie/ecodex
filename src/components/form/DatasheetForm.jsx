import React from 'react';
import DatasheetsStore from '../../stores/DatasheetsStore';
import DatasheetsActions from '../../actions/DatasheetsActions';
import {PageHeader, TabbedArea, TabPane} from 'react-bootstrap';
import InputWithValidation from './InputWithValidation';


let DatasheetForm = React.createClass({
  componentDidMount() {
    DatasheetsStore.listen(this.onChange);
  },

  componentWillUnmount() {
    DatasheetsStore.unlisten(this.onChange);
  },

  render() {
    return (
      <div className="container">
        <PageHeader >Créer une entrée de liste d'Armée</PageHeader>
        <TabbedArea defaultActiveKey={1} style={{marginBottom: '20px'}}>
          <TabPane eventKey={1} tab="Faction">
            <InputWithValidation action={DatasheetsActions.createFaction} label="Créer une faction"/>
          </TabPane>
          <TabPane eventKey={2} tab="Rôle tactique">
            <InputWithValidation action={()=>{return; }} label="Rôle tactique"/>
          </TabPane>
          <TabPane eventKey={3} tab="Unitée">
          </TabPane>

        </TabbedArea>
      </div>
    );
  }
});
export default DatasheetForm;
