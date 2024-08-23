import React from 'react';
import PropTypes from 'prop-types';

import General from './sections/General';
import ResponseHeaders from './sections/ResponseHeaders';
import RequestHeaders from './sections/RequestHeaders';
import SectionInfo from './sections/SectionInfo';
import Styles from './ReqDetail.styles.scss';

const Headers = ({ data }) => (!data ? null : (
  <section className={Styles['section-container']}>
    <SectionInfo
      component={General}
      data={data}
      eventKey="general"
      isVisible
    />
    <SectionInfo
      component={RequestHeaders}
      data={data}
      eventKey="requestHeaders"
    />
    <SectionInfo
      component={ResponseHeaders}
      data={data}
      eventKey="responseHeaders"
    />
  </section>
));

Headers.propTypes = {
  data: PropTypes.object,
};

Headers.defaultProps = {
  data: null,
};

export default Headers;
