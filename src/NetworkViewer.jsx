import React from 'react';
import PropTypes from 'prop-types';

import NetworkProvider from './state/network/NetworkProvider';
import MainContainer from './Containers/MainContainer';
import Styles from './NetworkViewer.styles.scss';

const NetworkViewer = ({ file, data, fetchOptions, scrollTimeStamp }) => (
  <section className={Styles['network-viewer']}>
    <NetworkProvider
      data={data}
      fetchOptions={fetchOptions}
      file={file}
      scrollTimeStamp={scrollTimeStamp}
    >
      <MainContainer />
    </NetworkProvider>
  </section>
);

NetworkViewer.propTypes = {
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
  scrollTimeStamp: PropTypes.number,
};

NetworkViewer.defaultProps = {
  data: null,
  fetchOptions: null,
  file: null,
  scrollTimeStamp: null,
};

export default NetworkViewer;
