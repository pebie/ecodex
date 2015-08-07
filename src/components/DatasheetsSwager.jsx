import React from 'react';
import DatasheetsStore from '../stores/DatasheetsStore';
import DatasheetsActions from '../actions/DatasheetsActions';
import {Button, Panel} from 'react-bootstrap';

class DatasheetsSwager extends React.Component {
  constructor(props) {
    super(props);
    this.state = DatasheetsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    DatasheetsStore.listen(this.onChange);
  }

  componentWillUnmount() {
    DatasheetsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-8'>
          <Panel header='API Tests' bsStyle='primary'>
            <div>Swager !</div>
            <Button onClick={DatasheetsActions.findOne.bind(this, null)}>FindOne</Button>
            <pre>
              <p>Unit name : {this.state.findOne.unitName}</p>
              <p>Unit cost : {this.state.findOne.pointsCost}</p>
            </pre>
            <span>
              {this.state.errorMessage}
            </span>
          </Panel>
        </div>
      </div>
    );
  }
}

export default DatasheetsSwager;