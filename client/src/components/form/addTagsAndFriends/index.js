import React, { useState } from 'react';
import './addTagsAndFriends.styles.scss';
import { follow, unFollow } from '../../../redux/actions/userAction';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import sendApiRequest from '../../../helper/sendApiRequest';

import { ReactComponent as Close } from '../../../assets/img/common/error 2.svg';

const AddFrinedAndTags = ({ name, handleShowAddFriends }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user, shallowEqual);
  const [result, setResult] = useState([]);

  const handleInputChange = (e) => {
    filterUser(e.target.value);
  };
  const filterUser = (val) => {
    const url = `/users/me/findFriends?name=${val}`;
    sendApiRequest.get(url).then((res) => {
      setResult(res.data.data);
    });
  };

  const checkIfAlreadyFollow = (id) => {
    return user?.following.includes(id);
  };

  const handleFollow = (userId) => {
    dispatch(follow(userId));
  };

  const handleUnFollow = (userId) => {
    dispatch(unFollow(userId));
  };
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
        <form>
          <input type="search" name="" id="" onChange={handleInputChange} />
        </form>
        <div className="add-frinds-container__content__con">
          {result.length === 0 ? (
            <p className="no--user-error">No User found!</p>
          ) : (
            <ul className="add-frinds-container__content__result">
              {result.map((user) => {
                return (
                  <li key={user.id}>
                    <p>{user.name}</p>
                    {!checkIfAlreadyFollow(user.id) ? (
                      <p
                        className="add-frinds-container__content__result--follow"
                        onClick={() => handleFollow(user.id)}
                      >
                        Follow
                      </p>
                    ) : (
                      <p
                        className="add-frinds-container__content__result--follow"
                        onClick={() => handleUnFollow(user.id)}
                      >
                        Unfollow
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddFrinedAndTags;
