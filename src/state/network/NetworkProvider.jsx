import React, { useEffect, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from './reducer';
import { updateData, fetchFile } from './actions';
import { NetworkContext } from './Context';

const NetworkProvider = (props) => {
  const { data, file, fetchOptions } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  useEffect(() => {
    if (data && data.log && data.log.entries) {
      updateData(dispatch)(data.log.entries);
    }
  }, [data]);

  useEffect(() => {
    if (file) {
      fetchFile(dispatch)(file, fetchOptions);
    }
  }, [file]);

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
};

NetworkProvider.defaultProps = {
  data: null,
  fetchOptions: null,
  file: null,
};

export default NetworkProvider;
