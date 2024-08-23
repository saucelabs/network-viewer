import React from 'react';
import { shallow } from 'enzyme';

import RequestPayload from '../../../../../src/Components/ReqDetail/request/RequestPayload';

describe('RequestPayload', () => {
  const props = {
    data: {
      headers: {
        postData: {
          text: "{ 'name': 'foo' }",
        },
      },
    },
    isPayloadTransformed: true,
  };

  it('renders without crashing', () => {
    const element = shallow(<RequestPayload {...props} />);
    expect(element).toMatchSnapshot();
  });
});
