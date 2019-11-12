import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { Button } from 'react-bootstrap';

import { useNetwork } from './../state/network/Context';
import Styles from './ImportHAR.styles';

const DROP_FILE_CONFIG = {
  accept: '.har',
  multiple: false,
};

const ImportHar = ({ showButton }) => {
  const { actions } = useNetwork();
  const { errorNotification } = actions;

  const prepareData = (newNetworkData) => (
    actions.updateData(newNetworkData.log.entries)
  );

  const onDrop = (files) => {
    const reader = new FileReader();
    reader.onabort = () => errorNotification({ description: 'file reading was aborted' });
    reader.onerror = () => errorNotification({ description: 'file reading has failed' });
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        prepareData(data);
      } catch (error) {
        errorNotification({ description: 'Error while parsing HAR file' });
      }
    };
    reader.readAsText(files[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    ...DROP_FILE_CONFIG,
    onDrop,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {showButton ? (
        <Button
          size="sm"
          variant="secondary"
        >
          Import HAR
        </Button>
      ) : (
        <p className={Styles['drag-drop']}>Drag and drop HAR file here, or click to select file</p>
      )}
    </div>
  );
};

ImportHar.propTypes = {
  showButton: PropTypes.bool,
};

ImportHar.defaultProps = {
  showButton: true,
};

export default ImportHar;
