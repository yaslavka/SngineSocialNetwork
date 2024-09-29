import React from 'react';
import styles from '../index.module.scss';
import { getAvatarUrl } from '../../../api';

function UsersList({ user, siteInfo, translate }) {
  return (
    <div className={styles.userItem}>
      <div className={styles.userInfo}>
        <img
          src={
            user.user_avatar_cover
              ? getAvatarUrl(user.user_avatar_cover)
              : user.user_picture
                ? getAvatarUrl(user.user_picture)
                : `${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.avatar}`
          }
          alt={user.user_lastname}
          className={styles.avatar}
        />
        <div>
          <h4 className={styles.userName}>
            {user.user_firstname} {user.user_lastname}
          </h4>
          <div className='side-list-info'> 125k Following</div>
        </div>
      </div>
      <button className={`bg-primary-soft text-primary ${styles.follow}`}>follow</button>
    </div>
  );
}

export default UsersList;
