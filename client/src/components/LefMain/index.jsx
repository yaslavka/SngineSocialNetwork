import React, { useState } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/images/feed/home.png';
import message from '../../assets/images/feed/message.png';
import video from '../../assets/images/feed/video.png';
import event from '../../assets/images/event.png';
import pages from '../../assets/images/page.png';
import group from '../../assets/images/group.png';
import market from '../../assets/images/market.png';
import blog from '../../assets/images/blog.png';
import game from '../../assets/images/game.png';
import fund from '../../assets/images/fund.png';
import createBlog from '../../assets/images/blog-2.png';
import createGroup from '../../assets/images/group-2.png';
import routesLik from '../../constants/routes.constants';
import { getAvatarUrl } from '../../api';
import { IconNotifySettingsShow, IconProfileBilling, IconUpdatePlan } from '../../assets';

function LefMain({ translate, theme, pathname, userInfo, siteInfo }) {
  const [showAll, setShowAll] = useState(false);
  const toggleLinks = () => {
    setShowAll((prev) => !prev);
  };
  const pagination = [
    {
      path: `/${userInfo.user_name}`,
      borderRadius: 50,
      name: `${userInfo.user_firstname} ${userInfo.user_lastname}`,
      img: userInfo.user_avatar_cover
        ? getAvatarUrl(userInfo.user_avatar_cover)
        : userInfo.user_picture
          ? getAvatarUrl(userInfo.user_picture)
          : `${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.avatar}`,
    },
    {
      path: routesLik.feed,
      name: 'feed',
      img: homeIcon,
      borderRadius: 0,
    },
    {
      path: routesLik.messages,
      name: 'messages',
      img: message,
      borderRadius: 0,
    },
    {
      path: routesLik.videos,
      name: 'video',
      img: video,
      borderRadius: 0,
    },
    {
      path: routesLik.event,
      name: 'event',
      img: event,
      borderRadius: 0,
    },
    {
      path: routesLik.pages,
      name: 'pages',
      img: pages,
      borderRadius: 0,
    },
    {
      path: routesLik.group,
      name: 'group',
      img: group,
      borderRadius: 0,
    },
    {
      path: routesLik.market,
      name: 'market',
      img: market,
      borderRadius: 0,
    },
    {
      path: routesLik.blog,
      name: 'blog',
      img: blog,
      borderRadius: 0,
    },
    {
      path: routesLik.game,
      name: 'game',
      img: game,
      borderRadius: 0,
    },
    {
      path: routesLik.fund,
      name: 'fund',
      img: fund,
      borderRadius: 0,
    },
    {
      path: routesLik.createBlog,
      name: 'createBlog',
      img: createBlog,
      borderRadius: 0,
    },
    {
      path: routesLik.createGroup,
      name: 'createGroup',
      img: createGroup,
      borderRadius: 0,
    },
  ];

  const paginationTwo = [
    {
      path: routesLik.settings,
      name: 'settings',
      img: (
        <IconNotifySettingsShow
          className={styles.mainLinkIcon}
          fill={!theme ? 'white' : 'rgb(51 65 85 / var(--tw-text-opacity))'}
        />
      ),
      subLinks: null,
    },
    {
      path: routesLik.upgrade,
      name: 'Upgrade',
      img: <IconProfileBilling height={23} width={23} stroke={!theme ? 'white' : 'rgb(51 65 85 / 1)'} />,
      subLinks: null,
    },
    {
      path: routesLik.development,
      name: 'Development',
      img: <IconProfileBilling height={23} width={23} stroke={!theme ? 'white' : 'rgb(51 65 85 / 1)'} />,
      subLinks: [
        {
          path: '/',
          name: '',
        },
      ],
      icon: (
        <svg
          className={
            showAll
              ? `bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700 ${styles.rotateSvg}`
              : 'bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700'
          }
          fill={theme ? '#3a3939' : '#FFF'}
          viewBox='0 0 20 20'
          width={30}
          height={30}
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
      ),
    },
  ];

  return (
    <div className={theme ? styles.containerLinksW : styles.containerLinks}>
      {pagination.slice(0, showAll ? pagination.length : 7).map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className={pathname === link.path ? styles.activeL : theme ? styles.linkName : styles.linkNameW}>
          <img
            src={link.img}
            alt='feeds'
            className='w-6'
            width={30}
            height={30}
            style={{ borderRadius: `${link.borderRadius}%` }}
          />
          <span> {translate(link.name)} </span>
        </Link>
      ))}
      <button onClick={toggleLinks} className={theme ? styles.linkShow : styles.linkShowB}>
        <svg
          className={
            showAll
              ? `bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700 ${styles.rotateSvg}`
              : 'bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700'
          }
          fill={theme ? '#3a3939' : '#FFF'}
          viewBox='0 0 20 20'
          width={30}
          height={30}
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
        <span> {showAll ? translate('Свернуть') : translate('Показать все')} </span>
      </button>
      <div className={styles.usersSection}>тут будет список неизвестных пользователей</div>
      {paginationTwo.map((link, index) => (
        <>
          {link.subLinks ? (
            <>
              <Link
                key={index}
                to={link.path}
                className={pathname === link.path ? styles.activeL : theme ? styles.linkName : styles.linkNameW}>
                {link.img}
                <span> {translate(link.name)} </span>
                {link.icon}
              </Link>
            </>
          ) : (
            <>
              <Link
                key={index}
                to={link.path}
                className={pathname === link.path ? styles.activeL : theme ? styles.linkName : styles.linkNameW}>
                {link.img}
                <span> {translate(link.name)} </span>
              </Link>
            </>
          )}
        </>
      ))}
    </div>
  );
}

export default LefMain;
