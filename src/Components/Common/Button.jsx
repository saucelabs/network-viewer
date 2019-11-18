import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './Button.styles.scss';

const context = classNames.bind(Styles);

const Button = ({
  category,
  children,
  className,
  disabled,
  href,
  material,
  raised,
  size,
  ...props
}) => {
  const combinedClasses = context('btn', className, {
    [`btn-${size}`]: size,
    [material ? `btn-md-${category}` : `btn-${category}`]: true,
    [`btn-md-${category}-raised`]: raised,
    'btn-md-raised': raised,
  });

  const TagName = href && !disabled ? 'a' : 'button';
  return (
    <TagName
      className={combinedClasses}
      disabled={disabled}
      href={href}
      {...props}
    >
      {children}
    </TagName>
  );
};

Button.propTypes = {
  category: PropTypes.oneOf([
    'default',
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.any,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  material: PropTypes.bool,
  raised: PropTypes.bool,
  size: PropTypes.oneOf([false, 'sm']),
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
};

Button.defaultProps = {
  category: 'default',
  className: null,
  disabled: false,
  href: null,
  material: false,
  raised: false,
  size: false,
  type: 'button',
};

export default Button;
