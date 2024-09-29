import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import UsersList from './UsersList';

function RightMain({ userInfo, siteInfo, theme, translate }) {
  const allUsers = useSelector((state) => state.app.allUsers).filter((i) => i.user_id !== userInfo.user_id);
  return (
    <section className={styles.section}>
      {allUsers.length > 0 && (
        <article className={theme ? styles.article : styles.articleB}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}> People you may know </h3>
            <Link to='#' className={styles.allUsers}>
              {translate('seeAll')}
            </Link>
          </div>
          {allUsers.slice(0, 5).map((user, index) => (
            <UsersList user={user} key={index} translate={translate} siteInfo={siteInfo} />
          ))}
        </article>
      )}
      <article className={theme ? styles.article : styles.articleB}></article>
    </section>
  );
}

export default RightMain;
