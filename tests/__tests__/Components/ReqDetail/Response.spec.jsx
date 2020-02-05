import React from 'react';
import { shallow } from 'enzyme';

import Response from './../../../../src/Components/ReqDetail/Response';

describe('Response', () => {
  it('renders without crashing for no content', () => {
    shallow(<Response data={{}} />);
  });

  it('renders without crashing for content', () => {
    shallow(<Response data={{ body: '{"foo": "bar"}' }} />);
  });
});
