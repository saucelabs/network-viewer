import React from 'react';
import { shallow } from 'enzyme';

import HeaderTitle from './../../../../src/Components/ReqDetail/HeaderTitle';

describe('HeaderTitle', () => {
  const props = {
    eventKey: 'general',
    onClick: () => {},
  };

  it('renders without crashing', () => {
    shallow(<HeaderTitle {...props} />);
  });
});
