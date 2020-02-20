import React from 'react';
import { shallow } from 'enzyme';

import FormData from './../../../../../src/Components/ReqDetail/headers/FormData';

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
    isURLEncoded: true,
  };

  it('renders without crashing', () => {
    shallow(<FormData {...props} />);
  });
});
