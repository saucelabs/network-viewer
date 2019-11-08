import React from 'react';
import ImportHar from '../Components/ImportHAR';
import { useNetwork } from '../state/network/provider';

const FilterContainer = () => {
  const { actions } = useNetwork();

  const prepareData = newNetworkData => (
    actions.updateData(newNetworkData.log.entries)
  );

  return (
    <div>
      <ImportHar onError={actions.errorNotification} onDataLoad={prepareData} />
    </div>
  );
};

export default FilterContainer;
