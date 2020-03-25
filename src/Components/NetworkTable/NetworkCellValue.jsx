import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Popover from 'react-popover';

import { formatValue } from '../../utils';
import Styles from './NetworkTableHeader.styles.scss';
import { VIEWER_FIELDS } from '../../constants';

const context = classNames.bind(Styles);

const NetworkCellValue = ({ datakey, unit, payload }) => {
  const [isOpen, updateOpen] = useState(false);
  const displayPopover = () => updateOpen(true);
  const hidePopover = () => updateOpen(false);
  const formatedValue = formatValue(datakey, payload[datakey], unit);
  const title = datakey === VIEWER_FIELDS.file.key ? payload.url : formatedValue;

  if (datakey !== VIEWER_FIELDS.file.key) {
    return (
      <td className={context('value-cell', datakey)}>
        <span className={Styles['value-text']}>
          {formatedValue}
        </span>
      </td>
    );
  }

  // Render popover only for file column value
  return (
    <td className={context('value-cell', datakey)}>
      <Popover
        body={<span className={Styles['url-tooltip']}>{title}</span>}
        isOpen={isOpen}
        preferPlace="below"
      >
        <span
          className={Styles['value-text']}
          onMouseOut={hidePopover}
          onMouseOver={displayPopover}
        >
          {formatedValue}
        </span>
      </Popover>
    </td>
  );
};

NetworkCellValue.propTypes = {
  datakey: PropTypes.string.isRequired,
  payload: PropTypes.object,
  unit: PropTypes.string,
};

NetworkCellValue.defaultProps = {
  payload: {},
  unit: null,
};

export default NetworkCellValue;
