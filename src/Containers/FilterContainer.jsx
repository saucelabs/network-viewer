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
        <Col xs={12} sm={4} md={5}>
          <Search {...state.get('search')} onChange={actions.updateSearch} />
        </Col>
        <Col xs={12} sm={8} md={7}>
          <ButtonGroup size="sm" className={Styles['filters-button-group']}>
            {FILTERS.map(({ name, filterBy }) => (
              <Button
                key={name}
                size="sm"
                onClick={() => actions.updateFilter(filterBy)}
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
