import React from 'react';
import { shallow } from 'enzyme';

import HeaderTitle from './../../../../../src/Components/ReqDetail/headers/HeaderTitle';

describe('HeaderTitle', () => {
  const props = {
    eventKey: 'general',
    onClick: () => {},
    onChangeEncode: () => {},
  };

  it('renders without crashing', () => {
    shallow(<HeaderTitle {...props} />);
  });
});
