import React from 'react';
import { mount } from 'enzyme';

import Search from './../../../../src/Components/Filters/Search';
import NetworkProvider from '../../../../src/state/network/NetworkProvider';

describe('Search', () => {
  const params = {
    name: 'url',
    value: 'test',
    onChange: () => {},
  };

  it('renders without crashing', () => {
    const element = mount(
      <NetworkProvider>
        <Search {...params} />
      </NetworkProvider>,
    );
    expect(element).toMatchSnapshot();
  });
});
