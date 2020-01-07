import React from 'react';
import { mount } from 'enzyme';

import NetworkTableHeader from './../../../../src/Components/NetworkTable/NetworkTableHeader';

describe('NetworkTableHeader', () => {
  it('renders without crashing', () => {
    mount(
      <table>
        <NetworkTableHeader showAllCols />
      </table>,
    );
  });
});
