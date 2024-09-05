import React from 'react';

import { useNetwork } from './../state/network/Context';
import Styles from './ReqDetailContainer.styles.scss';
import Tabs from '../Components/Common/Tabs';
import Tab from '../Components/Common/Tab';
import Headers from './../Components/ReqDetail/Headers';
import IconCloseSign from './../icons/IconCloseSign';
import Response from '../Components/ReqDetail/Response';
import Request from '../Components/ReqDetail/Request';

const ReqDetailContainer = () => {
  const { actions, state } = useNetwork();
  const reqDetail = state.get('reqDetail');
  const handleCloseClick = () => {
    actions.selectRequest(null);
  };

  return (
    <div className={Styles['req-detail-container']}>
      <button
        aria-label="Close button"
        className={Styles['close-button']}
        onClick={handleCloseClick}
        type="button"
      >
        <IconCloseSign className={Styles['close-icon']} />
      </button>
      <Tabs
        activeClassName={Styles.active}
        defaultSelectedKey="headers"
        navLinkClassName={Styles['tab-link']}
        navTabsClassName={Styles['nav-tabs']}
        tabsContainerClassName={Styles['tabs-container']}
      >
        <Tab
          eventKey="headers"
          name="Headers"
        >
          <Headers data={reqDetail} />
        </Tab>
        <Tab
          eventKey="request"
          name="Request"
        >
          <Request data={reqDetail} />
        </Tab>
        <Tab
          eventKey="response"
          name="Response"
        >
          <Response data={reqDetail} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ReqDetailContainer;
