import React from 'react';
import classNames from 'classnames/bind';

import NetworkTableHeader from './../Components/NetworkTable/NetworkTableHeader';
import { useNetwork } from './../state/network/Context';
import ImportHar from '../Components/Import/ImportHAR';
import Styles from './NetworkTableContainer.styles.scss';
import ErrorMessage from './../Components/ErrorMessage';
import { useTheme } from '../state/theme/Context';
import InputHAR from '../Components/Import/InputHAR';
import NetworkTableBody from '../Components/NetworkTable/NetworkTableBody';

const context = classNames.bind(Styles);

const NetworkTableContainer = () => {
  const { state } = useNetwork();
  const { showImportHar } = useTheme();
  const actualData = state.get('actualData');
  const error = state.get('error');
  const showReqDetail = state.get('showReqDetail');

  if (error) {
    return (
      <ErrorMessage {...error} />
    );
  }

  if (!actualData.size && showImportHar) {
    return (
      <section className={Styles['har-selection']}>
        <ImportHar showButton={false} />
        <InputHAR />
      </section>
    );
  }

  return (
    <section className={context(
      'table-container',
      { 'limited-cols': showReqDetail },
    )}
    >
      <NetworkTableHeader />
      <NetworkTableBody />
    </section>
  );
};

export default NetworkTableContainer;
