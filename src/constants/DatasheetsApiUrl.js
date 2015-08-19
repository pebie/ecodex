/**
 * Created by Pebie on 07/08/15.
 */
const base = '/api';
const DatasheetsApiUrl = {
  base: base,
  findOne: base + '/datasheets/findOne',
  findOneWithFilter: base + '/datasheets/findOne?filter=',
  createFaction: base + '/factions'
};

export default DatasheetsApiUrl;
