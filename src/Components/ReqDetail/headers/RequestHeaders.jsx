import React from 'react';
import PropTypes from 'prop-types';

import Styles from '../ReqDetail.styles.scss';

const RequestHeaders = ({ data }) => (
  <div className={Styles['section-detail']}>
    {data.headers.request.map(({ name, value }, index) => (
      <div
        key={`${name}-${index}`}
        className={Styles['info-row']}
      >
        <span className={Styles['info-caption']}>
          {`${name}:`}
        </span>
        <span className={Styles['info-value']}>
          {value}
        </span>
      </div>
    ))}
  </div>
);

RequestHeaders.propTypes = {
  data: PropTypes.object,
};

RequestHeaders.defaultProps = {
  data: null,
};

export default RequestHeaders;
