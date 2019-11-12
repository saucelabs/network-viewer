import React from 'react';
import './App.css';
import { NetworkProvider } from './state/network/provider';
import FilterContainer from './Containers/FilterContainer';
import Notification from './Components/Notification';

function App() {
  return (
    <NetworkProvider>
      <Notification />
      <FilterContainer />
    </NetworkProvider>
  );
}

export default App;
