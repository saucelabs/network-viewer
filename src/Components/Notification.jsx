import React from 'react';
import { Alert } from 'react-bootstrap';

import { useNetwork } from './../state/network/provider';
import Styles from './Notification.module.css';

const Notification = () => {
  const { state, actions } = useNetwork();
  const notifications = state.get('notifications');

  return notifications.map(({
    id, type, title, description,
  }) => (
    <div
      key={id}
      className={Styles['alert-container']}
    >
      <Alert
        dismissible
        onClose={() => actions.dismissNotification(id)}
        variant={type}
      >
        {title && (<Alert.Heading>{title}</Alert.Heading>)}
        {description && (<p>{description}</p>)}
      </Alert>
    </div>
  ));
};

export default Notification;
