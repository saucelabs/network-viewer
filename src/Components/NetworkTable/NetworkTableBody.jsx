import React from 'react';

import { useNetwork } from '../../state/network/Context';
import NetworkTableRow from './NetworkTableRow';
import Styles from './NetworkTable.styles.scss';

const NetworkTableBody = () => {
  const {
    state,
    actions,
    callbacks,
  } = useNetwork();
  const data = state.get('data');
  const totalNetworkTime = state.get('totalNetworkTime');
  const selectedReqIndex = state.get('selectedReqIndex');

  const handleReqSelect = (payload) => {
    actions.updateScrollToIndex(payload.index);
    actions.selectRequest(payload);
    callbacks.onRequestSelect(payload);
  };

  return (
    <div className={Styles['network-table-body']}>
      {Array.from(data)
        .map((rowInfo) => (
          <NetworkTableRow
            key={rowInfo.index}
            entry={rowInfo}
            maxTime={totalNetworkTime}
            onSelect={handleReqSelect}
            scrollHighlight={selectedReqIndex === rowInfo.index}
          />
        ))}
      <div />
    </div>
  );
};

export default NetworkTableBody;
