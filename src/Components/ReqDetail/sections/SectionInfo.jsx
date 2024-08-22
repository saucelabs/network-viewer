import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './../ReqDetail.styles.scss';
import SectionTitle from './SectionTitle';

const context = classNames.bind(Styles);

const SectionInfo = ({
  eventKey,
  data,
  component,
  isEncodeEnabled,
  isParseEnabled,
  isVisible,
}) => {
  const [isOpen, setIsOpen] = useState(isVisible);
  const [isPayloadTransformed, updateTransform] = useState(true);

  const handlePayloadTransform = () => updateTransform(!isPayloadTransformed);
  const ChildComponent = () => component({
    data,
    isPayloadTransformed,
    onChangeEncode: handlePayloadTransform,
  });

  return (
    <div className={context('header-info', { active: isOpen })}>
      <SectionTitle
        eventKey={eventKey}
        isEncodeEnabled={isEncodeEnabled}
        isParseEnabled={isParseEnabled}
        isPayloadTransformed={isPayloadTransformed}
        onClick={() => setIsOpen(!isOpen)}
        onPayloadTransform={handlePayloadTransform}
      />
      {isOpen && <ChildComponent />}
    </div>
  );
};

SectionInfo.propTypes = {
  component: PropTypes.func.isRequired,
  data: PropTypes.object,
  eventKey: PropTypes.string.isRequired,
  isEncodeEnabled: PropTypes.bool,
  isParseEnabled: PropTypes.bool,
  isVisible: PropTypes.bool,
};

SectionInfo.defaultProps = {
  data: null,
  isEncodeEnabled: false,
  isParseEnabled: false,
  isVisible: false,
};

export default SectionInfo;
