import React from 'react';
import PropTypes from 'prop-types';

import Styles from './ErrorMessage.styles.scss';

const ErrorMessage = ({ title, description }) => (
  <div className={Styles['error-container']}>
    {title && <h4 className={Styles.title}>{title}</h4>}
    {description && <p>{description}</p>}
  </div>
);

ErrorMessage.propTypes = {
  description: PropTypes.any,
  title: PropTypes.any,
};

ErrorMessage.defaultProps = {
  description: null,
  title: null,
};

export default ErrorMessage;
