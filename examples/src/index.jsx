import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import NetworkViewer from './../../src/NetworkViewer';
import NetworkData from './data/network.har';

const data = JSON.parse(NetworkData);

ReactDOM.render(<NetworkViewer data={data} />, document.getElementById('root'));
