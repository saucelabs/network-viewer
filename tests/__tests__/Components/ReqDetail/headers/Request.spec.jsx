import React from 'react';
import { shallow } from 'enzyme';

import Request from './../../../../../src/Components/ReqDetail/headers/Request';

describe('Request', () => {
  const props = {
    data: {
      headers: {
        request: [{
          name: 'foo',
          value: 'bar',
        }],
      },
    },
    isURLEncoded: true,
  };

  it('renders without crashing', () => {
    const element = shallow(<Request {...props} />);
    expect(element).toMatchSnapshot();
  });
});
