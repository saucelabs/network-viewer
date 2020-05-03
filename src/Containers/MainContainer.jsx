import React from 'react';
import PropTypes from 'prop-types';

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

const MainContainer = ({ onRequestSelect }) => {
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
        {showTimeline && <TimelineContainer />}
        <FilterContainer />
        <section className={Styles['main-container']}>
          <NetworkTableContainer onRequestSelect={onRequestSelect} />
          {showReqDetail && <ReqDetailContainer />}
        </section>
        {actualData.size ? <NetworkTableFooter dataSummary={dataSummary} /> : null}
      </LoaderContainer>
    </>
  );
};

MainContainer.propTypes = {
  onRequestSelect: PropTypes.func,
};

MainContainer.defaultProps = {
  onRequestSelect: () => {},
};

export default MainContainer;
