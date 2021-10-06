import React from 'react';
import PropTypes from 'prop-types';

import { HEADERS_TITLES, PAYLOAD_CAPTIONS } from './../../../constants';
import IconCaretUp from './../../../icons/IconCaretUp';
import Styles from './../Headers.styles.scss';

const HeaderTitle = ({
  onClick,
  eventKey,
  isEncodeEnabled,
  onPayloadTransform,
  isPayloadTransformed,
  isParseEnabled,
}) => {
  const payloadStatus = PAYLOAD_CAPTIONS[isParseEnabled ? 'parse' : 'encode'][isPayloadTransformed];

  return (
    <div className={Styles['header-title']}>
      <span
        onClick={() => onClick(HEADERS_TITLES[eventKey].key)}
        role="button"
        tabIndex={0}
      >
        <IconCaretUp className={Styles['caret-icon']} />
        {HEADERS_TITLES[eventKey].name}
      </span>
      {(isEncodeEnabled || isParseEnabled) && (
        <span
          className={Styles['encode-url']}
          onClick={onPayloadTransform}
          role="button"
          tabIndex={0}
        >
          {`view ${payloadStatus}`}
        </span>
      )}
    </div>
  );
};

HeaderTitle.propTypes = {
  eventKey: PropTypes.string.isRequired,
  isEncodeEnabled: PropTypes.bool,
  isParseEnabled: PropTypes.bool,
  isPayloadTransformed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onPayloadTransform: PropTypes.func.isRequired,
};

HeaderTitle.defaultProps = {
  isEncodeEnabled: false,
  isParseEnabled: false,
  isPayloadTransformed: true,
};

export default HeaderTitle;
