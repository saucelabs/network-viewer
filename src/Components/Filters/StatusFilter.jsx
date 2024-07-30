import React from 'react';

import Dropdown from '../Common/Dropdown';
import { useNetwork } from '../../state/network/Context';
import { STATUS_FILTERS } from '../../constants';

const StatusFilter = () => {
  const { state, actions } = useNetwork();
  const filter = state.get('statusFilter');

  return (
    <Dropdown
      items={STATUS_FILTERS}
      onChange={actions.updateStatusFilter}
      selected={filter}
    />
  );
};

export default StatusFilter;
