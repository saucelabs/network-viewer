import React from 'react';
import PropTypes from 'prop-types';

import { HEADERS_TITLES, PAYLOAD_CAPTIONS } from './../../../constants';
import IconCaretUp from './../../../icons/IconCaretUp';
import Styles from './../Headers.styles.scss';

const HeaderTitle = ({
  onClick,
  eventKey,
  isEncodeEnable,
  onPayloadTransform,
  isPayloadTransformed,
  isParseEnable,
}) => (
  <div className={Styles['header-title']}>
    <span
      onClick={() => onClick(HEADERS_TITLES[eventKey].key)}
      role="button"
      tabIndex={0}
    >
      <IconCaretUp className={Styles['caret-icon']} />
      {HEADERS_TITLES[eventKey].name}
    </span>
    {(isEncodeEnable || isParseEnable) && (
      <span
        className={Styles['encode-url']}
        onClick={onPayloadTransform}
        role="button"
        tabIndex={0}
      >
        {`view ${PAYLOAD_CAPTIONS[isParseEnable ? 'parse' : 'encode'][isPayloadTransformed]}`}
      </span>
    )}
  </div>
);

HeaderTitle.propTypes = {
  eventKey: PropTypes.string.isRequired,
  isEncodeEnable: PropTypes.bool,
  isParseEnable: PropTypes.bool,
  isPayloadTransformed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onPayloadTransform: PropTypes.func.isRequired,
};

HeaderTitle.defaultProps = {
  isEncodeEnable: false,
  isParseEnable: false,
  isPayloadTransformed: true,
};

export default HeaderTitle;
