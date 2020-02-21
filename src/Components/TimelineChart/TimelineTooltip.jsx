import React from 'react';
import PropTypes from 'prop-types';

import Styles from './TimelineTooltip.styles.scss';
import { formatTime } from '../../utils';

const TimelineTooltip = ({ payload }) => {
  if (!payload || !payload.length) {
    return null;
  }

  return (
    <div className={Styles.tooltip}>
      <div className={Styles.content}>
        {payload[0].payload.filename}
      </div>
      <div>
        {`Started at: ${formatTime(payload[0].payload.timings.startTime)}`}
      </div>
    </div>
  );
};

TimelineTooltip.propTypes = {
  payload: PropTypes.array,
};

TimelineTooltip.defaultProps = {
  payload: null,
};

export default TimelineTooltip;
