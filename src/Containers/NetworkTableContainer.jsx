import React from 'react';
import { Table } from 'react-bootstrap';

import NetworkTableHeader from '../Components/NetworkTable/NetworkTableHeader';
import NetworkTableRow from '../Components/NetworkTable/NetworkTableRow';
import { useNetwork } from '../state/network/provider';
import ImportHar from '../Components/ImportHAR';

const NetworkTableContainer = () => {
  const { state } = useNetwork();
  const data = state.get('data');
  const totalNetworkTime = state.get('totalNetworkTime');

  return (data.size ? (
    <Table striped bordered hover size="sm">
      <NetworkTableHeader maxTime={totalNetworkTime} />
      <tbody>
        {Array.from(data).map(rowInfo => (
          <NetworkTableRow key={rowInfo.index} payload={rowInfo} maxTime={totalNetworkTime} />
        ))}
      </tbody>
    </Table>
  ) : (
    <ImportHar showButton={false} />
  ));
};

export default NetworkTableContainer;
