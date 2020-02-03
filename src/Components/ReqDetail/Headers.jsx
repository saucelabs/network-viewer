import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './Headers.styles.scss';
import { GENERAL_HEADERS, HEADERS_TITLES } from '../../constants';
import HeaderTitle from './HeaderTitle';

const context = classNames.bind(Styles);


const Headers = ({ data }) => {
  const [visibleStates, updateVisibleStates] = useState({
    [HEADERS_TITLES.general.key]: true,
    [HEADERS_TITLES.response.key]: true,
    [HEADERS_TITLES.request.key]: true,
    [HEADERS_TITLES.queryString.key]: true,
  });

  const toggleVisibility = (key) => {
    updateVisibleStates({
      ...visibleStates,
      [key]: !visibleStates[key],
    });
  };

  if (!data) {
    return null;
  }
  return (
    <section className={Styles['headers-container']}>
      <div className={context('header-info', { active: visibleStates[HEADERS_TITLES.general.key] })}>
        <HeaderTitle
          eventKey="general"
          onClick={toggleVisibility}
        />
        {visibleStates[HEADERS_TITLES.general.key] && (
          <div className={Styles['header-detail']}>
            {Object.entries(GENERAL_HEADERS).map(([dataKey, { key, name }]) => (
              <p
                key={dataKey}
                className={Styles['info-row']}
              >
                <span className={Styles['info-caption']}>
                  {`${name}:`}
                </span>
                <span className={Styles['info-value']}>
                  {data[key]}
                </span>
              </p>
            ))}
          </div>
        )}
      </div>
      <div className={context('header-info', { active: visibleStates[HEADERS_TITLES.response.key] })}>
        <HeaderTitle
          eventKey="response"
          onClick={toggleVisibility}
        />
        {visibleStates[HEADERS_TITLES.response.key] && (
          <div className={Styles['header-detail']}>
            {data.headers.response.map(({ name, value }) => (
              <p
                key={name}
                className={Styles['info-row']}
              >
                <span className={Styles['info-caption']}>
                  {`${name}:`}
                </span>
                <span className={Styles['info-value']}>
                  {value}
                </span>
              </p>
            ))}
          </div>
        )}
      </div>
      <div className={context('header-info', { active: visibleStates[HEADERS_TITLES.request.key] })}>
        <HeaderTitle
          eventKey="request"
          onClick={toggleVisibility}
        />
        {visibleStates[HEADERS_TITLES.request.key] && (
          <div className={Styles['header-detail']}>
            {data.headers.request.map(({ name, value }) => (
              <p
                key={name}
                className={Styles['info-row']}
              >
                <span className={Styles['info-caption']}>
                  {`${name}:`}
                </span>
                <span className={Styles['info-value']}>
                  {value}
                </span>
              </p>
            ))}
          </div>
        )}
      </div>
      {data.headers.queryString.length > 0 && (
        <div className={context('header-info', { active: visibleStates[HEADERS_TITLES.queryString.key] })}>
          <HeaderTitle
            eventKey="queryString"
            onClick={toggleVisibility}
          />
          {visibleStates[HEADERS_TITLES.queryString.key] && (
            <div className={Styles['header-detail']}>
              {data.headers.queryString.map(({ name, value }) => (
                <p
                  key={name}
                  className={Styles['info-row']}
                >
                  <span className={Styles['info-caption']}>
                    {`${name}:`}
                  </span>
                  <span className={Styles['info-value']}>
                    {value}
                  </span>
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

Headers.propTypes = {
  data: PropTypes.object,
};

Headers.defaultProps = {
  data: null,
};

export default Headers;
