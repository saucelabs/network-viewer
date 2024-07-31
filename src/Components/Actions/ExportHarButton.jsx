import React from 'react';
import FileSaver from 'file-saver';
import PropTypes from 'prop-types';

import Button from '../Common/Button';
import Styles from './IconButton.styles.scss';
import IconDownload from '../../icons/IconDownload';

const ExportHarButton = ({ rawData }) => {
  const downloadHar = () => {
    const formattedHar = JSON.stringify(rawData, null, 4);

    FileSaver.saveAs(new Blob([formattedHar]), 'network.har');
  };

  return (
    <Button
      className={Styles['icon-button']}
      onClick={downloadHar}
    >
      <IconDownload className={Styles['action-icon']} />
    </Button>
  );
};

ExportHarButton.propTypes = {
  rawData: PropTypes.string,
};

ExportHarButton.defaultProps = {
  rawData: '',
};

export default ExportHarButton;
