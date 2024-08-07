import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import NetworkTableHeader from './../Components/NetworkTable/NetworkTableHeader';
import NetworkTableRow from './../Components/NetworkTable/NetworkTableRow';
import { useNetwork } from './../state/network/Context';
import ImportHar from '../Components/Import/ImportHAR';
import Styles from './NetworkTableContainer.styles.scss';
import ErrorMessage from './../Components/ErrorMessage';
import { useTheme } from '../state/theme/Context';
import InputHAR from '../Components/Import/InputHAR';

const context = classNames.bind(Styles);

const NetworkTableContainer = ({ onRequestSelect }) => {
  const {
    state,
    actions,
  } = useNetwork();
  const { showImportHar } = useTheme();
  const actualData = state.get('actualData');
  const data = state.get('data');
  const totalNetworkTime = state.get('totalNetworkTime');
  const error = state.get('error');
  const selectedReqIndex = state.get('selectedReqIndex');
  const showReqDetail = state.get('showReqDetail');
  const containerClassName = context('table-container', {
    'limited-cols': showReqDetail,
  });
  const handleReqSelect = (payload) => {
    actions.updateScrollToIndex(payload.index);
    actions.selectRequest(payload);
    onRequestSelect(payload);
  };

  if (error) {
    return (
      <ErrorMessage {...error} />
    );
  }

  if (!actualData.size && showImportHar) {
    return (
      <section className={Styles['table-container']}>
        <ImportHar showButton={false} />
        <InputHAR />
      </section>
    );
  }

  return (
    <section className={containerClassName}>
      <table className={Styles.table}>
        <NetworkTableHeader />
        <tbody className={Styles['table-content']}>
          {Array.from(data)
            .map((rowInfo) => (
              <NetworkTableRow
                key={rowInfo.index}
                entry={rowInfo}
                maxTime={totalNetworkTime}
                onSelect={handleReqSelect}
                scrollHighlight={selectedReqIndex === rowInfo.index}
              />
            ))}
        </tbody>
      </table>
    </section>
  );
};

NetworkTableContainer.propTypes = {
  onRequestSelect: PropTypes.func,
};

NetworkTableContainer.defaultProps = {
  onRequestSelect: () => {
  },
};

export default NetworkTableContainer;
