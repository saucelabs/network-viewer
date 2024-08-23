import React from 'react';
import { shallow } from 'enzyme';

import RequestHeaders from '../../../../../src/Components/ReqDetail/headers/RequestHeaders';

describe('RequestHeaders', () => {
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
    const element = shallow(<RequestHeaders {...props} />);
    expect(element).toMatchSnapshot();
  });
});
