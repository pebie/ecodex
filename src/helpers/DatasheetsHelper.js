/**
 * Created by Pebie on 07/08/15.
 */
import DatasheetsActions from '../actions/DatasheetsActions';

let DatasheetsHelper = {
  base: '/api',
  getUrl(api){
    let url = '';
    switch (api) {
      case 'faction':
        url = this.base + '/factions';
        break;
      default:
        break;
    }
    return url;
  },
  setup(api){
    let options = {
      url: '',
      action: ''
    };
    switch (api) {
      case 'faction':
        options.url = this.getUrl(api);
        options.action = DatasheetsActions.create;
        options.key = 'name';
        break;
      default:
        break;
    }
    return options;
  }
};

export default DatasheetsHelper;


