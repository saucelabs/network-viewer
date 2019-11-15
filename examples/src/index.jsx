import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import NetworkViewer from './../../src/NetworkViewer';
import data from './../../logs/network.json';

ReactDOM.render(<NetworkViewer data={data} />, document.getElementById('root'));
