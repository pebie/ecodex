import React from 'react';
import DatasheetsStore from '../../stores/DatasheetsStore';
import DatasheetsActions from '../../actions/DatasheetsActions';

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
      <div header='API Tests' bsStyle='primary' className="container">
        <h1>Swager !</h1>
        <button onClick={DatasheetsActions.findOne.bind(this, null)}>FindOne</button>
            <pre>
              <p>Unit name : {this.state.findOne.unitName}</p>
              <p>Unit cost : {this.state.findOne.pointsCost}</p>
              <p>Unit composition : {this.state.findOne.unitComposition}</p>
              <p>...</p>
            </pre>
            <span>
              {this.state.errorMessage}
            </span>
      </div>
    );
  }
}

export default DatasheetsSwager;
