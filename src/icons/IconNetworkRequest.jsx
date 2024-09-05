import React from 'react';
import PropTypes from 'prop-types';

const IconNetworkRequest = ({ className }) => (
  <svg
    className={className}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.5 14.4999C5.5 14.7761 5.72386 14.9999 6 14.9999H8C8.27614 14.9999 8.5 14.7761 8.5 14.4999V6.99994H12.5697C12.7399 6.99994 12.8323 6.80096 12.7225 6.67093L7.1531 0.0736706C7.0732 -0.0209768 6.92735 -0.0209758 6.84745 0.0736716L1.27803 6.67093C1.16826 6.80096 1.26069 6.99994 1.43085 6.99994H5.5V14.4999Z" />
    <path d="M15.5 9.49994C15.5 9.2238 15.7239 8.99994 16 8.99994H18C18.2761 8.99994 18.5 9.2238 18.5 9.49994V16.9999H22.5697C22.7399 16.9999 22.8323 17.1989 22.7225 17.329L17.1531 23.9262C17.0732 24.0209 16.9274 24.0209 16.8474 23.9262L11.278 17.329C11.1683 17.1989 11.2607 16.9999 11.4309 16.9999H15.5V9.49994Z" />
  </svg>

);

IconNetworkRequest.propTypes = {
  className: PropTypes.string,
};

IconNetworkRequest.defaultProps = {
  className: '',
};

export default IconNetworkRequest;
