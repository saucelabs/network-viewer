import React from 'react';
import { mount } from 'enzyme';

import Headers from './../../../../src/Components/ReqDetail/Headers';

describe('Headers', () => {
  const props = {
    data: {
      domain: 'developer.mozilla.org',
      filename: 'slice',
      index: 0,
      method: 'GET',
      size: 135.04,
      startedDateTime: '2019-10-14T08:47:11.592Z',
      status: 200,
      serverIPAddress: ':80',
      timings: {
        _blocked_queueing: 4.382999992230907,
        blocked: 5.496999992230907,
        connect: -1,
        dns: -1,
        receive: 3.252000024076551,
        send: 0.2819999999999998,
        ssl: -1,
        startTime: 0,
        wait: 26.03899999633059,
      },
      type: 'html',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
      headers: {
        response: [{ name: 'Connection', value: 'keep-alive' }],
        request: [{ name: 'Connection', value: 'keep-alive' }],
      },
    },
    maxTime: 5000,
  };

  it('renders without crashing', () => {
    mount(
      <Headers {...props} />,
    );
  });
});
