import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../ReqDetail.styles.scss';

const ResponseHeaders = ({ data }) => (
  <div className={Styles['header-detail']}>
    {data.headers.response.map(({ name, value }, index) => (
      <p
        key={`${name}-${index}`}
        className={Styles['info-row']}
      >
        <span className={Styles['info-caption']}>
          {`${name}:`}
        </span>
        <span className={Styles['info-value']}>
          {value}
        </span>
      </p>
    ))}
  </div>
);

ResponseHeaders.propTypes = {
  data: PropTypes.object,
};

ResponseHeaders.defaultProps = {
  data: null,
};

export default ResponseHeaders;
