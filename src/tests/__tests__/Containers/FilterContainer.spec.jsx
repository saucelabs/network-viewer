import React from 'react';
import { mount } from 'enzyme';

import FilterContainer from '../../../Containers/FilterContainer';
import { NetworkProvider } from '../../../state/network/provider';

describe('FilterContainer', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <FilterContainer />
      </NetworkProvider>,
    );
  });
});
