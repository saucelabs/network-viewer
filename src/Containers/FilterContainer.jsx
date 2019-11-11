import React from 'react';
import {
  Row, Col, ButtonGroup,
} from 'react-bootstrap';

import ImportHar from '../Components/ImportHAR';
import Search from '../Components/Filters/Search';
import { useNetwork } from '../state/network/provider';

import Styles from './FilterContainer.module.scss';

const FilterContainer = () => {
  const { state, actions } = useNetwork();

  return (
    <section className={Styles['filters-container']}>
      <Row>
        <Col xs={12} sm={4} md={5}>
          <Search {...state.get('search')} onChange={actions.updateSearch} />
        </Col>
        <Col xs={12} sm={8} md={7}>
          <ButtonGroup size="sm" className={Styles['filters-button-group']}>
            <ImportHar />
          </ButtonGroup>
        </Col>
      </Row>
    </section>
  );
};

export default FilterContainer;
