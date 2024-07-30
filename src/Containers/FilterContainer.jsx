import React from 'react';
import classNames from 'classnames/bind';

import ImportHar from './../Components/Import/ImportHAR';
import Search from './../Components/Filters/Search';
import { useNetwork } from './../state/network/Context';
import { FILTERS } from './../constants';
import Styles from './FilterContainer.styles.scss';
import Button from './../Components/Common/Button';
import { useTheme } from '../state/theme/Context';
import ErrorFilter from '../Components/Filters/ErrorFilter';
import Reset from '../Components/Import/Reset';

const context = classNames.bind(Styles);

const FilterContainer = () => {
  const { state, actions } = useNetwork();
  const { showImportHAR } = useTheme();
  const filter = state.get('filter');
  const filterByError = state.get('errorFilter');

  return (
    <section className={Styles['filters-container']}>
      <div className={Styles['filter-row']}>
        <Search {...state.get('search')} />
      </div>

      <div className={Styles['type-filter-row']}>
        <>
          {FILTERS.map(({ name, filterBy }) => {
            const selectedFilter = filterBy.value === filter.value;
            const buttonStyle = context('filter-button', {
              'selected-filter': selectedFilter,
            });
            return (
              <Button
                key={name}
                className={buttonStyle}
                onClick={() => actions.updateFilter(filterBy)}
                size="sm"
              >
                {name}
              </Button>
            );
          })}
          <ErrorFilter
            isError={filterByError}
            onChange={actions.updateErrorFilter}
          />
          {showImportHAR && (
            <>
              <ImportHar className={Styles['addon-action-button']} />
              <Reset
                className={Styles['addon-action-button']}
                onReset={actions.resetState}
              />
            </>
          )}
        </>
      </div>
    </section>

  );
};

export default FilterContainer;
