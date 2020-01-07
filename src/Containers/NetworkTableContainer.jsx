import React from 'react';
import classNames from 'classnames/bind';

import NetworkTableHeader from './../Components/NetworkTable/NetworkTableHeader';
import NetworkTableFooter from './../Components/NetworkTable/NetworkTableFooter';
import NetworkTableRow from './../Components/NetworkTable/NetworkTableRow';
import { useNetwork } from './../state/network/Context';
import ImportHar from './../Components/ImportHAR';
import Styles from './NetworkTableContainer.styles.scss';
import ErrorMessage from './../Components/ErrorMessage';

const context = classNames.bind(Styles);
const NetworkTableContainer = () => {
  const { state, actions } = useNetwork();
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

  if (error) {
    return (
      <ErrorMessage {...error} />
    );
  }

  if (!actualData.size) {
    return (
      <section className={Styles['table-container']}>
        <ImportHar showButton={false} />
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
              onSelect={actions.selectRequest}
              payload={rowInfo}
              scrollHighlight={[scrollToIndex, selectedReqIndex].includes(rowInfo.index)}
              showAllCols={showAllCols}
            />
          ))}
        </tbody>
        <NetworkTableFooter
          dataSummary={dataSummary}
        />
      </table>
    </section>
  );
};

export default NetworkTableContainer;
