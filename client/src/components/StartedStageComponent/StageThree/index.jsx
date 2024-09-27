import React from 'react';
import { useSelector } from 'react-redux';
import StartedUsersList from './StartedUsersList';

function StageThree({ userInfo, siteInfo, translate }) {
  const allUsers = useSelector((state) => state.app.allUsers).filter((i) => i.user_id !== userInfo.user_id);

  return (
    <>
      <div className='text-center'>
        <h3 className='mb5'>Добавьте друзей</h3>{' '}
        <p className='mb20'>Получайте последние новости от наших популярных пользователей</p>
      </div>
      <ul className={'row'}>
        {allUsers.length > 0 &&
          allUsers.filter((user) => user.user_countries === userInfo.user_countries).length > 0 &&
          allUsers
            .filter((user) => user.user_countries === userInfo.user_countries)
            .map((user, index) => (
              <StartedUsersList key={index} user={user} siteInfo={siteInfo} translate={translate} />
            ))}
      </ul>
    </>
  );
}

export default StageThree;
