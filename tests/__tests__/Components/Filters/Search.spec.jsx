import React from 'react';
import { shallow } from 'enzyme';

import Search from './../../../../src/Components/Filters/Search';

describe('Search', () => {
  const params = {
    name: 'url',
    value: 'test',
    onChange: () => {},
  };

  it('renders without crashing', () => {
    shallow(<Search {...params} />);
  });
});
