import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import ImportHar from './../Components/ImportHAR';
import Search from './../Components/Filters/Search';
import { useNetwork } from './../state/network/Context';
import { FILTERS } from './../constants';
import Styles from './FilterContainer.styles.scss';
import Button from './../Components/Common/Button';
import { useTheme } from '../state/theme/Context';

const FilterContainer = () => {
  const { state, actions } = useNetwork();
  const { showImportHAR } = useTheme();
  const filter = state.get('filter');

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
            {FILTERS.map(({ name, filterBy }) => (
              <Button
                key={name}
                category="default"
                className={Styles['filter-button']}
                material
                onClick={() => actions.updateFilter(filterBy)}
                raised={filterBy.value === filter.value}
                size="sm"
              >
                {name}
              </Button>
            ))}
            {showImportHAR && <ImportHar className={Styles['filter-button']} />}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default FilterContainer;
