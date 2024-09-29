import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import PageContainer from '../../../components/PageContainer';
import styles from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Navigation } from 'swiper/modules';
import 'swiper/css';
import { getAvatarUrl } from '../../../api';
import ModalStories from '../../../components/ModalStories';
function FeedPage() {
  const { t } = useTranslation('common');
  const userInfo = useSelector((state) => state.app.user);
  const theme = useSelector((state) => state.app.theme);
  const siteInfo = useSelector((state) => state.site.siteInfo);
  const [isZuck, setIsZuck] = useState(false);

  return (
    <>
      {userInfo && siteInfo && (
        <>
          <PageContainer
            theme={theme}
            siteInfo={siteInfo}
            translate={t}
            userInfo={userInfo}>
            <section
              className={`col-md-8 col-lg-6 offcanvas-mainbar ${styles.pageContainer}`}>
              <article className={styles.storiesContainer}>
                <Swiper
                  slidesPerView={9}
                  spaceBetween={15}
                  speed={500}
                  parallax={true}
                  navigation
                  className={styles.swiper}
                  modules={[Navigation, Parallax]}>
                  <SwiperSlide className={styles.swiperSlide}>
                    <button className={` ${styles.storiesUserCreate}`}>
                      <div className={styles.createStoriesIcon}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className={styles.storiesAvatarSvg}
                          viewBox='0 0 512 512'>
                          <circle cx='256' cy='272' r='64'></circle>
                          <path d='M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.52 15.52 0 00-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.52 15.52 0 00-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 00-16-16h-24a16 16 0 00-16 16v8h-4a48.05 48.05 0 00-48 48V384a48.05 48.05 0 0048 48h352a48.05 48.05 0 0048-48V192a48.05 48.05 0 00-48-48zM256 368a96 96 0 1196-96 96.11 96.11 0 01-96 96z'></path>
                        </svg>
                      </div>
                    </button>
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <button className={` ${styles.storiesUser}`}>
                      <img
                        src={
                          userInfo.user_avatar_cover
                            ? getAvatarUrl(userInfo.user_avatar_cover)
                            : userInfo.user_picture
                              ? getAvatarUrl(userInfo.user_picture)
                              : `${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.avatar}`
                        }
                        alt={userInfo.user_lastname}
                        className={styles.storiesAvatar}
                      />
                    </button>
                  </SwiperSlide>
                </Swiper>
              </article>
            </section>
          </PageContainer>
          <ModalStories />
        </>
      )}
    </>
  );
}

export default FeedPage;
