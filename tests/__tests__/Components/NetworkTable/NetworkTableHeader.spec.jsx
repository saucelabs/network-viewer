import React from 'react';
import { mount } from 'enzyme';

import NetworkTableHeader from './../../../../src/Components/NetworkTable/NetworkTableHeader';
import NetworkProvider from '../../../../src/state/network/NetworkProvider';

describe('NetworkTableHeader', () => {
  it('renders without crashing', () => {
    const element = mount(
      <NetworkProvider>
        <NetworkTableHeader />
      </NetworkProvider>,
    );
    expect(element).toMatchSnapshot();
  });
});
