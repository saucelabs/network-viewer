import React from 'react';
import { shallow } from 'enzyme';

import HeaderInfo from './../../../../../src/Components/ReqDetail/headers/HeaderInfo';

describe('HeaderInfo', () => {
  const props = {
    eventKey: 'general',
    data: {},
    component: () => {},
  };

  it('renders without crashing', () => {
    shallow(<HeaderInfo {...props} />);
  });
});
