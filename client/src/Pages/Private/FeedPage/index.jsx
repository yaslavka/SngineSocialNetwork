import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import PageContainer from '../../../components/PageContainer';
import styles from './index.module.scss';

function FeedPage() {
  const { t } = useTranslation('common');
  const userInfo = useSelector((state) => state.app.user);
  const theme = useSelector((state) => state.app.theme);
  const siteInfo = useSelector((state) => state.site.siteInfo);

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

export default FeedPage;
