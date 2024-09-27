import React from 'react';
import { Link } from 'react-router-dom';
import { getAvatarUrl } from '../../../../api';

function StartedUsersList({ user, siteInfo, translate }) {
  return (
    <>
      <div className='col-md-6 col-lg-3'>
        <div className='ui-box'>
          <div className='img'>
            <Link to={`/${user.user_name}`}>
              <img
                src={
                  user.user_avatar_cover
                    ? getAvatarUrl(user.user_avatar_cover)
                    : user.user_picture
                      ? getAvatarUrl(user.user_picture)
                      : `${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.avatar}`
                }
                alt={user.user_lastname}
              />
            </Link>
          </div>
          <div className='mt10'>
            <span className='js_user-popover' data-uid='13'>
              <Link className='h6' to={`/${user.user_name}`}>
                {user.user_firstname} {user.user_lastname}
              </Link>
            </span>
          </div>
          <div className='mt10'>
            <button type='button' className='btn btn-sm btn-success js_friend-add' data-uid='13'>
              <i className='fa fa-user-plus mr5'></i>
              {translate('Подружиться')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartedUsersList;
