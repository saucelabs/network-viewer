import React from 'react';
import { shallow } from 'enzyme';

import NetworkViewer from './../../src/NetworkViewer';

it('renders without crashing', () => {
  const element = shallow(<NetworkViewer />);
  expect(element).toMatchSnapshot();
});
