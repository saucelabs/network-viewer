import React from 'react';

import Button from '../Common/Button';
import IconReset from '../../icons/IconReset';
import Styles from './IconButton.styles.scss';
import { useNetwork } from '../../state/network/Context';
import Tooltip from '../Common/Tooltip/Tooltip';
import { useTheme } from '../../state/theme/Context';

const ResetButton = () => {
  const { actions, callbacks } = useNetwork();
  const { showImportHar } = useTheme();

  const handleReset = () => {
    actions.resetState();
    callbacks.onReset();

    if (showImportHar) {
      window.history.pushState({}, document.title, '/');
    }
  };

  return (
    <Tooltip title="Reset">
      <Button
        className={Styles['icon-button']}
        onClick={handleReset}
      >
        <IconReset className={Styles['action-icon']} />
      </Button>
    </Tooltip>
  );
};

export default ResetButton;
