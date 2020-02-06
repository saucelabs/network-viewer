import React from 'react';
import { shallow } from 'enzyme';

import QueryString from './../../../../../src/Components/ReqDetail/headers/QueryString';

describe('QueryString', () => {
  const props = {
    data: {
      headers: {
        queryString: [{
          name: 'foo',
          value: 'bar',
        }],
      },
    },
    isURLEncoded: true,
  };

  it('renders without crashing', () => {
    shallow(<QueryString {...props} />);
  });
});
