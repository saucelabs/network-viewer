import React from 'react';
import PropTypes from 'prop-types';

import Styles from './ReqDetail.styles.scss';
import CopyAllButton from './CopyAllButton';

const NoResponseText = () => (
  <h4 className={Styles['no-payload']}>This request has no response data available.</h4>
);

const Response = ({ data }) => {
  const content = data && data.body ? data.body : null;

  if (!content) {
    return <NoResponseText />;
  }

  return (
    <div className={Styles['section-detail']}>
      <div className={Styles['payload-content']}>
        <div className={Styles['copy-button']}>
          <CopyAllButton text={content} />
        </div>
        <span className={Styles['payload-body']}>
          {content}
        </span>
      </div>
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
