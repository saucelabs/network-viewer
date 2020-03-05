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
  autoHighlightChange,
}) => (
  <section className={Styles['network-viewer']}>
    <ThemeProvider options={options}>
      <NetworkProvider
        autoHighlightChange={autoHighlightChange}
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
  autoHighlightChange: PropTypes.bool,
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
  onRequestSelect: PropTypes.func,
  options: PropTypes.object,
  scrollRequestPosition: PropTypes.oneOf(['before', 'after', 'near']),
  scrollTimeStamp: PropTypes.number,
};

NetworkViewer.defaultProps = {
  autoHighlightChange: false,
  data: null,
  fetchOptions: { withCredentials: true },
  file: null,
  onRequestSelect: () => {},
  options: null,
  scrollRequestPosition: 'near',
  scrollTimeStamp: null,
};

export default NetworkViewer;
