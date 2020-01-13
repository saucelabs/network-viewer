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
      expect(utils.formatSize(50)).toBe('50B');
    });

    it('converts Kilobytes', () => {
      expect(utils.formatSize(90001)).toBe('88KB');
    });

    it('converts Megabytes', () => {
      expect(utils.formatSize(4448576)).toBe('4MB');
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
});
