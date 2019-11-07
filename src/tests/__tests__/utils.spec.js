import * as utils from '../../utils';
import networkDataMock from '../__fixtures__/network.json';
import preparedMockData from '../__fixtures__/preparedData';

describe('utils', () => {
  it('getUrlInfo', () => {
    const url = 'https://developer.mozilla.org/static/fonts/locales/ZillaSlab-Bold.subset.e96c15f68c68.woff2';
    expect(utils.getUrlInfo(url)).toMatchSnapshot();
  });

  it('parseSize', () => {
    const { response } = networkDataMock.log.entries[0];
    expect(utils.parseSize(response)).toMatchSnapshot();
  });

  it('getContentType', () => {
    const { headers } = networkDataMock.log.entries[0].response;
    expect(utils.getContentType(headers)).toMatchSnapshot();
  });

  it('getTimings', () => {
    const firstEntryTime = networkDataMock.log.entries[0].startedDateTime;
    expect(utils.getTimings(networkDataMock.log.entries[3], firstEntryTime)).toMatchSnapshot();
  });

  it('prepareViewerData', () => {
    const { entries } = networkDataMock.log;
    expect(utils.prepareViewerData(entries)).toMatchSnapshot();
  });

  it('sortBy', () => {
    expect(utils.sortBy(preparedMockData, 'size').toJS()).toMatchSnapshot();
  });

  it('filterData', () => {
    expect(utils.filterData(preparedMockData, { search: 'e96c15f68c68' }).toJS()).toMatchSnapshot();
    expect(utils.filterData(preparedMockData, { key: 'type', value: 'html' }).toJS()).toMatchSnapshot();
  });
});