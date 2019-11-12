import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import NetworkViewer from './../../src/NetworkViewer';
import networkData from './../../tests/__fixtures__/network.json';

ReactDOM.render(<NetworkViewer data={networkData} />, document.getElementById('root'));
