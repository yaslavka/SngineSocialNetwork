import React, { useState } from 'react';
import styles from './index.module.scss';
import { Link, useLocation } from 'react-router-dom';
import routesLik from '../../constants/routes.constants';
import { HeaderMainButton, IconButtonCreate, IconMessageShow, IconNotifyCreate, IconSearchHeader } from '../../assets';
import { useTranslation } from 'react-i18next';
import IsButtonCreateComp from '../IsButtonCreateComp';
import HeaderDropDownContainer from '../HeaderDropDownContainer';
import IsButtonNotifyComp from '../IsButtonNotifyComp';
import IsButtonMessageComp from '../IsButtonMessageComp';
import { getAvatarUrl } from '../../api';
import IsButtonUserComp from '../IsButtonUserComp';
import LefMain from '../LefMain';

function Header({
  userInfo,
  siteInfo,
  onButtonCreate,
  onDisableAll,
  isButtonCreate,
  theme,
  isButtonNotify,
  onButtonNotify,
  isButtonMessage,
  isButtonUser,
  onButtonMessage,
  onButtonUser,
}) {
  const { t } = useTranslation('common');
  const { pathname } = useLocation();
  const [isActiveInput, setIsActiveInput] = useState(false);
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <header className={theme === 'bg-white' ? styles.headerBgW : styles.headerBgB}>
        <div className={styles.headerContainer}>
          <Link to={routesLik.started} className={styles.logoContainer}>
            <img
              src={`${process.env.REACT_APP_INFO_BASE_URL}/${theme === 'bg-white' ? siteInfo.logo : siteInfo.logo2}`}
              alt={siteInfo.seoImage}
              className={styles.logo}
            />
          </Link>
          <div className={styles.mainButtonContainer}>
            <button
              className={styles.mainButton}
              onClick={() => {
                setShowMain(!showMain);
              }}>
              <HeaderMainButton height={30} fill={theme === 'bg-white' ? 'black' : 'white'} width={30} />
            </button>
          </div>
          <div className={styles.searchWrapper} onClick={onDisableAll}>
            <div className={styles.searchContainer}>
              <div className={styles.iconSearchContainer}>
                <IconSearchHeader className={styles.iconSearch} />
              </div>
              <input
                type='text'
                placeholder={t('globalSearch')}
                className={styles.inputSearch}
                autoComplete='off'
                onFocus={() => setIsActiveInput(true)}
                onBlur={() => setIsActiveInput(false)}
              />
            </div>
            <div
              className={isActiveInput ? styles.active : styles.hidden}
              style={{
                background: `${theme === 'bg-white' ? 'white' : '#211f1f'}`,
              }}>
              <div className={styles.searchResultContainer}>
                <div>{t('searchResult')}</div>
                <button className={styles.clearButton}>{t('searchClean')}</button>
              </div>
            </div>
          </div>
          <div className={styles.headerIcons}>
            <button onClick={onButtonCreate} type='button' className={styles.buttonIconPlus}>
              <IconButtonCreate height={30} width={30} stroke={'rgb(51 65 85 / 1)'} />
            </button>
            {isButtonCreate && (
              <HeaderDropDownContainer
                theme={theme === 'bg-white'}
                onButtonCreate={onButtonCreate}
                className={styles.visibleCreate}>
                <IsButtonCreateComp
                  onButtonCreate={onButtonCreate}
                  className={styles.containerDropDown}
                  theme={theme === 'bg-white'}
                  translate={t}
                  siteInfo={siteInfo}
                />
              </HeaderDropDownContainer>
            )}
            <button onClick={onButtonNotify} type='button' className={styles.buttonIconNotify}>
              <IconNotifyCreate
                height={30}
                width={30}
                fill={theme === 'bg-white' ? 'currentColor' : 'rgb(51 65 85 / 1)'}
              />
            </button>
            {isButtonNotify && (
              <HeaderDropDownContainer
                theme={theme === 'bg-white'}
                onButtonCreate={onButtonNotify}
                className={styles.visibleNotify}>
                <IsButtonNotifyComp
                  onButtonNotify={onButtonNotify}
                  className={styles.containerDropDownSpaceBetween}
                  theme={theme === 'bg-white'}
                  translate={t}
                  siteInfo={siteInfo}
                />
              </HeaderDropDownContainer>
            )}
            <button onClick={onButtonMessage} type='button' className={styles.buttonIconMessage}>
              <IconMessageShow
                height={30}
                width={30}
                fill={theme === 'bg-white' ? 'currentColor' : 'rgb(51 65 85 / 1)'}
              />
            </button>
            {isButtonMessage && (
              <HeaderDropDownContainer
                theme={theme === 'bg-white'}
                onButtonCreate={onButtonMessage}
                className={styles.visibleMessage}>
                <IsButtonMessageComp
                  onButtonNotify={onButtonMessage}
                  className={styles.containerDropDownSpaceBetween}
                  theme={theme === 'bg-white'}
                  translate={t}
                  siteInfo={siteInfo}
                />
              </HeaderDropDownContainer>
            )}
            <button onClick={onButtonUser} type='button' className={styles.buttonIconAvatar}>
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
            </button>
            {isButtonUser && (
              <HeaderDropDownContainer
                theme={theme === 'bg-white'}
                onButtonCreate={onButtonUser}
                className={styles.visibleAvatar}>
                <IsButtonUserComp
                  onButtonUser={onButtonUser}
                  className={styles.containerDropDownSpaceBetween}
                  theme={theme === 'bg-white'}
                  translate={t}
                  siteInfo={siteInfo}
                  userInfo={userInfo}
                />
              </HeaderDropDownContainer>
            )}
          </div>
        </div>
      </header>
      {showMain && (
        <div className={`offcanvas active ${styles.showMain}`}>
          <LefMain
            pathname={pathname}
            translate={t}
            theme={theme === 'bg-white'}
            userInfo={userInfo}
            siteInfo={siteInfo}
          />
        </div>
      )}
    </>
  );
}

export default Header;
