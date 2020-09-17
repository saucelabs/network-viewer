import React from 'react';
import { shallow } from 'enzyme';

import General from './../../../../../src/Components/ReqDetail/headers/General';

describe('General', () => {
  const props = {
    data: {},
  };

  it('renders without crashing', () => {
    const element = shallow(<General {...props} />);
    expect(element).toMatchSnapshot();
  });

  it('renders intercept error', () => {
    const element = shallow(<General data={{ error: 'ERR_TIMED_OUT' }} />);
    expect(element).toMatchSnapshot();
  });
});
