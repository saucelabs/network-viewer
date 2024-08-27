import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Styles from '../ReqDetail.styles.scss';
import { parseRequestPayload } from '../../../utils';
import CopyAllButton from '../CopyAllButton';

const RequestPayload = ({ data, isPayloadTransformed }) => {
  const payloadData = data.headers.postData.text;
  const parsedData = useMemo(() => parseRequestPayload(payloadData), [payloadData]);
  const payload = isPayloadTransformed ? parsedData : payloadData;

  return (
    <div className={Styles['section-detail']}>
      <div className={Styles['payload-content']}>
        <div className={Styles['copy-button']}>
          <CopyAllButton text={payload} />
        </div>
        <div className={Styles['payload-body']}>
          {payload}
        </div>
      </div>
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
