import React, { useEffect, useRef } from 'react';
import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';

import { useNetwork } from '../../state/network/Context';
import NetworkTableRow from './NetworkTableRow';
import { TABLE_ENTRY_HEIGHT } from '../../constants';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import Styles from './NetworkTable.styles.scss';
import { useTheme } from '../../state/theme/Context';

/* eslint no-underscore-dangle: 0 */

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
  const { enableAutoScroll } = useTheme();
  const numberOfNewEntries = state.get('numberOfNewEntries');
  const data = state.get('data');
  const totalNetworkTime = state.get('totalNetworkTime');
  const selectedReqIndex = state.get('selectedReqIndex');

  const ref = useRef(null);
  const { elementDims } = useResizeObserver(ref?.current?._outerRef || ref?.current);

  useEffect(() => actions.setTableHeaderWidth(elementDims.width), [elementDims]);

  useEffect(() => {
    if (enableAutoScroll && ref?.current?._outerRef) {
      const outerRef = ref?.current?._outerRef;
      const needToScroll = outerRef.scrollTop +
        outerRef.offsetHeight +
        (numberOfNewEntries * TABLE_ENTRY_HEIGHT) >= outerRef.scrollHeight;
      if (needToScroll) {
        ref.current._outerRef.scrollTop = outerRef.scrollHeight;
      }
    }
  }, [data, ref]);

  const handleReqSelect = (payload) => {
    if (selectedReqIndex === payload.index) {
      return;
    }

    actions.updateScrollToIndex(payload.index);
    actions.selectRequest(payload);
    callbacks.onRequestSelect(payload);
  };

  return (
    <>
      <FixedSizeList
        ref={ref}
        className={Styles['network-table-body']}
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
    </>
  );
};

NetworkTableBody.propTypes = {
  height: PropTypes.number.isRequired,
};

export default NetworkTableBody;
