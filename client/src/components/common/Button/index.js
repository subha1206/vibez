import React from 'react';
import './button.styles.scss';

const Button = ({ color, value }) => {
  return <div className={`btn ${color}`}>{value}</div>;
};

export default Button;
