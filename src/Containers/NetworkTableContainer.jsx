import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import NetworkTableHeader from './../Components/NetworkTable/NetworkTableHeader';
import { useNetwork } from './../state/network/Context';
import ImportHar from '../Components/Import/ImportHAR';
import Styles from './NetworkTableContainer.styles.scss';
import ErrorMessage from './../Components/ErrorMessage';
import { useTheme } from '../state/theme/Context';
import InputHAR from '../Components/Import/InputHAR';
import NetworkTableBody from '../Components/NetworkTable/NetworkTableBody';
import { TABLE_HEADER_HEIGHT } from '../constants';
import { useResizeObserver } from '../hooks/useResizeObserver';

const context = classNames.bind(Styles);

const NetworkTableContainer = () => {
  const { state } = useNetwork();
  const { showImportHar, showWaterfall } = useTheme();
  const actualData = state.get('actualData');
  const error = state.get('error');
  const showReqDetail = state.get('showReqDetail');

  const [tableBodyHeight, setTableBodyHeight] = useState(0);
  const ref = useRef();
  const { elementDims } = useResizeObserver(ref?.current);

  useEffect(() => {
    if (ref?.current && elementDims.height) {
      setTableBodyHeight(ref.current.clientHeight - TABLE_HEADER_HEIGHT);
    }
  }, [ref?.current, actualData, elementDims]);

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
    <section
      ref={ref}
      className={context(
        'table-container',
        { 'hide-waterfall': !showWaterfall },
        { 'limited-cols': showReqDetail },
      )}
    >
      <NetworkTableHeader />
      <NetworkTableBody height={tableBodyHeight} />
    </section>
  );
};

export default NetworkTableContainer;
