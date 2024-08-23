import React from 'react';
import { shallow } from 'enzyme';

import SectionTitle from '../../../../../src/Components/ReqDetail/SectionTitle';

describe('SectionTitle', () => {
  const props = {
    eventKey: 'general',
    onClick: () => {},
    onPayloadTransform: () => {},
  };

  it('renders without crashing', () => {
    const element = shallow(<SectionTitle {...props} />);
    expect(element).toMatchSnapshot();
  });
});
