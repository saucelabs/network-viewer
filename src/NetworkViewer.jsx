import React from 'react';
import PropTypes from 'prop-types';

import NetworkProvider from './state/network/NetworkProvider';
import FilterContainer from './Containers/FilterContainer';
import Notification from './Components/Notification';
import NetworkTableContainer from './Containers/NetworkTableContainer';

import './NetworkViewer.styles';

const NetworkViewer = ({ file, data }) => (
  <NetworkProvider
    data={data}
    file={file}
  >
    <Notification />
    <FilterContainer />
    <NetworkTableContainer />
  </NetworkProvider>
);

NetworkViewer.propTypes = {
  data: PropTypes.object,
  file: PropTypes.string,
};

NetworkViewer.defaultProps = {
  data: null,
  file: null,
};

export default NetworkViewer;
