import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Checkbox.styles.scss';

const Checkbox = ({ isChecked, onChange, children, title }) => (
  <div className={Styles['checkbox-container']}>
    <label
      className={Styles['checkbox-label']}
      title={title}
    >
      <input
        checked={isChecked}
        className={Styles.checkbox}
        onChange={onChange}
        type="checkbox"
      />
      {children}
    </label>
  </div>
);

Checkbox.propTypes = {
  children: PropTypes.any.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Checkbox.defaultProps = {
  isChecked: false,
  title: '',
};

export default Checkbox;
