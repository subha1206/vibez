import React from 'react';
import './button.styles.scss';

const Button = ({ color, value, loading }) => {
  if (loading === true) {
    return <div className={`btn disable`}>{value}</div>;
  }
  return <div className={`btn ${color}`}>{value}</div>;
};

export default Button;
