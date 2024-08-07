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
import { VIEWER_FIELD_FILE } from '../constants';

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

  const columns = showReqDetail ? VIEWER_FIELD_FILE : undefined;
  return (
    <section className={context(
      'table-container',
      { 'limited-cols': showReqDetail },
    )}
    >
      <NetworkTableHeader columns={columns} />
      <NetworkTableBody columns={columns} />
    </section>
  );
};

export default NetworkTableContainer;
