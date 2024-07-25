import React from 'react';

import Styles from './Search.styles.scss';
import { useNetwork } from '../../state/network/Context';

const Search = () => {
  const { state, actions } = useNetwork();
  const search = state.get('search');

  const handleInputChange = ({ target }) => {
    actions.updateSearch({
      name: search.name,
      value: target.value,
    });
  };

  return (
    <input
      className={Styles['search-input']}
      onChange={handleInputChange}
      placeholder="Search by full URL"
      type="text"
      value={search.value}
    />
  );
};

export default Search;
