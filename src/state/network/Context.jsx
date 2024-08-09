import React, { useContext } from 'react';

import { actionsWrapper } from './../../utils';
import * as actions from './actions';

export const NetworkContext = React.createContext();

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  const [state, dispatch, callbacks] = context;

  const wrappedActions = actionsWrapper({
    updateData: actions.updateData,
    updateSearch: actions.updateSearch,
    updateSort: actions.updateSort,
    updateStatusFilter: actions.updateStatusFilter,
    updateTypeFilter: actions.updateTypeFilter,
    updateErrorMessage: actions.updateErrorMessage,
    selectRequest: actions.selectRequest,
    setTableHeaderWidth: actions.setTableHeaderWidth,
    updateScrollToIndex: actions.updateScrollToIndex,
    resetState: actions.resetState,
  })(dispatch, state);

  return {
    state,
    dispatch,
    actions: wrappedActions,
    callbacks,
  };
};
