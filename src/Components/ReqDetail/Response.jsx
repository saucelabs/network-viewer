import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { MAX_COLOR_CONTENT_SIZE } from './../../constants';
import Styles from './Response.styles.scss';

const contentStyles = {
  background: 'transparent',
  minHeight: '100%',
};

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
      {content.length <= MAX_COLOR_CONTENT_SIZE ? (
        <SyntaxHighlighter customStyle={contentStyles}>
          {content}
        </SyntaxHighlighter>
      ) : (
        <pre className={Styles['log-body-colorless']}>
          {content}
        </pre>
      )}
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
