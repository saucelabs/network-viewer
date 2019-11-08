import React, { useReducer, useContext, useMemo } from 'react';

import { reducer, initialState } from './reducer';
import * as actions from './actions';
import { actionsWrapper } from '../../utils';

export const NetworkContext = React.createContext();

export const NetworkProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <NetworkContext.Provider value={value} {...props} />;
};

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  const [state, dispatch] = context;

  return {
    state,
    dispatch,
    actions: actionsWrapper({
      updateData: actions.updateData,
      updateSearch: actions.updateSearch,
      updateSort: actions.updateSort,
      updateFilter: actions.updateFilter,
      errorNotification: actions.errorNotification,
      warningNotification: actions.warningNotification,
      successNotification: actions.successNotification,
      infoNotification: actions.infoNotification,
      dismissNotification: actions.dismissNotification,
    })(dispatch, state),
  };
};
