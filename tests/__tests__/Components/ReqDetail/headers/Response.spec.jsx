import React from 'react';
import { shallow } from 'enzyme';

import Response from './../../../../../src/Components/ReqDetail/headers/Response';

describe('Response', () => {
  const props = {
    data: {
      headers: {
        response: [{
          name: 'foo',
          value: 'bar',
        }],
      },
    },
    isURLEncoded: true,
  };

  it('renders without crashing', () => {
    shallow(<Response {...props} />);
  });
});
