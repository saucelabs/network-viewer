import React from 'react';
import classNames from 'classnames/bind';

import { useNetwork } from '../../state/network/Context';
import Button from '../Common/Button';
import { TYPE_FILTERS } from '../../constants';
import Styles from '../../Containers/FilterContainer.styles.scss';

const context = classNames.bind(Styles);

const TypeFilter = () => {
  const { state, actions } = useNetwork();
  const filter = state.get('typeFilter');

  return TYPE_FILTERS.map(({ name, filterBy }) => {
    const selectedFilter = filterBy.value === filter.value;

    return (
      <Button
        key={name}
        className={context({ active: selectedFilter })}
        onClick={() => actions.updateTypeFilter(filterBy)}
        variant="text"
      >
        {name}
      </Button>
    );
  });
};

export default TypeFilter;
