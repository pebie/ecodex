import React from 'react';
import AddDatasheetStore from '../stores/AddDatasheetStore';
import {Input, Panel} from 'react-bootstrap';

class AddDatasheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddDatasheetStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddDatasheetStore.listen(this.onChange);
    AddDatasheetStore.getModel();
  }

  componentWillUnmount() {
    AddDatasheetStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="row">
        <div className='col-sm-8'>
          <Panel header='Créer une nouvelle fiche technique' bsStyle='primary'>
            <form>
              <Input label="Faction"
                type="text"
                ref="factionTextField"
                bsStyle={this.renderClassValidationName()}
                hasFeedback/>
            </form>
          </Panel>
        </div>
      </div>
    );
  }
}

export default AddDatasheet;
