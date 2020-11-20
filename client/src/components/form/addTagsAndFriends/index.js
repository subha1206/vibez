import React from 'react';
import './addTagsAndFriends.styles.scss';
// import AsyncSelect from 'react-select/async';
import Select from 'react-select';

import { ReactComponent as Close } from '../../../assets/img/common/error 2.svg';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const AddFrinedAndTags = ({ name, handleShowAddFriends }) => {
  return (
    <div className="add-frinds-container">
      <div className="add-frinds-container__info">
        <h3>{name}</h3>
        <div
          className="add-frinds-container__info__icon"
          onClick={handleShowAddFriends}
        >
          <Close />
        </div>
      </div>
      <div className="add-frinds-container__content">
        <Select className="dropdown__con" isMulti options={options} />
      </div>
    </div>
  );
};

export default AddFrinedAndTags;
