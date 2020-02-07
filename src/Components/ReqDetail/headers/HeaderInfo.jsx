import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './../Headers.styles.scss';
import HeaderTitle from './HeaderTitle';

const context = classNames.bind(Styles);

const HeaderInfo = ({ eventKey, data, component, supportEncode }) => {
  const [isVisible, updateVisibleStates] = useState(true);
  const [isURLEncoded, updateEncode] = useState(true);

  const handleEncodeChange = () => updateEncode(!isURLEncoded);
  const ChildComponent = () => component({
    data,
    isURLEncoded,
    onChangeEncode: handleEncodeChange,
  });

  return (
    <div className={context('header-info', { active: isVisible })}>
      <HeaderTitle
        eventKey={eventKey}
        isURLEncoded={isURLEncoded}
        onChangeEncode={handleEncodeChange}
        onClick={() => updateVisibleStates(!isVisible)}
        supportEncode={supportEncode}

      />
      {isVisible && <ChildComponent /> }
    </div>
  );
};

HeaderInfo.propTypes = {
  component: PropTypes.func.isRequired,
  data: PropTypes.object,
  eventKey: PropTypes.string.isRequired,
  supportEncode: PropTypes.bool,
};

HeaderInfo.defaultProps = {
  data: null,
  supportEncode: false,
};

export default HeaderInfo;
