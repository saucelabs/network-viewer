import React from 'react';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

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
            maxTime={totalNetworkTime}
            onSelect={handleReqSelect}
            payload={rowInfo}
            scrollHighlight={selectedReqIndex === rowInfo.index}
          />
        ))}

      {/* <AutoSizer> */}
      {/*   {({ */}
      {/*     height, */}
      {/*     width, */}
      {/*   }) => ( */}
      {/*     <FixedSizeList */}
      {/*       height={height} */}
      {/*       itemCount={data.length} */}
      {/*       itemData={data} */}
      {/*       itemSize={32} */}
      {/*       width={width} */}
      {/*     > */}
      {/*       {({ */}
      {/*         entry, */}
      {/*         index, */}
      {/*         style, */}
      {/*       }) => ( */}
      {/*         <NetworkTableRow */}
      {/*           key={index} */}
      {/*           maxTime={totalNetworkTime} */}
      {/*           onSelect={handleReqSelect} */}
      {/*           payload={entry} */}
      {/*           scrollHighlight={selectedReqIndex === index} */}
      {/*           style={style} */}
      {/*         /> */}
      {/*       )} */}
      {/*     </FixedSizeList> */}
      {/*   )} */}
      {/* </AutoSizer> */}
      <div />
    </div>
  );
};

export default NetworkTableBody;
