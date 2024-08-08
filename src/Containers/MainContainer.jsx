import React from 'react';

import { useNetwork } from '../state/network/Context';
import FilterContainer from './FilterContainer';
import NetworkTableContainer from './NetworkTableContainer';
import LoaderContainer from './../Components/LoaderContainer';
import { FETCH_FILE_LOAD_TEXT } from '../constants';
import ReqDetailContainer from './ReqDetailContainer';
import Styles from './MainContainer.styles.scss';
import TimelineContainer from './TimelineContainer';
import { useTheme } from '../state/theme/Context';
import NetworkTableFooter from './../Components/NetworkTable/NetworkTableFooter';

const MainContainer = () => {
  const { state } = useNetwork();
  const { showTimeline } = useTheme();
  const loading = state.get('loading');
  const showReqDetail = state.get('showReqDetail');
  const dataSummary = state.get('dataSummary');
  const actualData = state.get('actualData');

  return (
    <>
      <LoaderContainer
        show={loading}
        text={FETCH_FILE_LOAD_TEXT}
      >
        <div className={Styles['viewer-container']}>
          <div>
            {showTimeline && <TimelineContainer />}
            <FilterContainer />
          </div>
          <section className={Styles['main-container']}>
            <NetworkTableContainer />
            {showReqDetail && <ReqDetailContainer />}
          </section>
          {actualData.size ? <NetworkTableFooter dataSummary={dataSummary} /> : null}
        </div>
      </LoaderContainer>
    </>
  );
};

export default MainContainer;
