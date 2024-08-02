import React from 'react';
import FileSaver from 'file-saver';
import PropTypes from 'prop-types';

import Button from '../Common/Button';
import Styles from './IconButton.styles.scss';
import IconDownload from '../../icons/IconDownload';
import Tooltip from '../Common/Tooltip/Tooltip';
import { EMPTY_NETWORK_HAR } from '../../constants';

const ExportHarButton = ({ rawData }) => {
  const downloadHar = () => {
    const formattedHar = JSON.stringify(rawData, null, 2);

    FileSaver.saveAs(new Blob([formattedHar]), 'network.har');
  };

  return (
    <Tooltip title="Export HAR">
      <Button
        className={Styles['icon-button']}
        onClick={downloadHar}
      >
        <IconDownload className={Styles['action-icon']} />
      </Button>
    </Tooltip>
  );
};

ExportHarButton.propTypes = {
  rawData: PropTypes.object,
};

ExportHarButton.defaultProps = {
  rawData: EMPTY_NETWORK_HAR,
};

export default ExportHarButton;
