import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { NetworkViewer } from 'network-viewer';
import Styles from './App.module.scss';
import Footer from './Components/Footer';
import { parseQueryString } from './utils';

const contextClassNames = classNames.bind(Styles);

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [fileOptions, setFileOptions] = useState(null);
  const networkContainerClassName = contextClassNames('network-container', {
    'network-container-data-loaded': isDataLoaded,
  });

  // read file queryString and load HAR file
  useState(() => {
    const parsedData = parseQueryString();
    if (parsedData) {
      setFileOptions(parsedData);
    }
  }, []);

  return (
    <section className={Styles['app-container']}>
      <div className={networkContainerClassName}>
        <NetworkViewer
          onDataLoaded={() => setIsDataLoaded(true)}
          {...fileOptions}
        />
      </div>
      {!isDataLoaded && (
        <div className={Styles['app-info']}>
          <Footer />
        </div>
      )}
    </section>
  );
};

export default App;
