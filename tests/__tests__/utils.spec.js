/* eslint no-useless-escape: 0 */
import { List } from 'immutable';

import * as utils from './../../src/utils';
import networkDataMock from './../__fixtures__/network.json';
import interceptErrorNetworkDataMock from './../__fixtures__/network_intercept_error.json';
import preparedMockData from './../__fixtures__/preparedData';

describe('utils', () => {
  it('getUrlInfo', () => {
    const url = 'https://developer.mozilla.org/static/fonts/locales/ZillaSlab-Bold.subset.e96c15f68c68.woff2';
    expect(utils.getUrlInfo(url)).toMatchSnapshot();
  });

  it('getUrlInfo non standard url / resource identifier', () => {
    const resourceName = 'ResourceIdentifierString';
    const urlInfo = utils.getUrlInfo(resourceName);

    expect(urlInfo).toEqual({
      domain: 'N/A',
      filename: resourceName,
      url: resourceName,
    });
  });

  it('parseSize', () => {
    const { response } = networkDataMock.log.entries[0];
    expect(utils.parseSize(response)).toMatchSnapshot();
  });

  it('getContentType', () => {
    const entry = networkDataMock.log.entries[0];
    expect(utils.getContentType(entry)).toMatchSnapshot();

    const entryWithoutResourceType = {
      ...entry,
      _resourceType: null,
    };
    expect(utils.getContentType(entryWithoutResourceType)).toMatchSnapshot();
  });

  it('getTimings', () => {
    const firstEntryTime = networkDataMock.log.entries[0].startedDateTime;
    expect(utils.getTimings(networkDataMock.log.entries[3], firstEntryTime)).toMatchSnapshot();
  });

  it('prepareViewerData', () => {
    const { entries } = networkDataMock.log;
    expect(utils.prepareViewerData(entries)).toMatchSnapshot();
    expect(utils.prepareViewerData([])).toMatchSnapshot();
  });

  it('prepareViewerData when intercept error exists', () => {
    expect(utils.prepareViewerData(interceptErrorNetworkDataMock.log.entries)).toMatchSnapshot();
  });

  it('sortBy', () => {
    expect(utils.sortBy(preparedMockData, 'size').toJS()).toMatchSnapshot();
  });

  it('filterData', () => {
    expect(utils.filterData({
      data: preparedMockData,
      search: { name: 'url', value: 'e96c15f68c68' },
      filter: {},
      errorFilter: false,
    }).toJS()).toMatchSnapshot();
    expect(utils.filterData({
      data: preparedMockData,
      filter: { key: 'type', value: ['html'] },
      search: {},
      errorFilter: false,
    }).toJS()).toMatchSnapshot();
    expect(utils.filterData({
      data: preparedMockData,
      errorFilter: true,
      search: {},
      filter: {},
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

  it('calcChartAttributes', () => {
    const data = {
      blocked: 240.50000000000034,
      connect: 42,
      dns: 14,
      receive: 7045.500000000004,
      send: 0,
      ssl: 24,
      wait: 786.5000000000023,
      _blocked_queueing: 196.50000000000034,
      startTime: 672,
    };
    expect(utils.calcChartAttributes(data, '17256.999999999985')).toMatchSnapshot();
  });

  it('filterCondition', () => {
    expect(utils.filterCondition({
      filter: { name: 'type', value: ['document', 'html'] },
      info: preparedMockData.get(0),
    })).toMatchSnapshot();
    expect(utils.filterCondition({
      filter: { name: 'error', value: ['error'] },
      info: preparedMockData.get(1),
    })).toMatchSnapshot();
  });

  describe('formatSize', () => {
    it('converts Bytes', () => {
      expect(utils.formatSize(50)).toBe('50 B');
    });

    it('converts Kilobytes', () => {
      expect(utils.formatSize(90001)).toBe('87.9 KB');
    });

    it('converts Megabytes', () => {
      expect(utils.formatSize(4448576)).toBe('4.2 MB');
    });
  });

  describe('formatTime', () => {
    it('converts Millisecond', () => {
      expect(utils.formatTime(900)).toBe('900ms');
    });

    it('converts Seconds', () => {
      expect(utils.formatTime(9001)).toBe('9.01s');
    });

    it('converts Minutes', () => {
      expect(utils.formatTime(90001)).toBe('2m');
    });
  });

  it('getHeaders', () => {
    expect(utils.getHeaders({
      request: {
        headers: [{ name: 'b' }, { name: 'a' }],
      },
      response: {
        headers: [{ name: 'z' }, { name: 'y' }, { name: 'x' }],
      },
    })).toMatchSnapshot();
  });

  describe('roundOff', () => {
    it('should return correct value', () => {
      expect(utils.roundOff(50)).toBe(50);
      expect(utils.roundOff(50.1234)).toBe(50.1);
      expect(utils.roundOff(50.1634)).toBe(50.2);
      expect(utils.roundOff(50.1634, 2)).toBe(50.16);
    });
  });

  describe('getSummary', () => {
    it('should return correct value', () => {
      const data = new List([{
        transferredSize: 1343,
        uncompressedSize: 2400,
      }, {
        transferredSize: 2090,
        uncompressedSize: 3000,
      }, {
        transferredSize: 200,
        uncompressedSize: 650,
      }]);
      expect(utils.getSummary(data)).toMatchSnapshot();
    });
  });

  describe('getTotalTimeOfEntry', () => {
    it('should return totalTimeOfEntry', () => {
      expect(utils.getTotalTimeOfEntry(networkDataMock.log.entries[0])).toMatchSnapshot();
    });

    it('should work without _blocked_queueing in timings', () => {
      // eslint-disable-next-line camelcase
      const { _blocked_queueing, ...timings } = networkDataMock.log.entries[0].timings;
      const entry = { ...networkDataMock.log.entries[0], timings };
      expect(utils.getTotalTimeOfEntry(entry)).toMatchSnapshot();
    });
  });

  it('findIndexNearTimestamp', () => {
    expect(utils.findIndexNearTimestamp(preparedMockData, 1571042841141)).toMatchSnapshot();
  });

  it('findIndexBeforeTimestamp', () => {
    expect(utils.findIndexBeforeTimestamp(preparedMockData, 1571042835643)).toMatchSnapshot();
  });

  it('findIndexAfterTimestamp', () => {
    expect(utils.findIndexAfterTimestamp(preparedMockData, 1571042835643)).toMatchSnapshot();
  });

  it('getStatusClass', () => {
    expect(utils.getStatusClass({ status: 200 })).toBe('info');
    expect(utils.getStatusClass({ status: 503 })).toBe('error');
    expect(utils.getStatusClass({ status: 0, error: 'ERR' })).toBe('error');
    expect(utils.getStatusClass({ status: 0 })).toBe('pending');
  });

  it('formatValue', () => {
    expect(utils.formatValue('status', 200)).toBe(200);
    expect(utils.formatValue('status', 0, '', { error: 'ERR' })).toBe('(failed)');
    expect(utils.formatValue('status', 0)).toBe('Pending');
    expect(utils.formatValue('status', 0)).toBe('Pending');
  });

  it('getInterceptError', () => {
    expect(utils.getInterceptError({ response: { _error: 'ERR_TIMED_OUT' } })).toBe('ERR_TIMED_OUT');
    expect(utils.getInterceptError({ response: { } })).toBe(null);
  });

  it('parseRequestPayload', () => {
    expect(utils.parseRequestPayload("{'name':'foo'}")).toMatchSnapshot();
    expect(utils.parseRequestPayload('foo')).toBe('foo');
  });
});
