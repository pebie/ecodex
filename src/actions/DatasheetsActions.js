import alt from '../altInstance';
import $ from 'jquery';

class DatasheetsActions {
  constructor() {
    this.generateActions(
      'addCollectionSuccess',
      'addCollectionFail'
    );
  }

  create(url, params) {
    var self = this;
    return new Promise(function (resolve, reject) {
      $.ajax({
        type: 'POST',
        url: url,
        data: params
      })
        .done((data) => {
          self.actions.addCollectionSuccess(data);
          resolve(data);
        })
        .fail((data) => {
          self.actions.addCollectionFail(data.responseJSON.error);
          reject(data);
        });
    });
  }

}

export default alt.createActions(DatasheetsActions);
