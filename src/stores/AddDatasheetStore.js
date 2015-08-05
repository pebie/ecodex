import alt from '../altInstance';
import AddDatasheetActions from '../actions/AddDatasheetActions';

class AddDatasheetStore {
  constructor() {
    this.bindActions(AddDatasheetActions);
    this.dataModel = {};
  }

  onAddDatasheetSuccess(successMessage) {
  }

  onAddDatasheetFail(errorMessage) {
  }
}

export default alt.createStore(AddDatasheetStore);
