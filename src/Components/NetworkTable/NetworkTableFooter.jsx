import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Styles from './NetworkTableFooter.styles.scss';
import { formatSize, formatTime } from './../../utils';

const context = classNames.bind(Styles);

const NetworkTableFooter = ({ dataSummary }) => (
  <tfoot>
    <tr className={context('footer')}>
      <td colSpan="100%">
        <span>{`${dataSummary.get('totalRequests')} requests`}</span>
        <span>{`${formatSize(dataSummary.get('totalTransferredSize'))} transferred`}</span>
        <span>{`${formatSize(dataSummary.get('totalUncompressedSize'))} resources`}</span>
        <span>{`Finished: ${formatTime(dataSummary.get('finish'))}`}</span>
        <span>{`DOMContentLoaded: ${formatTime(dataSummary.get('timings').DOMContentLoaded)}`}</span>
        <span>{`Load: ${formatTime(dataSummary.get('timings').onLoad)}`}</span>
      </td>
    </tr>
  </tfoot>
);

NetworkTableFooter.propTypes = {
  dataSummary: PropTypes.object.isRequired,
};

export default NetworkTableFooter;
