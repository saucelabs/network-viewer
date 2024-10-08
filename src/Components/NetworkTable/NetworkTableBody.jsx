import React, { useEffect, useRef } from 'react';
import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';

import { useNetwork } from '../../state/network/Context';
import NetworkTableRow from './NetworkTableRow';
import { TABLE_ENTRY_HEIGHT } from '../../constants';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import Styles from './NetworkTable.styles.scss';
import { useTheme } from '../../state/theme/Context';
import IconNetworkRequest from '../../icons/IconNetworkRequest';

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
      scrollHighlight={selectedReqIndex === item.index}
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
  const { enableAutoScroll, NoDataPlaceholder } = useTheme();
  const numberOfNewEntries = state.get('numberOfNewEntries');
  const data = state.get('data');
  const actualData = state.get('actualData');
  const totalNetworkTime = state.get('totalNetworkTime');
  const selectedReqIndex = state.get('selectedReqIndex');

  const listRef = useRef(null);
  const { elementDims } = useResizeObserver(listRef?.current?._outerRef || listRef?.current);

  useEffect(() => {
    actions.setTableHeaderWidth(elementDims.width);
  }, [elementDims]);

  useEffect(() => {
    if (enableAutoScroll && listRef?.current?._outerRef) {
      const outerRef = listRef?.current?._outerRef;
      const needToScroll = outerRef.scrollTop +
        outerRef.offsetHeight +
        (numberOfNewEntries * TABLE_ENTRY_HEIGHT) >= outerRef.scrollHeight;
      if (needToScroll) {
        listRef.current._outerRef.scrollTop = outerRef.scrollHeight;
      }
    }
  }, [data, listRef]);

  const handleReqSelect = (payload) => {
    if (selectedReqIndex === payload.index) {
      return;
    }

    actions.updateScrollToIndex(payload.index);
    actions.selectRequest(payload);
    callbacks.onRequestSelect(payload);
  };

  if (actualData.size === 0) {
    return (
      <div
        ref={listRef}
        className={Styles['no-data']}
      >
        <IconNetworkRequest className={Styles['network-icon']} />
        {NoDataPlaceholder && <NoDataPlaceholder />}
        {!NoDataPlaceholder && (
          <>
            <span className={Styles.header}>Recording network activity</span>
            <span className={Styles.subtext}>Perform a request to see the network activity</span>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <FixedSizeList
        ref={listRef}
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
