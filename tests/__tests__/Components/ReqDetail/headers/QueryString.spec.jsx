import React from 'react';
import { shallow } from 'enzyme';

import QueryString from '../../../../../src/Components/ReqDetail/sections/QueryString';

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
    isPayloadTransformed: true,
  };

  it('renders without crashing', () => {
    const element = shallow(<QueryString {...props} />);
    expect(element).toMatchSnapshot();
  });
});
