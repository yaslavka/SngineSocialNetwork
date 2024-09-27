import React from 'react';
import styles from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  LocationIconCreate,
  PostIconCreate,
  StatusIconCreate,
  StoryIconCreate,
  VideoCameraIconCreate,
} from '../../assets';
import { Link } from 'react-router-dom';
import groupLogo from '../../assets/images/group.png';
import pageLogo from '../../assets/images/page.png';
import eventLogo from '../../assets/images/event.png';
import marketLogo from '../../assets/images/market.png';
import gameLogo from '../../assets/images/game.png';

function IsButtonCreateComp({ theme, onButtonCreate, siteInfo, translate, className }) {
  const linksArr = [
    {
      route: '/',
      name: 'Games',
      subName: 'Meet people with similar interests.',
      icon: groupLogo,
    },
    {
      route: '/',
      name: 'Pages',
      subName: 'Find and connect with businesses.',
      icon: pageLogo,
    },
    {
      route: '/',
      name: 'Event',
      subName: 'Discover fun activities near you .',
      icon: eventLogo,
    },
    {
      route: '/',
      name: 'Event',
      subName: 'Discover fun activities near you .',
      icon: marketLogo,
    },
    {
      route: '/',
      name: 'Event',
      subName: 'Discover fun activities near you .',
      icon: gameLogo,
    },
  ];
  return (
    <div className={className}>
      <h3 className={styles.titleDropdown}> {translate('create')} </h3>
      <Swiper
        slidesPerView={2.4}
        spaceBetween={2}
        speed={500}
        parallax={true}
        navigation
        className={styles.swiperContainer}
        modules={[Navigation, Parallax]}>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={`${styles.slide} ${styles.green}`}>
            <StoryIconCreate className={styles.ionicon} />
            <div>{translate('story')}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={`${styles.slide} ${styles.blue}`}>
            <PostIconCreate className={styles.ionicon} />
            <div>{translate('post')}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={`${styles.slide} ${styles.violet}`}>
            <VideoCameraIconCreate className={styles.ionicon} />
            <div>{translate('reel')}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={`${styles.slide} ${styles.red}`}>
            <LocationIconCreate className={styles.ionicon} />
            <div>{translate('location')}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={`${styles.slide} ${styles.blue}`}>
            <StatusIconCreate className={styles.ionicon} />
            <div>{translate('status')}</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.linkContainer}>
        {linksArr.map((link, index) => (
          <Link to={link.route} key={index} className={styles.linkInner} onClick={onButtonCreate}>
            <img src={link.icon} alt={siteInfo.seoImage} />
            <div>
              <h4 className={styles.titleLink} style={{ color: `${!theme ? 'white' : 'black'}` }}>
                {translate(link.name)}
              </h4>
              <div className={styles.subTitleLink}>{translate(link.subName)}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default IsButtonCreateComp;
