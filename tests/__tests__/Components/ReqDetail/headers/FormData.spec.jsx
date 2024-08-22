import React from 'react';
import { shallow } from 'enzyme';

import FormData from '../../../../../src/Components/ReqDetail/sections/FormData';

describe('FormData', () => {
  const props = {
    data: {
      headers: {
        postData: {
          params: [{
            name: 'foo',
            value: 'bar',
          }],
        },
      },
    },
    isPayloadTransformed: true,
  };

  it('renders without crashing', () => {
    const element = shallow(<FormData {...props} />);
    expect(element).toMatchSnapshot();
  });
});
