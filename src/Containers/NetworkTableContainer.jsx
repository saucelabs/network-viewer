import React from 'react';
import { Table } from 'react-bootstrap';

import NetworkTableHeader from './../Components/NetworkTable/NetworkTableHeader';
import NetworkTableRow from './../Components/NetworkTable/NetworkTableRow';
import { useNetwork } from './../state/network/Context';
import ImportHar from './../Components/ImportHAR';
import Styles from './NetworkTableContainer.styles.scss';
import ErrorMessage from '../Components/ErrorMessage';

const NetworkTableContainer = () => {
  const { state } = useNetwork();
  const actualData = state.get('actualData');
  const data = state.get('data');
  const totalNetworkTime = state.get('totalNetworkTime');
  const error = state.get('error');

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
    <section className={Styles['table-container']}>
      <Table
        bordered
        hover
        size="sm"
        striped
      >
        <NetworkTableHeader maxTime={totalNetworkTime} />
        <tbody className={Styles['table-content']}>
          {Array.from(data).map((rowInfo) => (
            <NetworkTableRow
              key={rowInfo.index}
              maxTime={totalNetworkTime}
              payload={rowInfo}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default NetworkTableContainer;
