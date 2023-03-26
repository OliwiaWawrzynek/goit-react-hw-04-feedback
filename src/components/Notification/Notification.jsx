import React from 'react';
import css from './Notification.module.css';
import propTypes from 'prop-types';

const Notification = props => {
  return (
    <div className={css.notification}>
      <h2>{props.message}</h2>
    </div>
  );
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
