import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Search.styles.scss';
import { useNetwork } from '../../state/network/Context';

const Search = ({
  name,
  value,
}) => {
  const { actions } = useNetwork();

  const handleInputChange = ({ target }) => {
    actions.updateSearch({
      name,
      value: target.value,
    });
  };

  return (
    <input
      className={Styles['search-input']}
      onChange={handleInputChange}
      placeholder="Search by URL"
      type="text"
      value={value}
    />
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Search.defaultProps = {
  value: '',
};

export default Search;
