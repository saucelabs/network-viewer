import React from 'react';
import { shallow } from 'enzyme';

import LoaderContainer from './../../../src/Components/LoaderContainer';

describe('LoaderContainer', () => {
  const props = {
    show: true,
    text: 'Loader text',
  };

  it('renders without crashing', () => {
    const element = shallow(
      <LoaderContainer {...props}>
        <p>Loaded</p>
      </LoaderContainer>,
    );
    expect(element).toHaveLength(1);
  });
});
