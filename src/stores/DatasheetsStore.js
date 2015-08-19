import alt from '../altInstance';
import DatasheetsActions from '../actions/DatasheetsActions';

class DatasheetsStore {
  constructor() {
    this.bindActions(DatasheetsActions);
    this.findOne = {};
    this.errorMessage = null;
  }

  onFindOneSuccess(data) {
    this.errorMessage = null;
    this.findOne = data;
  }

  onFindOneFail(error) {
    this.errorMessage = error.message;
  }

  onCreateFactionSuccess(data) {
    this.errorMessage = null;
    this.findOne = data;
  }

  oncreateFactionFail(error) {
    this.errorMessage = error.message;
  }
}

export default alt.createStore(DatasheetsStore);
