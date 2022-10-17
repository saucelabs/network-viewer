import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
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
      <Row>
        <Col
          md={5}
          sm={4}
          xs={12}
        >
          <Search
            {...state.get('search')}
            onChange={actions.updateSearch}
          />
        </Col>
        <Col
          md={7}
          sm={8}
          xs={12}
        >
          <div className={Styles['filters-button-group']}>
            {FILTERS.map(({ name, filterBy }) => {
              const selectedFilter = filterBy.value === filter.value;
              const buttonStyle = context('filter-button', {
                'selected-filter': selectedFilter,
              });
              return (
                <Button
                  key={name}
                  category="default"
                  className={buttonStyle}
                  material
                  onClick={() => actions.updateFilter(filterBy)}
                  raised={selectedFilter}
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
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default FilterContainer;
