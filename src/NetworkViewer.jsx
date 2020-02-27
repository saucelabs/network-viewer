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
  scrollRequestPosition,
}) => (
  <section className={Styles['network-viewer']}>
    <ThemeProvider options={options}>
      <NetworkProvider
        data={data}
        fetchOptions={fetchOptions}
        file={file}
        scrollRequestPosition={scrollRequestPosition}
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
  scrollRequestPosition: PropTypes.oneOf(['before', 'after', 'near']),
  scrollTimeStamp: PropTypes.number,
};

NetworkViewer.defaultProps = {
  data: null,
  fetchOptions: null,
  file: null,
  onRequestSelect: () => {},
  options: null,
  scrollRequestPosition: 'near',
  scrollTimeStamp: null,
};

export default NetworkViewer;
