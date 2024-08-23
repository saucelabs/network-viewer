import React from 'react';
import { shallow } from 'enzyme';

import ResponseHeaders from '../../../../../src/Components/ReqDetail/headers/ResponseHeaders';

describe('ResponseHeaders', () => {
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
    const element = shallow(<ResponseHeaders {...props} />);
    expect(element).toMatchSnapshot();
  });
});
