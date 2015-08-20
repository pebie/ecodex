import alt from '../altInstance';
import DatasheetsActions from '../actions/DatasheetsActions';

class DatasheetsStore {
  constructor() {
    this.bindActions(DatasheetsActions);
    this.newCollection = {};
    this.errorMessage = null;
  }

  onAddCollectionSuccess(data) {
    this.errorMessage = null;
    this.newCollection = data;
  }

  onAddCollectionFail(error) {
    this.errorMessage = error.message;
  }
}

export default alt.createStore(DatasheetsStore);
