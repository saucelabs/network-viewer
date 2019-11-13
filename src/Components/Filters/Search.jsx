import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup, DropdownButton, Dropdown, FormControl,
} from 'react-bootstrap';

import Styles from './Search.styles';

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
    <InputGroup
      className={Styles['search-container']}
      size="sm"
    >
      <DropdownButton
        as={InputGroup.Prepend}
        id="input-group-dropdown-1"
        title={name}
        variant="outline-secondary"
      >
        <Dropdown.Item
          eventKey="url"
          onSelect={handleDropdownChange}
        >
          url
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="body"
          onSelect={handleDropdownChange}
        >
          body
        </Dropdown.Item>
      </DropdownButton>
      <FormControl
        aria-describedby="basic-addon1"
        onChange={handleInputChange}
        placeholder="search here..."
        value={value}
      />
    </InputGroup>
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
