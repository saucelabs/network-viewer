import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';

const QueryString = ({ data, isURLEncoded }) => (
  <div className={Styles['header-detail']}>
    {data.headers.queryString.map(({ name, value }, index) => (
      <p
        key={`${name}-${index}`}
        className={Styles['info-row']}
      >
        <span className={Styles['info-caption']}>
          {`${name}:`}
        </span>
        <span className={Styles['info-value']}>
          {isURLEncoded ? decodeURIComponent(value) : value}
        </span>
      </p>
    ))}
  </div>
);

QueryString.propTypes = {
  data: PropTypes.object,
  isURLEncoded: PropTypes.bool.isRequired,
};

QueryString.defaultProps = {
  data: null,
};

export default QueryString;
