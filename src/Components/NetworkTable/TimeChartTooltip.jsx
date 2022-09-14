import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './TimeChartTooltip.styles.scss';
import { TIMINGS } from '../../constants';
import { prepareTooltipData } from '../../utils';

const context = classNames.bind(Styles);

const DETAIL = [{
  title: 'Resource Scheduling',
  category: ['queueing'],
}, {
  title: 'Connection Start',
  category: ['blocked', 'dns', 'ssl', 'connect'],
}, {
  title: 'Request/Response',
  category: ['send', 'wait', 'receive'],
}];

const TimeChartTooltip = ({ data }) => {
  const tooltipData = useMemo(() => (!data ? null : prepareTooltipData(data)), [data]);

  if (!tooltipData) {
    return null;
  }

  return (
    <div className={Styles.tooltip}>
      <section className={Styles['tooltip-info']}>
        <p className={Styles['time-info']}>
          {`Queued at ${tooltipData.queuedAt}`}
        </p>
        <p className={Styles['time-info']}>
          {`Started at ${tooltipData.startedAt}`}
        </p>
      </section>
      {DETAIL.map(({ title, category }) => (
        <section
          key={title}
          className={Styles['tooltip-info']}
        >
          <table className={Styles['waterfall-tooltip-table']}>
            <thead className={Styles['waterfall-tooltip-thead']}>
              <tr className={Styles['waterfall-tooltip-tr']}>
                <th className={Styles['waterfall-tooltip-th']}>
                  {title}
                </th>
                <th className={Styles['waterfall-tooltip-th']}>
                    DURATION
                </th>
              </tr>
            </thead>
            <tbody className={Styles['waterfall-tooltip-tbody']}>
              {category.map((key) => (
                <tr
                  key={key}
                  className={Styles['waterfall-tooltip-tr']}
                >
                  <td className={context('waterfall-tooltip-key', key)}>
                    {TIMINGS[key].name}
                  </td>
                  <td className={Styles['waterfall-tooltip-value']}>
                    {Array.isArray(TIMINGS[key].dataKey) ? tooltipData[TIMINGS[key].dataKey.find(key => tooltipData[key])] : tooltipData[TIMINGS[key].dataKey]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
      <section className={Styles['tooltip-info']}>
        <p className={Styles['time-info']}>
          {`Total time ${tooltipData.totalTime}`}
        </p>
      </section>
    </div>
  );
};

TimeChartTooltip.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TimeChartTooltip;
