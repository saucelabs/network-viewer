import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

const DROP_FILE_CONFIG = {
  accept: '.har',
  multiple: false,
};

const ImportHar = ({ onDataLoad, onError }) => {
  const onDrop = (files) => {
    const reader = new FileReader();
    reader.onabort = () => onError({ title: 'file reading was aborted' });
    reader.onerror = () => onError({ title: 'file reading has failed' });
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        onDataLoad(data);
      } catch (error) {
        onError({ description: 'Error while parsing HAR file' });
      }
    };
    reader.readAsText(files[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    ...DROP_FILE_CONFIG,
    onDrop,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag and drop a file here, or click to select file</p>
      }
    </div>
  );
};

ImportHar.propTypes = {
  onDataLoad: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default ImportHar;
