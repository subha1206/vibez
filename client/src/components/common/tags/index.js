import React from 'react';

import { ReactComponent as Close } from '../../../assets/img/common/close_small.svg';

import './tags.styles.scss';
const Tags = ({ value, color }) => {
  return (
    <div className={`tag-container ${color}`}>
      <p>{value}</p>
      <div className="tag-container__icon">
        <Close />
      </div>
    </div>
  );
};

export default Tags;
