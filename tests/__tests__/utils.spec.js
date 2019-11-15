/* eslint no-useless-escape: 0 */

import * as utils from './../../src/utils';
import networkDataMock from './../__fixtures__/network.json';
import preparedMockData from './../__fixtures__/preparedData';

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
    expect(utils.filterData({
      data: preparedMockData,
      search: { name: 'url', value: 'e96c15f68c68' },
      filter: {},
    }).toJS()).toMatchSnapshot();
    expect(utils.filterData({
      data: preparedMockData,
      filter: { key: 'type', value: ['html'] },
      search: {},
    }).toJS()).toMatchSnapshot();
  });

  it('getContent', () => {
    expect(utils.getContent({
      mimeType: 'application/json',
      text: '{\n  \"foo\": \"bar\"\n}',
    })).toMatchSnapshot();
    expect(utils.getContent({ content: 'cool' })).toMatchSnapshot();
  });

  it('prepareTooltipData', () => {
    const data = {
      blocked: 53.00000000000955,
      connect: 32,
      dns: 9,
      receive: 530.0000000000152,
      send: 5,
      ssl: 20,
      wait: 588.9999999999925,
      _blocked_queueing: 2.0000000000095497,
      startTime: 671,
    };
    expect(utils.prepareTooltipData(data)).toMatchSnapshot();
  });

  it('calcTotalTime', () => {
    const data = {
      blocked: 53.00000000000955,
      connect: 32,
      dns: 9,
      receive: 530.0000000000152,
      send: 5,
      ssl: 20,
      wait: 588.9999999999925,
      _blocked_queueing: 2.0000000000095497,
      startTime: 671,
    };
    expect(utils.calcTotalTime(data)).toMatchSnapshot();
  });
});
