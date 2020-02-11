import React from 'react';
import PropTypes from 'prop-types';

import { HEADERS_TITLES } from './../../constants';
import IconCaretUp from './../../icons/IconCaretUp';
import Styles from './Headers.styles.scss';

const HeaderTitle = ({ onClick, eventKey }) => (
  <div
    className={Styles['header-title']}
    onClick={() => onClick(HEADERS_TITLES[eventKey].key)}
    role="button"
    tabIndex={0}
  >
    <IconCaretUp className={Styles['caret-icon']} />
    {HEADERS_TITLES[eventKey].name}
  </div>
);

HeaderTitle.propTypes = {
  eventKey: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HeaderTitle;
