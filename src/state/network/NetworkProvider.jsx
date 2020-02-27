import React, { useEffect, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from './reducer';
import { updateData, fetchFile, updateScrollToIndex } from './actions';
import { NetworkContext } from './Context';
import { findRequestIndex } from '../../utils';
import { ROW_ID_PREFIX } from '../../constants';

const NetworkProvider = (props) => {
  const { data, file, fetchOptions, scrollTimeStamp, scrollRequestPosition } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  const selectedReqIndex = state.get('selectedReqIndex');

  // Update data onChange of network data
  useEffect(() => {
    if (data && data.log && data.log.entries) {
      updateData(dispatch)({
        entries: data.log.entries,
        pages: data.log.pages,
      });
    }
  }, [data]);

  // Fetch HAR file onChange of file prop
  useEffect(() => {
    if (file) {
      fetchFile(dispatch)(file, fetchOptions);
    }
  }, [file]);

  // Find nearby request-rowId and update scrollIndex on scrollTimeStamp receive
  useEffect(() => {
    if (scrollTimeStamp) {
      const requestData = state.get('data');
      const reqIndex = findRequestIndex({
        data: requestData,
        timestamp: scrollTimeStamp,
        position: scrollRequestPosition,
      });
      if (reqIndex || reqIndex === 0) {
        updateScrollToIndex(dispatch)(requestData.get(reqIndex));
      }
    }
  }, [scrollTimeStamp]);

  // Scroll to request row onChange of scrollToIndex
  // setTimeout is required when reqDetail is visible,
  // it allows DOM to adjust before we scroll it to highlighted request
  useEffect(() => {
    if (selectedReqIndex) {
      setTimeout(() => {
        document.getElementById(ROW_ID_PREFIX + selectedReqIndex).scrollIntoView({
          alignToTop: true,
          behavior: 'smooth',
        });
      }, 300);
    }
  }, [selectedReqIndex]);

  return (
    <NetworkContext.Provider
      value={value}
      {...props}
    />
  );
};

NetworkProvider.propTypes = {
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
  scrollRequestPosition: PropTypes.oneOf(['before', 'after', 'near']),
  scrollTimeStamp: PropTypes.number,
};

NetworkProvider.defaultProps = {
  data: null,
  fetchOptions: null,
  file: null,
  scrollRequestPosition: 'near',
  scrollTimeStamp: null,
};

export default NetworkProvider;
