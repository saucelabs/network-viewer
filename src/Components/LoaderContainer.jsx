import React from 'react';
import PropTypes from 'prop-types';

import Styles from './LoaderContainer.styles.scss';

const LoaderContainer = ({ children, show, text }) => {
  const spinnerColor = Styles.brandBlue;
  const uniqueId = `Gradient-${Math.round(Math.random() * 10000000)}`;

  return !show ? children : (
    <section className={Styles['loader-container']}>
      <div className={Styles.spin}>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={uniqueId}>
              <stop
                offset="0%"
                stopColor={spinnerColor}
              />
              <stop
                offset="75%"
                stopColor={spinnerColor}
                stopOpacity="0"
              />
              <stop
                offset="100%"
                stopColor={spinnerColor}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            fill="transparent"
            r="43"
            stroke={`url(#${uniqueId})`}
            strokeWidth="14"
          />
        </svg>
      </div>
      { text && <p className={Styles.text}>{text}</p> }
    </section>
  );
};

LoaderContainer.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

LoaderContainer.defaultProps = {
  children: null,
  show: true,
  text: null,
};

export default LoaderContainer;
