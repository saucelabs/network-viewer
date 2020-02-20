import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { NETWORK_VIEWER_DEFAULT_OPTIONS } from '../../constants';

export const ThemeContext = React.createContext(NETWORK_VIEWER_DEFAULT_OPTIONS);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContext');
  }

  return context;
};

export const ThemeProvider = (props) => {
  const { options } = props;
  const finalOptions = {
    ...NETWORK_VIEWER_DEFAULT_OPTIONS,
    ...options,
  };

  return (
    <ThemeContext.Provider
      value={finalOptions}
      {...props}
    />
  );
};

ThemeProvider.propTypes = {
  options: PropTypes.object,
};

ThemeProvider.defaultProps = {
  options: NETWORK_VIEWER_DEFAULT_OPTIONS,
};

export default ThemeProvider;
