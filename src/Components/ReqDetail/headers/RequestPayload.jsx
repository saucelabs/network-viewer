import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Styles from './../Headers.styles.scss';
import { parseRequestPayload } from '../../../utils';

const RequestPayload = ({ data, isPayloadTransformed }) => {
  const payloadData = data.headers.postData.text;
  const parsedData = useMemo(() => parseRequestPayload(payloadData), [payloadData]);

  return (
    <div className={Styles['header-detail']}>
      {isPayloadTransformed ? (
        <div className={Styles['response-content']}>
          <pre className={Styles['log-body-colorless']}>
            {parsedData}
          </pre>
        </div>
      ) : payloadData}
    </div>
  );
};

RequestPayload.propTypes = {
  data: PropTypes.object,
  isPayloadTransformed: PropTypes.bool.isRequired,
};

RequestPayload.defaultProps = {
  data: null,
};

export default RequestPayload;
