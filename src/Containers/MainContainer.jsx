import React from 'react';

import { useNetwork } from '../state/network/Context';
import FilterContainer from './FilterContainer';
import NetworkTableContainer from './NetworkTableContainer';
import LoaderContainer from '../Components/LoaderContainer';
import { FETCH_FILE_LOAD_TEXT } from '../constants';

const MainContainer = () => {
  const { state } = useNetwork();
  const loading = state.get('loading');

  return (
    <>
      <FilterContainer />
      <LoaderContainer
        show={loading}
        text={FETCH_FILE_LOAD_TEXT}
      >
        <NetworkTableContainer />
      </LoaderContainer>
    </>
  );
};

export default MainContainer;
