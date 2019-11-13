import React from 'react';
import PropTypes from 'prop-types';

import { VIEWER_FIELDS } from './../../constants';
import Styles from './NetworkTableHeader.styles.scss';

const NetworkTableRow = ({ payload }) => (
  <tr>
    {VIEWER_FIELDS.map(({ key, unit }) => (
      <td
        key={key}
        className={Styles[key]}
      >
        {payload[key]}
        {' '}
        {unit}
      </td>
    ))}
  </tr>
);

NetworkTableRow.propTypes = {
  payload: PropTypes.object.isRequired,
};

export default NetworkTableRow;
