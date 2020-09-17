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
  const formattedValue = formatValue(datakey, payload[datakey], unit, payload);
  const shouldDisplayTooltip = (
    datakey === VIEWER_FIELDS.file.key ||
    payload.error
  );

  const getTitle = () => {
    if (datakey === VIEWER_FIELDS.file.key) {
      return payload.url;
    }
    if (payload.error) {
      return payload.error;
    }

    return formattedValue;
  };

  if (!shouldDisplayTooltip) {
    return (
      <td className={context('value-cell', datakey)}>
        <span className={Styles['value-text']}>
          {formattedValue}
        </span>
      </td>
    );
  }

  return (
    <td className={context('value-cell', datakey)}>
      <Popover
        body={<span className={Styles['url-tooltip']}>{getTitle()}</span>}
        isOpen={isOpen}
        preferPlace="below"
      >
        <span
          className={Styles['value-text']}
          onMouseOut={hidePopover}
          onMouseOver={displayPopover}
        >
          {formattedValue}
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
