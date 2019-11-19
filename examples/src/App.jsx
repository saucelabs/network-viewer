import React, { useState } from 'react';

import Tabs from './Components/Tabs';
import LoadedData from './Components/LoadedData';
import DefaultNetworkViewer from './Components/DefaultNetworkViewer';
import ScrollExample from './Components/ScrollExample';
import './app.css';

const ITEMS = ['Default', 'Preloaded Data', 'Auto Scroll by timestamp'];

const App = () => {
  const [key, setKey] = useState('default');

  const renderItem = () => {
    switch (key) {
      case 'Preloaded Data':
        return (<LoadedData />);
      case 'Scroll':
        return (<ScrollExample />);
      case 'Default':
      default:
        return (<DefaultNetworkViewer />);
    }
  };

  return (
    <section className="tab-container">
      <Tabs
        items={ITEMS}
        onUpdate={(item) => setKey(item)}
      />
      <div className="app-container">
        {renderItem()}
      </div>
    </section>
  );
};

export default App;
