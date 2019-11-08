import React from 'react';
import { shallow } from 'enzyme';
import ImportHAR from '../../../Components/ImportHAR';

describe('ImportHAR', () => {
  const NOOP = () => {};

  const props = {
    onDataLoad: NOOP,
    onError: NOOP,
  };

  it('renders without crashing', () => {
    shallow(<ImportHAR {...props} />);
  });
});
