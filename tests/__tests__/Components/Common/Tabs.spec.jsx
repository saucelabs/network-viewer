import React from 'react';
import { shallow } from 'enzyme';

import Tabs from './../../../../src/Components/Common/Tabs';
import Tab from './../../../../src/Components/Common/Tab';

describe('Tabs', () => {
  it('renders without crashing', () => {
    shallow(
      <Tabs>
        <Tab
          key="foo"
          name="Foo"
        >
          <p>Foo Bar</p>
        </Tab>
      </Tabs>,
    );
  });
});
