import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Styles from './NetworkTableFooter.styles.scss';
import { formatSize, formatTime } from './../../utils';

const context = classNames.bind(Styles);

const NetworkTableFooter = ({ dataSummary }) => (
  <tfoot>
    <tr className={context('footer')}>
      <td colSpan={3}>
        {`${dataSummary.get('totalRequests')} requests`}
      </td>
      <td colSpan={3}>
        {formatSize(dataSummary.get('totalTransferredSize'))}
        {' '}
        {`(${formatSize(dataSummary.get('totalUncompressedSize'))} Uncompressed)`}
      </td>
      <td colSpan={2}>
        {`${formatTime(dataSummary.get('timings').DOMContentLoaded)}`}
        {' '}
        {`(onload: ${formatTime(dataSummary.get('timings').onLoad)})`}
      </td>
    </tr>
  </tfoot>
);

NetworkTableFooter.propTypes = {
  dataSummary: PropTypes.object.isRequired,
};

export default NetworkTableFooter;
