import React from 'react';

import Button from '../Common/Button';
import Styles from './IconButton.styles.scss';
import IconUpload from '../../icons/IconImport';

const ImportHarButton = () => (
  <Button className={Styles['icon-button']}>
    <IconUpload className={Styles['action-icon']} />
  </Button>
);

export default ImportHarButton;
