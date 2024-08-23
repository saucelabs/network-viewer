import React from 'react';
import PropTypes from 'prop-types';

import QueryString from './request/QueryString';
import FormData from './request/FormData';
import SectionInfo from './SectionInfo';
import Styles from './ReqDetail.styles.scss';
import RequestPayload from './request/RequestPayload';

const Request = ({ data }) => {
  if (!data.headers.postData?.text &&
    !data.headers.postData?.params &&
    !data.headers.queryString?.length
  ) {
    return (<h4 className={Styles['no-payload']}>This request has no request data available.</h4>);
  }

  return (!data ? null : (
    <section className={Styles['section-container']}>
      {data.headers.postData && data.headers.postData.text && (
        <SectionInfo
          component={RequestPayload}
          data={data}
          eventKey="requestPayload"
          isParseEnabled
          isVisible
        />
      )}
      {data.headers.queryString && !!data.headers.queryString.length && (
        <SectionInfo
          component={QueryString}
          data={data}
          eventKey="queryString"
          isEncodeEnabled
        />
      )}
      {data.headers.postData && data.headers.postData.params && (
        <SectionInfo
          component={FormData}
          data={data}
          eventKey="formData"
          isEncodeEnabled
        />
      )}
    </section>
  ));
};

Request.propTypes = {
  data: PropTypes.object,
};

Request.defaultProps = {
  data: null,
};

export default Request;
