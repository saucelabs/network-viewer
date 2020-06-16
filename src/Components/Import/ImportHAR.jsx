import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { useNetwork } from './../../state/network/Context';
import Styles from './ImportHAR.styles.scss';
import Button from './../Common/Button';

const DROP_FILE_CONFIG = {
  accept: '.har',
  multiple: false,
};

const ImportHar = ({ showButton, className }) => {
  const { actions } = useNetwork();
  const { updateErrorMessage } = actions;

  const prepareData = (newNetworkData) => (
    actions.updateData({
      entries: newNetworkData.log.entries,
      pages: newNetworkData.log.pages,
    })
  );

  const onDrop = (files) => {
    const reader = new FileReader();
    reader.onabort = () => updateErrorMessage({ title: 'file reading was aborted' });
    reader.onerror = () => updateErrorMessage({ title: 'file reading has failed' });
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        prepareData(data);
      } catch (error) {
        updateErrorMessage({ title: 'Error while parsing HAR file' });
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
          category="default"
          className={className}
          material
          raised
          size="sm"
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
  className: PropTypes.string,
  showButton: PropTypes.bool,
};

ImportHar.defaultProps = {
  className: null,
  showButton: true,
};

export default ImportHar;
