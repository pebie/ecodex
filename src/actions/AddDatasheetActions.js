import alt from '../altInstance';
import $ from 'jQuery';

class AddDatasheetActions {
  constructor() {
    this.generateActions(
      'addDatasheetSuccess',
      'addDatasheetFail',
      'updateFaction',
      'invalidFaction'
    );
  }

  addDatasheet(name, gender) {
    $.ajax({
      type: 'POST',
      url: '/api/characters',
      data: {name: name, gender: gender}
    })
      .done((data) => {
        this.actions.addDatasheetSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addDatasheetFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddDatasheetActions);
