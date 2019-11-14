import React, { useContext } from 'react';

import { actionsWrapper } from './../../utils';
import * as actions from './actions';

export const NetworkContext = React.createContext();

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  const [state, dispatch] = context;

  const wrappedActions = actionsWrapper({
    updateData: actions.updateData,
    updateSearch: actions.updateSearch,
    updateSort: actions.updateSort,
    updateFilter: actions.updateFilter,
    errorNotification: actions.errorNotification,
    warningNotification: actions.warningNotification,
    successNotification: actions.successNotification,
    infoNotification: actions.infoNotification,
    dismissNotification: actions.dismissNotification,
  })(dispatch, state);

  return {
    state,
    dispatch,
    actions: wrappedActions,
  };
};
