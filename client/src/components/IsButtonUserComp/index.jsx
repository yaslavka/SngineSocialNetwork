import React from 'react';
import styles from './index.module.scss';
import { avatarUrl, getAvatarUrl } from '../../api';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import {
  IconProfileAccount,
  IconProfileAdvatacing,
  IconProfileBilling,
  IconProfileLogOut,
  IconProfileNight,
  IconProfileUpgrade,
} from '../../assets';
import { useDispatch } from 'react-redux';
import * as themeAction from '../../actions/app.actions';
import * as actions from '../../actions';

function IsButtonUserComp({ className, onButtonUser, siteInfo, theme, translate, userInfo }) {
  const dispatch = useDispatch();
  const toggleTheme = () => {
    if (theme) {
      dispatch(themeAction.toggleSeme('bg-black'));
    } else {
      dispatch(themeAction.toggleSeme('bg-white'));
    }
  };
  const linkProfile = [
    {
      name: 'My Billing',
      route: '/',
      icon: <IconProfileBilling height={30} width={30} stroke={!theme ? 'white' : 'rgb(51 65 85 / 1)'} />,
    },
    {
      name: 'Advatacing',
      route: '/',
      icon: <IconProfileAdvatacing height={30} width={30} stroke={!theme ? 'white' : 'rgb(51 65 85 / 1)'} />,
    },
    {
      name: 'My Account',
      route: '/',
      icon: <IconProfileAccount height={30} width={30} stroke={!theme ? 'white' : 'rgb(51 65 85 / 1)'} />,
    },
    {
      name: 'Night mode',
      route: null,
      icon: <IconProfileNight height={30} width={30} stroke={!theme ? 'white' : 'rgb(51 65 85 / 1)'} />,
    },
  ];

  const LogOut = () => {
    dispatch(actions.signOutSuccess());
    localStorage.clear();
    localStorage.removeItem('access_token');
  };

  return (
    <div className={className}>
      <div className={styles.profileInfoHeader}>
        <img
          src={
            userInfo.user_avatar_cover
              ? getAvatarUrl(userInfo.user_avatar_cover)
              : userInfo.user_picture
                ? getAvatarUrl(userInfo.user_picture)
                : `${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.avatar}`
          }
          alt={userInfo.user_lastname}
        />
        <div onClick={onButtonUser}>
          <h4 className={styles.userFirstname}>
            {userInfo.user_lastname} {userInfo.user_firstname}
          </h4>
          <Link className={styles.username} to='/#'>
            @{userInfo.user_name}
          </Link>
        </div>
      </div>
      <div className={styles.linkProfilerItem}>
        <Link to={'/'} className={`${styles.updatePlan} ${styles.linkProfiler}`} onClick={onButtonUser}>
          <IconProfileUpgrade height={30} width={30} stroke={'currentColor'} />
          <div className={styles.linkProfilerText}>{translate('Upgrade To Premium')}</div>
        </Link>
        {linkProfile.map((link, index) => (
          <>
            {link.route ? (
              <Link key={index} to={link.route} className={styles.linkProfiler} onClick={onButtonUser}>
                {link.icon}
                <div className={styles.linkProfilerText} style={{ color: `${!theme ? 'white' : 'black'}` }}>
                  {translate(link.name)}
                </div>
              </Link>
            ) : (
              <div key={index} className={`${styles.linkProfiler} ${styles.switcherTheme}`}>
                <div className={styles.button}>
                  {link.icon}
                  <div className={styles.linkProfilerText} style={{ color: `${!theme ? 'white' : 'black'}` }}>
                    {translate(link.name)}
                  </div>
                </div>
                <Switch
                  onChange={toggleTheme}
                  checked={!theme}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor={'#88888880'}
                  offColor={'#88888880'}
                />
              </div>
            )}
          </>
        ))}
      </div>
      <div className={styles.logOut} onClick={LogOut}>
        <div className={styles.linkProfiler}>
          <IconProfileLogOut height={30} width={30} stroke={!theme ? 'white' : 'rgb(51 65 85 / 1)'} />
          <div className={styles.linkProfilerText} style={{ color: `${!theme ? 'white' : 'black'}` }}>
            {translate('logOut')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsButtonUserComp;
