import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Headers.styles.scss';
import { GENERAL_HEADERS } from '../../constants';

const Headers = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className={Styles['headers-container']}>
      <div className={Styles['header-info']}>
        <h4 className={Styles['header-title']}>
        General
        </h4>
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
      </div>
      <div className={Styles['header-info']}>
        <h4 className={Styles['header-title']}>
        Response Headers
        </h4>
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
      </div>
      <div className={Styles['header-info']}>
        <h4 className={Styles['header-title']}>
        Request Headers
        </h4>
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
      </div>
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
