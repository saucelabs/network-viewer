import React from 'react';

import { useNetwork } from './../state/network/Context';
import Styles from './ReqDetailContainer.styles.scss';

const ReqDetailContainer = () => {
  const { actions } = useNetwork();
  const handleCloseClick = () => {
    actions.selectRequest(null);
  };

  return (
    <div className={Styles['req-detail-container']}>
      <p>Request Detail will be here</p>
      <button
        onClick={handleCloseClick}
        type="button"
      >
        x
      </button>
    </div>
  );
};

export default ReqDetailContainer;
