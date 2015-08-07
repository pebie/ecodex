import alt from '../altInstance';
import DatasheetsApiUrl from '../constants/DatasheetsApiUrl';
import $ from 'jQuery';

class DatasheetsActions {
  constructor() {
    this.generateActions(
      'findOneSuccess',
      'findOneFail'
    );
  }

  findOne(filter) {
    let url = (filter) ? DatasheetsApiUrl.findOneWithFilter + filter : DatasheetsApiUrl.findOne;
    $.ajax({
      type: 'GET',
      url: url
    })
      .done((data) => {
        this.actions.findOneSuccess(data);
      })
      .fail((data) => {
        this.actions.findOneFail(data.responseJSON.error);
      });
  }
}

export default alt.createActions(DatasheetsActions);
