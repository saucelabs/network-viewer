import React from 'react';
import { shallow } from 'enzyme';

import Response from './../../../../src/Components/ReqDetail/Response';

describe('Response', () => {
  it('renders without crashing for no content', () => {
    const element = shallow(<Response data={{}} />);
    expect(element).toMatchSnapshot();
  });

  it('renders without crashing for content', () => {
    const element = shallow(<Response data={{ body: '{"foo": "bar"}' }} />);
    expect(element).toMatchSnapshot();
  });
});
