import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup, DropdownButton, Dropdown, FormControl,
} from 'react-bootstrap';

import Styles from './Search.module.scss';

const Search = ({ name, value, onChange }) => {
  const handleInputChange = ({ target }) => {
    onChange({
      name,
      value: target.value,
    });
  };

  const handleDropdownChange = (selectedField) => {
    onChange({
      name: selectedField,
      value,
    });
  };

  return (
    <InputGroup className={Styles['search-container']} size="sm">
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title={name}
        id="input-group-dropdown-1"
      >
        <Dropdown.Item onSelect={handleDropdownChange} eventKey="url">url</Dropdown.Item>
        <Dropdown.Item onSelect={handleDropdownChange} eventKey="body">body</Dropdown.Item>
      </DropdownButton>
      <FormControl
        aria-describedby="basic-addon1"
        placeholder="search here..."
        value={value}
        onChange={handleInputChange}
      />
    </InputGroup>
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Search.defaultProps = {
  value: '',
};

export default Search;
