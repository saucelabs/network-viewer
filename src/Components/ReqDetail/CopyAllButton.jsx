import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Common/Button';
import Styles from './CopyAllButton.styles.scss';
import IconCopy from '../../icons/IconCopy';
import IconCheckMark from '../../icons/IconCheckMark';

const CopyAllButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <Button
      className={Styles['copy-button']}
      onClick={copy}
      variant="text"
    >
      {isCopied ?
        <IconCheckMark className={Styles['copy-icon']} /> :
        <IconCopy className={Styles['copy-icon']} />}
      <span className={Styles['copy-text']}>{isCopied ? 'Copied!' : 'Copy All'}</span>
    </Button>
  );
};

CopyAllButton.propTypes = {
  text: PropTypes.object,
};

CopyAllButton.defaultProps = {
  text: 'testi testi',
};

export default CopyAllButton;
