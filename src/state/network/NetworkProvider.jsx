import React, { useEffect, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from './reducer';
import { updateData, fetchFile, updateScrollToIndex } from './actions';
import { NetworkContext } from './Context';
import { findIndexByTimeStamp } from '../../utils';
import { ROW_ID_PREFIX } from '../../constants';

const NetworkProvider = (props) => {
  const { data, file, fetchOptions, scrollTimeStamp } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  useEffect(() => {
    if (data && data.log && data.log.entries) {
      updateData(dispatch)({
        entries: data.log.entries,
        pages: data.log.pages,
      });
    }
  }, [data]);

  useEffect(() => {
    if (file) {
      fetchFile(dispatch)(file, fetchOptions);
    }
  }, [file]);

  useEffect(() => {
    if (scrollTimeStamp) {
      const matchedRowId = findIndexByTimeStamp(state.get('data'), scrollTimeStamp);
      if (matchedRowId) {
        updateScrollToIndex(dispatch)(matchedRowId);
        document.getElementById(ROW_ID_PREFIX + matchedRowId).scrollIntoView({
          alignToTop: true,
          behavior: 'smooth',
        });
      }
    }
  }, [scrollTimeStamp]);

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
  scrollTimeStamp: PropTypes.number,
};

NetworkProvider.defaultProps = {
  data: null,
  fetchOptions: null,
  file: null,
  scrollTimeStamp: null,
};

export default NetworkProvider;
