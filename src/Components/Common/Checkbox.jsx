import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './Checkbox.styles.scss';

const context = classNames.bind(Styles);

const Checkbox = ({
  containerClassName,
  isChecked,
  onChange,
  children,
  title,
}) => (
  <div className={context('checkbox-container', containerClassName)}>
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
  containerClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Checkbox.defaultProps = {
  containerClassName: '',
  isChecked: false,
  title: '',
};

export default Checkbox;
