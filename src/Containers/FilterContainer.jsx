import React from 'react';
import {
  Row, Col, ButtonGroup, Button,
} from 'react-bootstrap';

import ImportHar from '../Components/ImportHAR';
import Search from '../Components/Filters/Search';
import { useNetwork } from '../state/network/provider';
import { FILTERS } from '../constants';
import Styles from './FilterContainer.module.scss';

const FilterContainer = () => {
  const { state, actions } = useNetwork();
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
          <ButtonGroup
            className={Styles['filters-button-group']}
            size="sm"
          >
            {FILTERS.map(({ name, filterBy }) => (
              <Button
                key={name}
                onClick={() => actions.updateFilter(filterBy)}
                size="sm"
                variant={filterBy.value === filter.value ? 'secondary' : 'light'}
              >
                {name}
              </Button>
            ))}
            <ImportHar />
          </ButtonGroup>
        </Col>
      </Row>
    </section>
  );
};

export default FilterContainer;
