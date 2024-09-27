import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import PageContainer from '../../../components/PageContainer';
import { useParams } from 'react-router-dom';
function UserProfile() {
  const { user_name } = useParams();
  const { t } = useTranslation('common');
  const userInfo = useSelector((state) => state.app.user);
  const theme = useSelector((state) => state.app.theme);
  const siteInfo = useSelector((state) => state.site.siteInfo);
  const allUsers = useSelector((state) => state.app.allUsers).filter((i) => i.user_id !== userInfo.user_id);
  const user = userInfo.user_name === user_name ? userInfo : allUsers.find((i) => i.user_name === user_name);
  return (
    <>
      {userInfo && siteInfo && (
        <PageContainer theme={theme} siteInfo={siteInfo} translate={t} userInfo={userInfo}>
          <div className={`col-md-8 col-lg-6 offcanvas-mainbar ${styles.pageContainer}`}></div>
        </PageContainer>
      )}
      <></>
    </>
  );
}
export default UserProfile;
