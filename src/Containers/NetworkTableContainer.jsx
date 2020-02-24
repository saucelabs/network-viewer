import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import NetworkTableHeader from './../Components/NetworkTable/NetworkTableHeader';
import NetworkTableFooter from './../Components/NetworkTable/NetworkTableFooter';
import NetworkTableRow from './../Components/NetworkTable/NetworkTableRow';
import { useNetwork } from './../state/network/Context';
import ImportHar from './../Components/ImportHAR';
import Styles from './NetworkTableContainer.styles.scss';
import ErrorMessage from './../Components/ErrorMessage';
import { useTheme } from '../state/theme/Context';

const context = classNames.bind(Styles);

const NetworkTableContainer = ({ onRequestSelect }) => {
  const { state, actions } = useNetwork();
  const { showImportHAR } = useTheme();
  const actualData = state.get('actualData');
  const data = state.get('data');
  const totalNetworkTime = state.get('totalNetworkTime');
  const error = state.get('error');
  const scrollToIndex = state.get('scrollToIndex');
  const dataSummary = state.get('dataSummary');
  const selectedReqIndex = state.get('selectedReqIndex');
  const showAllCols = !(selectedReqIndex || selectedReqIndex === 0);
  const containerClassName = context('table-container', {
    'limited-cols': !showAllCols,
  });
  const handleReqSelect = (payload) => {
    const { index } = payload;
    actions.updateScrollToIndex(index);
    actions.selectRequest(index);
    onRequestSelect(payload);
  };

  if (error) {
    return (
      <ErrorMessage {...error} />
    );
  }

  if (!actualData.size) {
    return (
      <section className={Styles['table-container']}>
        {showImportHAR && <ImportHar showButton={false} />}
      </section>
    );
  }

  return (
    <section className={containerClassName}>
      <table className={Styles.table}>
        <NetworkTableHeader
          maxTime={totalNetworkTime}
          showAllCols={showAllCols}
        />
        <tbody className={Styles['table-content']}>
          {Array.from(data).map((rowInfo) => (
            <NetworkTableRow
              key={rowInfo.index}
              maxTime={totalNetworkTime}
              onSelect={handleReqSelect}
              payload={rowInfo}
              scrollHighlight={[scrollToIndex, selectedReqIndex].includes(rowInfo.index)}
              showAllCols={showAllCols}
            />
          ))}
        </tbody>
        <NetworkTableFooter
          dataSummary={dataSummary}
          showAllInfo={showAllCols}
        />
      </table>
    </section>
  );
};

NetworkTableContainer.propTypes = {
  onRequestSelect: PropTypes.func,
};

NetworkTableContainer.defaultProps = {
  onRequestSelect: () => {},
};

export default NetworkTableContainer;
