import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './Button.styles.scss';

const context = classNames.bind(Styles);

const Button = ({
  children,
  className,
  disabled,
  href,
  variant,
  ...props
}) => {
  const combinedClasses = context('btn', className, {
    'text-variant': variant === 'text',
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
  children: PropTypes.node.isRequired,
  className: PropTypes.any,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
  variant: PropTypes.oneOf(['default', 'text']),
};

Button.defaultProps = {
  className: null,
  disabled: false,
  href: null,
  type: 'button',
  variant: 'default',
};

export default Button;
