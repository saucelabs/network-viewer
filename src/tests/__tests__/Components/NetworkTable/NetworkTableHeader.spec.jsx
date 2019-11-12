import React from 'react';
import { mount } from 'enzyme';
import NetworkTableHeader from '../../../../Components/NetworkTable/NetworkTableHeader';

describe('NetworkTableHeader', () => {
  it('renders without crashing', () => {
    mount(
      <table>
        <NetworkTableHeader />
      </table>,
    );
  });
});
