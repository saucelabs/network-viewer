import React, { useEffect, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from './reducer';
import { updateData, fetchFile, updateScrollToIndex } from './actions';
import { NetworkContext } from './Context';
import { findRequestIndex } from '../../utils';
import { ROW_ID_PREFIX } from '../../constants';

const NetworkProvider = (props) => {
  const {
    data,
    file,
    fetchOptions,
    scrollTimeStamp,
    scrollRequestPosition,
    autoHighlightChange,
    onDataLoaded,
  } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  const selectedReqIndex = value[0].get('selectedReqIndex');
  const requestData = value[0].get('data');
  const showReqDetail = value[0].get('showReqDetail');
  const actualData = value[0].get('actualData');

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

  useEffect(() => {
    if (actualData.size) {
      onDataLoaded(actualData);
    }
  }, [actualData]);

  // Find nearby request-rowId and update scrollIndex on scrollTimeStamp receive
  useEffect(() => {
    const shouldChangeHighlight = showReqDetail ? autoHighlightChange : true;
    if (scrollTimeStamp && shouldChangeHighlight) {
      const reqIndex = findRequestIndex({
        data: requestData,
        timestamp: scrollTimeStamp,
        position: scrollRequestPosition,
      });
      if (reqIndex || reqIndex === 0) {
        updateScrollToIndex(dispatch)(requestData.get(reqIndex));
      }
    }
  }, [scrollTimeStamp, actualData]);

  // Scroll to request row onChange of scrollToIndex
  // setTimeout is required when reqDetail is visible,
  // it allows DOM to adjust before we scroll it to highlighted request
  useEffect(() => {
    if (selectedReqIndex) {
      setTimeout(() => {
        const element = document.getElementById(ROW_ID_PREFIX + selectedReqIndex);
        if (element) {
          element.scrollIntoView({
            alignToTop: true,
            behavior: 'smooth',
          });
        }
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
  autoHighlightChange: PropTypes.bool,
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
  onDataLoaded: PropTypes.func,
  scrollRequestPosition: PropTypes.oneOf(['before', 'after', 'near']),
  scrollTimeStamp: PropTypes.number,
};

NetworkProvider.defaultProps = {
  autoHighlightChange: false,
  data: null,
  fetchOptions: { withCredentials: true },
  file: null,
  onDataLoaded: null,
  scrollRequestPosition: 'near',
  scrollTimeStamp: null,
};

export default NetworkProvider;
