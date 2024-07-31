import React from 'react';

import Button from '../Common/Button';
import Styles from './IconButton.styles.scss';
import IconUpload from '../../icons/IconImport';
import Tooltip from '../Common/Tooltip/Tooltip';

const ImportHarButton = () => (
  <Tooltip title="Import HAR">
    <Button className={Styles['icon-button']}>
      <IconUpload className={Styles['action-icon']} />
    </Button>
  </Tooltip>
);

export default ImportHarButton;
