import React from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';

const FormData = ({ data, isPayloadTransformed }) => (
  <div className={Styles['header-detail']}>
    {data.headers.postData.params.map(({ name, value }, index) => (
      <p
        key={`${name}-${index}`}
        className={Styles['info-row']}
      >
        <span className={Styles['info-caption']}>
          {`${name}:`}
        </span>
        <span className={Styles['info-value']}>
          {isPayloadTransformed ? decodeURIComponent(value) : value}
        </span>
      </p>
    ))}
  </div>
);

FormData.propTypes = {
  data: PropTypes.object,
  isPayloadTransformed: PropTypes.bool.isRequired,
};

FormData.defaultProps = {
  data: null,
};

export default FormData;
