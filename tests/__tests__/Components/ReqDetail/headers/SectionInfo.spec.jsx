import React from 'react';
import { shallow } from 'enzyme';

import SectionInfo from '../../../../../src/Components/ReqDetail/sections/SectionInfo';

describe('SectionInfo', () => {
  const props = {
    eventKey: 'general',
    data: {},
    component: () => {},
  };

  it('renders without crashing', () => {
    const element = shallow(<SectionInfo {...props} />);
    expect(element).toMatchSnapshot();
  });
});
