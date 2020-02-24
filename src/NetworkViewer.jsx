import React from 'react';
import PropTypes from 'prop-types';

import NetworkProvider from './state/network/NetworkProvider';
import MainContainer from './Containers/MainContainer';
import Styles from './NetworkViewer.styles.scss';
import ThemeProvider from './state/theme/Context';

const NetworkViewer = ({
  file,
  data,
  fetchOptions,
  scrollTimeStamp,
  options,
  onRequestSelect,
}) => (
  <section className={Styles['network-viewer']}>
    <ThemeProvider options={options}>
      <NetworkProvider
        data={data}
        fetchOptions={fetchOptions}
        file={file}
        scrollTimeStamp={scrollTimeStamp}
      >
        <MainContainer onRequestSelect={onRequestSelect} />
      </NetworkProvider>
    </ThemeProvider>
  </section>
);

NetworkViewer.propTypes = {
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
  onRequestSelect: PropTypes.func,
  options: PropTypes.object,
  scrollTimeStamp: PropTypes.number,
};

NetworkViewer.defaultProps = {
  data: null,
  fetchOptions: null,
  file: null,
  onRequestSelect: () => {},
  options: null,
  scrollTimeStamp: null,
};

export default NetworkViewer;
