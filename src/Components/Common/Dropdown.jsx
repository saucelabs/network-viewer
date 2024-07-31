import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './Dropdown.styles.scss';
import Button from './Button';
import IconChevronDown from '../../icons/IconChevronDown';
import IconChevronUp from '../../icons/IconChevronUp';

const context = classNames.bind(Styles);

const Dropdown = ({
  items,
  selected,
  onChange,
  className,
}) => {
  const [isExpand, setExpand] = useState(false);
  const [selectedKey, setSelection] = useState(selected !== null ? selected : items[0]);
  const dropdownItemsRef = useRef(null);
  const isExpandRef = useRef(isExpand);

  const updateToggle = (toggleState) => {
    setExpand(toggleState);
    isExpandRef.current = toggleState;
  };

  const handleItemSelection = (key) => {
    setSelection(key);
    onChange(key);
    updateToggle(false);
  };

  const removeFocus = ({ target }) => {
    if (isExpandRef.current && !dropdownItemsRef.current.contains(target)) {
      updateToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', removeFocus);

    return () => {
      window.removeEventListener('click', removeFocus);
    };
  }, []);

  useEffect(() => {
    setSelection(selected);
  }, [selected]);

  return (
    <span
      ref={dropdownItemsRef}
      className={context('dropdown-container', className, { expanded: isExpand })}
    >
      <Button
        className={context('dropdown-toggle', { active: isExpand })}
        onClick={() => updateToggle(!isExpand)}
      >
        <>
          {`Status: ${selectedKey.name}`}
          {isExpand}
          {isExpand ?
            <IconChevronDown className={Styles.icn} /> :
            <IconChevronUp className={Styles.icn} />}
        </>
      </Button>
      {isExpand && (
        <ul className={Styles.list}>
          {items.map((item, index) => (
            <li
              key={item.value}
              className={context('list-item', { active: item.value === selectedKey.value })}
            >
              <span
                className={Styles['item-text']}
                onClick={() => handleItemSelection(item)}
                role="button"
                tabIndex={index}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </span>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
};

Dropdown.defaultProps = {
  className: null,
  selected: null,
};

export default Dropdown;
