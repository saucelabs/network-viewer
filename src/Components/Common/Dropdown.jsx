import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './Dropdown.styles.scss';
import Button from './Button';

const context = classNames.bind(Styles);
const dropdownItemKey = 'data-network-viewer-dropdown-item';
const dropdownItemID = {
  [dropdownItemKey]: true,
};

const Dropdown = ({ items, selected, onChange, className }) => {
  const [isExpand, setExpand] = useState(false);
  const [selectedKey, setSelection] = useState(selected !== null ? selected : items[0].key);
  const selectedText = items.find(({ key }) => key === selectedKey).text;

  const handleItemSelection = (key) => {
    setSelection(key);
    onChange(key);
    setExpand(false);
  };

  useEffect(() => {
    const removeFocus = ({ target }) => {
      if (!(target && target.getAttribute(dropdownItemKey))) {
        setExpand(false);
      }
    };

    if (isExpand) {
      document.body.addEventListener('click', removeFocus);
    }

    return () => {
      document.body.removeEventListener('click', removeFocus);
    };
  }, [isExpand]);

  return (
    <span className={context('dropdown-container', className, { expanded: isExpand })}>
      <Button
        category="default"
        className={context('dropdown-toggle', { active: isExpand })}
        material
        onClick={() => setExpand(!isExpand)}
        raised={isExpand}
        size="sm"
      >
        {selectedText}
      </Button>
      {isExpand && (
        <ul className={Styles.list}>
          {items.map(({ key, text }, index) => (
            <li
              key={key}
              className={context('list-item', { active: key === selectedKey })}
            >
              <span
                className={Styles['item-text']}
                onClick={() => handleItemSelection(key)}
                role="button"
                tabIndex={index}
                {...dropdownItemID}
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
