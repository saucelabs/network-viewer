import React from 'react';
import PropTypes from 'prop-types';

import { HEADERS_TITLES } from './../../../constants';
import IconCaret from './../../../Icons/IconCaretUp';
import Styles from './../Headers.styles.scss';

const ENCODE_TEXT = {
  true: 'URL encoded',
  false: 'decoded',
};

const HeaderTitle = ({
  onClick,
  eventKey,
  supportEncode,
  onChangeEncode,
  isURLEncoded,
}) => (
  <div className={Styles['header-title']}>
    <span
      onClick={() => onClick(HEADERS_TITLES[eventKey].key)}
      role="button"
      tabIndex={0}
    >
      <IconCaret className={Styles['caret-icon']} />
      {HEADERS_TITLES[eventKey].name}
    </span>
    {supportEncode && (
      <span
        className={Styles['encode-url']}
        onClick={onChangeEncode}
        role="button"
        tabIndex={0}
      >
        {`view ${ENCODE_TEXT[isURLEncoded]}`}
      </span>
    )}
  </div>
);

HeaderTitle.propTypes = {
  eventKey: PropTypes.string.isRequired,
  isURLEncoded: PropTypes.bool,
  onChangeEncode: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  supportEncode: PropTypes.bool,
};

HeaderTitle.defaultProps = {
  isURLEncoded: true,
  supportEncode: false,
};

export default HeaderTitle;
