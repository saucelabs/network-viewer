import React from 'react';

import Button from '../Common/Button';
import IconReset from '../../icons/IconReset';
import Styles from './IconButton.styles.scss';
import { useNetwork } from '../../state/network/Context';

const ResetButton = () => {
  const { actions, callbacks } = useNetwork();

  const handleReset = () => {
    window.history.pushState({}, document.title, '/');
    actions.resetState();
    callbacks.onReset();
  };

  return (
    <Button
      className={Styles['icon-button']}
      onClick={handleReset}
    >
      <IconReset className={Styles['action-icon']} />
    </Button>
  );
};

export default ResetButton;
