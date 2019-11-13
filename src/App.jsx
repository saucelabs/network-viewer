import React from 'react';

import { NetworkProvider } from './state/network/provider';
import FilterContainer from './Containers/FilterContainer';
import Notification from './Components/Notification';
import NetworkTableContainer from './Containers/NetworkTableContainer';

import './App.scss';

function App() {
  return (
    <NetworkProvider>
      <Notification />
      <FilterContainer />
      <NetworkTableContainer />
    </NetworkProvider>
  );
}

export default App;
