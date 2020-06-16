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
});
