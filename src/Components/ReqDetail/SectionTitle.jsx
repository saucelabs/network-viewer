import React from 'react';
import PropTypes from 'prop-types';

import { SECTION_TITLES, PAYLOAD_CAPTIONS } from '../../constants';
import Styles from './ReqDetail.styles.scss';
import IconCaretDown from '../../icons/IconCaretDown';
import IconCaretRight from '../../icons/IconCaretRight';

const SectionTitle = ({
  onClick,
  eventKey,
  isEncodeEnabled,
  isOpen,
  onPayloadTransform,
  isPayloadTransformed,
  isParseEnabled,
}) => {
  const payloadStatus = PAYLOAD_CAPTIONS[isParseEnabled ? 'parse' : 'encode'][isPayloadTransformed];

  return (
    <div className={Styles['section-title-row']}>
      <span
        className={Styles['section-title']}
        onClick={() => onClick(SECTION_TITLES[eventKey].key)}
        role="button"
        tabIndex={0}
      >
        {isOpen ?
          <IconCaretDown className={Styles['caret-icon']} /> :
          <IconCaretRight className={Styles['caret-icon']} />}
        {SECTION_TITLES[eventKey].name}
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

SectionTitle.propTypes = {
  eventKey: PropTypes.string.isRequired,
  isEncodeEnabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  isParseEnabled: PropTypes.bool,
  isPayloadTransformed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onPayloadTransform: PropTypes.func.isRequired,
};

SectionTitle.defaultProps = {
  isEncodeEnabled: false,
  isOpen: false,
  isParseEnabled: false,
  isPayloadTransformed: true,
};

export default SectionTitle;
