import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './Dropdown.styles.scss';
import Button from './Button';

const context = classNames.bind(Styles);

const Dropdown = ({ items, selected, onChange, className }) => {
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

  return (
    <span
      ref={dropdownItemsRef}
      className={context('dropdown-container', className, { expanded: isExpand })}
    >
      <Button
        category="default"
        className={context('dropdown-toggle', { active: isExpand })}
        material
        onClick={() => updateToggle(!isExpand)}
        raised={isExpand}
        size="sm"
      >
        {selectedKey}
      </Button>
      {isExpand && (
        <ul className={Styles.list}>
          {items.map((text, index) => (
            <li
              key={text}
              className={context('list-item', { active: text === selectedKey })}
            >
              <span
                className={Styles['item-text']}
                onClick={() => handleItemSelection(text)}
                role="button"
                tabIndex={index}
              >
                {text}
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
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Dropdown.defaultProps = {
  className: null,
  selected: null,
};

export default Dropdown;
