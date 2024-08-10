import React, { useEffect, useRef } from 'react';
import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';

import { useNetwork } from '../../state/network/Context';
import NetworkTableRow from './NetworkTableRow';
import { TABLE_ENTRY_HEIGHT } from '../../constants';
import { useResizeObserver } from '../../hooks/useResizeObserver';

const virtualizedTableRow = ({
  data,
  index,
  style,
}) => {
  const {
    listData,
    totalNetworkTime,
    handleReqSelect,
    selectedReqIndex,
  } = data;
  const item = listData.get(index);

  return (
    <NetworkTableRow
      key={index}
      entry={item}
      maxTime={totalNetworkTime}
      onSelect={handleReqSelect}
      scrollHighlight={selectedReqIndex === index}
      style={style}
    />
  );
};

const NetworkTableBody = ({ height }) => {
  const {
    state,
    actions,
    callbacks,
  } = useNetwork();
  const data = state.get('data');
  const totalNetworkTime = state.get('totalNetworkTime');
  const selectedReqIndex = state.get('selectedReqIndex');

  const ref = useRef(null);
  const { elementDims } = useResizeObserver(ref);
  useEffect(() => actions.setTableHeaderWidth(elementDims.width), [elementDims]);

  const handleReqSelect = (payload) => {
    actions.updateScrollToIndex(payload.index);
    actions.selectRequest(payload);
    callbacks.onRequestSelect(payload);
  };

  return (
    <FixedSizeList
      ref={ref}
      height={height}
      itemCount={data.size}
      itemData={{
        listData: data,
        totalNetworkTime,
        handleReqSelect,
        selectedReqIndex,
      }}
      itemSize={TABLE_ENTRY_HEIGHT}
    >
      {virtualizedTableRow}
    </FixedSizeList>
  );
};

NetworkTableBody.propTypes = {
  height: PropTypes.number.isRequired,
};

export default NetworkTableBody;
