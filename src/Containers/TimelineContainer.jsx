import React from 'react';

import { useNetwork } from './../state/network/Context';
import Styles from './TimelineContainer.styles.scss';
import TimelineChart from './../Components/TimelineChart/TimelineChart';

const TimelineContainer = () => {
  const { state } = useNetwork();
  const data = state.get('data');
  const actualData = state.get('actualData');
  const error = state.get('error');
  const totalNetworkTime = state.get('totalNetworkTime');
  if (error || !actualData.size) {
    return null;
  }
  console.log(data.toArray());
  return (
    <section className={Styles['timeline-container']}>
      <TimelineChart
        chartData={data.toArray()}
        totalNetworkTime={totalNetworkTime}
      />
    </section>
  );
};

export default TimelineContainer;
