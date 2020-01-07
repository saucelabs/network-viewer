import React from 'react';

import Tabs from './../../src/Components/Common/Tabs';
import Tab from './../../src/Components/Common/Tab';
import LoadedData from './Components/LoadedData';
import DefaultNetworkViewer from './Components/DefaultNetworkViewer';
import ScrollExample from './Components/ScrollExample';
import './app.css';

const App = () => (
  <section className="app-container">
    <Tabs
      defaultSelectedKey="preloaded"
      tabsContainerClassName="tab-container"
    >
      <Tab
        eventKey="default"
        name="Default"
      >
        <DefaultNetworkViewer />
      </Tab>
      <Tab
        eventKey="preloaded"
        name="Preloaded Data"
      >
        <LoadedData />
      </Tab>
      <Tab
        eventKey="scroll"
        name="Scroll"
      >
        <ScrollExample />
      </Tab>
    </Tabs>
  </section>
);

export default App;
