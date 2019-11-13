import React from 'react';
import PropTypes from 'prop-types';

import NetworkProvider from './state/network/NetworkProvider';
import './NetworkViewer.styles.scss';
import MainContainer from './Containers/MainContainer';

const NetworkViewer = ({ file, data, fetchOptions }) => (
  <NetworkProvider
    data={data}
    fetchOptions={fetchOptions}
    file={file}
  >
    <MainContainer />
  </NetworkProvider>
);

NetworkViewer.propTypes = {
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
};

NetworkViewer.defaultProps = {
  data: null,
  fetchOptions: null,
  file: null,
};

export default NetworkViewer;
