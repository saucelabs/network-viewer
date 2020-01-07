import React from 'react';

import { useNetwork } from './../state/network/Context';
import Styles from './ReqDetailContainer.styles.scss';
import Tabs from '../Components/Common/Tabs';
import Tab from '../Components/Common/Tab';

const ReqDetailContainer = () => {
  const { actions } = useNetwork();
  const handleCloseClick = () => {
    actions.selectRequest(null);
  };

  return (
    <div className={Styles['req-detail-container']}>
      <button
        className={Styles['close-button']}
        onClick={handleCloseClick}
        type="button"
      >
        x
      </button>
      <Tabs
        defaultSelectedKey="headers"
        navTabsClassName={Styles['nav-tabs']}
      >
        <Tab
          eventKey="headers"
          name="Headers"
        >
          <p>Headers coming soon</p>
        </Tab>
        <Tab
          eventKey="preview"
          name="Preview"
        >
          <p>Preview coming soon</p>
        </Tab>
        <Tab
          eventKey="response"
          name="Response"
        >
          <p>Response soon</p>
        </Tab>
        <Tab
          eventKey="timing"
          name="Timing"
        >
          <p>Timing soon</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ReqDetailContainer;
