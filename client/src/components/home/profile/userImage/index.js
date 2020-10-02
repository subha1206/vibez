import React from 'react';

import './userImage.styles.scss';
const UserImage = ({ size }) => {
  return (
    <div className={`profile-picture-container ${size}`}>
      <img
        className=""
        src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
        alt="User"
      />
      {/* <p>SS</p> */}
    </div>
  );
};

export default UserImage;
