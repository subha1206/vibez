import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../redux/actions/authAction';
import { useDispatch } from 'react-redux';

import { ReactComponent as Close } from '../../../assets/img/common/error 2.svg';

import './modal.styles.scss';

const LogoutModal = ({ name, content, hideModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  let data = {};

  const handleLogout = () => {
    hideModal(false);
    dispatch(logout(data, history));
  };

  return (
    <div className="modal-container">
      <div className="modal-container__info">
        <h3>{name}</h3>
        <div
          className="modal-container__info__icon"
          onClick={() => hideModal(false)}
        >
          <Close />
        </div>
      </div>
      <div className="modal-container__content">
        <p>{content}</p>
      </div>
      <div className="modal-container__cta">
        <button className="modal-container__cta__green" onClick={handleLogout}>
          Yeah sure
        </button>
        <button
          className="modal-container__cta__danger"
          onClick={() => hideModal(false)}
        >
          Nope!
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
