import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './../../../src/Components/ErrorMessage';

describe('ErrorMessage', () => {
  const props = {
    title: 'Error message title',
  };

  it('renders without crashing', () => {
    shallow(<ErrorMessage {...props} />);
  });
});
