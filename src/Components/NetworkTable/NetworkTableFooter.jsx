import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Styles from './NetworkTableFooter.styles.scss';
import { formatSize, formatTime } from './../../utils';

const context = classNames.bind(Styles);

const NetworkTableFooter = ({ dataSummary }) => (
  <table className={context('container')}>
    <tbody
      className={context('container')}
    >
      <tr>
        <td>
          {`${dataSummary.get('totalRequests')} requests`}
        </td>
        <td>
          <span>
            {formatSize(dataSummary.get('totalTransferredSize'))}
          </span>
          <span>
            {`(${formatSize(dataSummary.get('totalUncompressedSize'))} Uncompressed)`}
          </span>
        </td>
        <td>
          <span>
            {`${formatTime(dataSummary.get('timings').DOMContentLoaded)}`}
          </span>
          <span>
            {`(onload: ${formatTime(dataSummary.get('timings').onLoad)})`}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
);

NetworkTableFooter.propTypes = {
  dataSummary: PropTypes.object.isRequired,
};

export default NetworkTableFooter;
