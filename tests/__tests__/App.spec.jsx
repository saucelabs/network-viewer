import React from 'react';
import { shallow } from 'enzyme';

import App from './../../src/App';

it('renders without crashing', () => {
  shallow(<App />);
});
