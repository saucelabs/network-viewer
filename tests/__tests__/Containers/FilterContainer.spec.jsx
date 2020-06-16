import React from 'react';
import { mount } from 'enzyme';

import FilterContainer from './../../../src/Containers/FilterContainer';
import NetworkProvider from './../../../src/state/network/NetworkProvider';

describe('FilterContainer', () => {
  it('renders without crashing', () => {
    const element = mount(
      <NetworkProvider>
        <FilterContainer />
      </NetworkProvider>,
    );
    expect(element).toMatchSnapshot();
  });
});
