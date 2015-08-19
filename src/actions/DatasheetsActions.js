import alt from '../altInstance';
import DatasheetsApiUrl from '../constants/DatasheetsApiUrl';
import $ from 'jquery';

class DatasheetsActions {
  constructor() {
    this.generateActions(
      'findOneSuccess',
      'findOneFail',
      'createFactionSuccess',
      'createFactionFail'
    );
  }

  createFaction(faction) {
    let url = DatasheetsApiUrl.createFaction;
    $.ajax({
      type: 'POST',
      url: url,
      data: faction
    })
      .done((data) => {
        this.actions.createFactionSuccess(data);
      })
      .fail((data) => {
        this.actions.createFactionFail(data.responseJSON.error);
      });
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
