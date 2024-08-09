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
  const tableHeaderWidth = state.get('tableHeaderWidth');
  const { showWaterfall } = useTheme();

  const columns = getViewerFields(showReqDetail, showWaterfall);

  return (
    <div
      className={Styles['network-table-header']}
      style={{ width: tableHeaderWidth }}
    >
      {Object.entries(columns)
        .map(([datakey, {
          key,
          name,
        }]) => (
          <div
            key={key}
            className={context(
              'table-column',
              'value-cell',
              datakey,
              { 'limited-cols': showReqDetail },
              { 'show-waterfall': showWaterfall },
            )}
          >
            {name}
          </div>
        ))}
    </div>
  );
};

export default NetworkTableHeader;
