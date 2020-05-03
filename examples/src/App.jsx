import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { stringify } from 'qs';

import NetworkViewer from './../../src/NetworkViewer';
import URLInput from './Components/URLInput';
import Styles from './App.styles.scss';
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

  const handleURLSubmit = (fetchInfo) => {
    const newURL = `${document.location.origin}/?${stringify(fetchInfo)}`;
    document.location.href = newURL;
  };

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
          <h4 className={Styles['app-info-text']}>
            OR add HAR file URL in the below input box
          </h4>
          <URLInput onSubmit={handleURLSubmit} />
          <Footer />
        </div>
      )}
    </section>
  );
};

export default App;
