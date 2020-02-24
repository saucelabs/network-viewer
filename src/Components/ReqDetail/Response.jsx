import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Response.styles.scss';

const NoResponseText = () => (
  <h4 className={Styles['no-response']}>This request has no response data available.</h4>
);

const Response = ({ data }) => {
  const content = data && data.body ? data.body : null;

  if (!content) {
    return <NoResponseText />;
  }

  return (
    <div className={Styles['response-content']}>
      <pre className={Styles['log-body-colorless']}>
        {content}
      </pre>
    </div>
  );
};

Response.propTypes = {
  data: PropTypes.object,
};

Response.defaultProps = {
  data: null,
};

export default Response;
