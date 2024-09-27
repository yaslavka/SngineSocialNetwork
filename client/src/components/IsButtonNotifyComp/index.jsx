import React, { useState } from 'react';
import styles from './index.module.scss';
import { IconNotifyCheckShow, IconNotifyMuteShow, IconNotifySettingShow, IconNotifySettingsShow } from '../../assets';
import { Link } from 'react-router-dom';
import routesLik from '../../constants/routes.constants';

function IsButtonNotifyComp({ theme, onButtonNotify, className, translate }) {
  const [isShowSettingsNotify, setIsShowSettingsNotify] = useState(false);

  const onShow = () => {
    setIsShowSettingsNotify(!isShowSettingsNotify);
  };
  const onClose = () => {
    onButtonNotify();
  };

  const notifyShowMain = [
    {
      name: 'Mark all as read',
      icon: (
        <IconNotifyCheckShow
          className={styles.mainLinkIcon}
          fill={!theme ? 'white' : 'rgb(51 65 85 / var(--tw-text-opacity))'}
        />
      ),
      route: '/',
    },
    {
      name: 'Notification setting',
      icon: (
        <IconNotifySettingsShow
          className={styles.mainLinkIcon}
          fill={!theme ? 'white' : 'rgb(51 65 85 / var(--tw-text-opacity))'}
        />
      ),
      route: routesLik.settings,
    },
    {
      name: 'Mute Notification',
      icon: (
        <IconNotifyMuteShow
          className={styles.mainLinkIcon}
          fill={!theme ? 'white' : 'rgb(51 65 85 / var(--tw-text-opacity))'}
        />
      ),
      route: '/',
    },
  ];

  return (
    <div className={className}>
      <div className={styles.notifyHeader}>
        <h3 className={styles.notifyTitle}> {translate('notifications')} </h3>
        <button type={'button'} className={styles.buttonIconShow} onClick={onShow}>
          <IconNotifySettingShow className={styles.ionicon} width={22} height={20} />
        </button>
        {isShowSettingsNotify && (
          <div className={styles.notifyMain} onClick={onClose}>
            {notifyShowMain.map((link, index) => (
              <Link to={link.route} className={styles.mainLink} onClick={onShow}>
                {link.icon}
                <div className={styles.mainLinkText} style={{ color: `${!theme ? 'white' : 'black'}` }}>
                  {translate(link.name)}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className={styles.notifyCenter}>
        <></>
      </div>
      <Link to={'/'} className={styles.notifyFooter} onClick={onClose}>
        {translate('View Notifications')}
      </Link>
    </div>
  );
}

export default IsButtonNotifyComp;
