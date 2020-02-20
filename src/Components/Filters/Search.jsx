import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Search.styles.scss';
import Dropdown from './../Common/Dropdown';

const SEARCH_CATEGORY = ['url', 'body'];

const Search = ({ name, value, onChange }) => {
  const handleInputChange = ({ target }) => {
    onChange({
      name,
      value: target.value,
    });
  };

  const handleDropdownChange = (selectedKey) => {
    onChange({
      name: selectedKey,
      value,
    });
  };

  return (
    <div className={Styles['search-container']}>
      <Dropdown
        className={Styles['prepend-dropdown']}
        items={SEARCH_CATEGORY}
        onChange={handleDropdownChange}
        selected="url"
      />
      <input
        className={Styles.input}
        onChange={handleInputChange}
        placeholder="Filter"
        type="text"
        value={value}
      />
    </div>
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Search.defaultProps = {
  value: '',
};

export default Search;
