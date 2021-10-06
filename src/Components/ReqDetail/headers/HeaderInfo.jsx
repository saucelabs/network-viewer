import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './../Headers.styles.scss';
import HeaderTitle from './HeaderTitle';

const context = classNames.bind(Styles);

const HeaderInfo = ({
  eventKey,
  data,
  component,
  isEncodeEnable,
  isParseEnable,
}) => {
  const [isVisible, updateVisibleStates] = useState(true);
  const [isPayloadTransformed, updateTransform] = useState(true);

  const handlePayloadTransform = () => updateTransform(!isPayloadTransformed);
  const ChildComponent = () => component({
    data,
    isPayloadTransformed,
    onChangeEncode: handlePayloadTransform,
  });

  return (
    <div className={context('header-info', { active: isVisible })}>
      <HeaderTitle
        eventKey={eventKey}
        isEncodeEnable={isEncodeEnable}
        isParseEnable={isParseEnable}
        isPayloadTransformed={isPayloadTransformed}
        onClick={() => updateVisibleStates(!isVisible)}
        onPayloadTransform={handlePayloadTransform}
      />
      {isVisible && <ChildComponent /> }
    </div>
  );
};

HeaderInfo.propTypes = {
  component: PropTypes.func.isRequired,
  data: PropTypes.object,
  eventKey: PropTypes.string.isRequired,
  isEncodeEnable: PropTypes.bool,
  isParseEnable: PropTypes.bool,
};

HeaderInfo.defaultProps = {
  data: null,
  isEncodeEnable: false,
  isParseEnable: false,
};

export default HeaderInfo;
