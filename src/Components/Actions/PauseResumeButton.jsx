import React, { useState } from 'react';

import Button from '../Common/Button';
import Styles from './IconButton.styles.scss';
import IconPause from '../../icons/IconPause';
import { useNetwork } from '../../state/network/Context';
import IconResume from '../../icons/IconResume';

const PauseResumeButton = () => {
  const { callbacks } = useNetwork();
  const [isPaused, setIsPaused] = useState(false);

  const pause = () => {
    setIsPaused(true);
    callbacks.onPause();
  };

  const resume = () => {
    setIsPaused(false);
    callbacks.onResume();
  };

  return (
    <Button
      className={Styles['icon-button']}
      onClick={isPaused ? resume : pause}
    >
      {isPaused ?
        <IconResume className={Styles['action-icon']} /> :
        <IconPause className={Styles['action-icon']} />}
    </Button>
  );
};

export default PauseResumeButton;
