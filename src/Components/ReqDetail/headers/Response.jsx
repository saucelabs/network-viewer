import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';

const Response = ({ data }) => (
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

Response.propTypes = {
  data: PropTypes.object,
};

Response.defaultProps = {
  data: null,
};

export default Response;
