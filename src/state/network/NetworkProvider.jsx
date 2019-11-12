import React, { useEffect, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from './reducer';
import { updateData } from './actions';
import { NetworkContext } from './Context';

const NetworkProvider = (props) => {
  const { data } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  useEffect(() => {
    if (data && data.log && data.log.entries) {
      updateData(dispatch)(data.log.entries);
    }
  }, [data]);

  return (
    <NetworkContext.Provider
      value={value}
      {...props}
    />
  );
};

NetworkProvider.propTypes = {
  data: PropTypes.object,
};

NetworkProvider.defaultProps = {
  data: null,
};

export default NetworkProvider;
