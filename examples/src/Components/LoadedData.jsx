import React from 'react';

import NetworkViewer from '../../../src/NetworkViewer';
import NetworkData from './../data/network.har';

const data = JSON.parse(NetworkData);

const LoadedData = () => (
  <NetworkViewer
    data={data}
    options={{
      showTimeline: false,
      showImportHAR: false,
    }}
  />
);

export default LoadedData;
