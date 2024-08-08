import React from 'react';
import classNames from 'classnames/bind';

import Styles from './NetworkTable.styles.scss';
import { useNetwork } from '../../state/network/Context';
import { useTheme } from '../../state/theme/Context';
import { getViewerFields } from '../../utils';

const context = classNames.bind(Styles);

const NetworkTableHeader = () => {
  const { state } = useNetwork();
  const showReqDetail = state.get('showReqDetail');
  const { showWaterfall } = useTheme();

  const columns = getViewerFields(showReqDetail, showWaterfall);

  return (
    <div className={Styles['network-table-header']}>
      {Object.entries(columns)
        .map(([datakey, {
          key,
          name,
        }]) => (
          <div
            key={datakey}
            className={context(Styles['value-cell'], key)}
          >
            {name}
          </div>
        ))}
    </div>
  );
};

export default NetworkTableHeader;
