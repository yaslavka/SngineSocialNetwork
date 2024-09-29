import React, { useState } from 'react';
import Header from '../Header';
import styles from './index.module.scss';
import ModalComp from '../ModalComp';
import { useDispatch, useSelector } from 'react-redux';
import { getAvatarUrl } from '../../api';
import CropperComp from '../CropperComp';
import * as actionCropper from '../../actions/app.actions';
import * as appActions from '../../actions/app.actions';
import LefMain from '../LefMain';
import { useParams, useLocation } from 'react-router-dom';
import routesLik from '../../constants/routes.constants';
import RightMain from '../RightMain';

function PageContainer({ userInfo, theme, siteInfo, imageFromCropper, functionFromCropper, translate, children }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCropperAvatar = useSelector((state) => state.app.isCropperAvatar);
  const isDeleteAvatar = useSelector((state) => state.app.isDeleteAvatar);
  const [isButtonCreate, setIsButtonCreate] = useState(false);
  const [isButtonNotify, setIsButtonNotify] = useState(false);
  const [isButtonMessage, setIsButtonMessage] = useState(false);
  const [isButtonUser, setIsButtonUser] = useState(false);
  const [cropData, setCropData] = useState('#');

  console.log(pathname);

  const saveCropperAvatar = (data) => {
    dispatch(actionCropper.cropperAvatarSave({ avatar: data }));
  };
  const deleteAvatar = () => {
    dispatch(actionCropper.deleteAvatar());
  };
  const onButtonCreate = () => {
    setIsButtonCreate(!isButtonCreate);
    setIsButtonNotify(false);
    setIsButtonMessage(false);
    setIsButtonUser(false);
  };
  const onDisableAll = () => {
    setIsButtonCreate(false);
    setIsButtonNotify(false);
    setIsButtonUser(false);
    setIsButtonMessage(false);
  };
  const onButtonNotify = () => {
    setIsButtonCreate(false);
    setIsButtonMessage(false);
    setIsButtonUser(false);
    setIsButtonNotify(!isButtonNotify);
  };

  const onButtonMessage = () => {
    setIsButtonCreate(false);
    setIsButtonNotify(false);
    setIsButtonUser(false);
    setIsButtonMessage(!isButtonMessage);
  };
  const onButtonUser = () => {
    setIsButtonCreate(false);
    setIsButtonNotify(false);
    setIsButtonUser(!isButtonUser);
    setIsButtonMessage(false);
  };
  return (
    <>
      <Header
        userInfo={userInfo}
        theme={theme}
        siteInfo={siteInfo}
        isButtonCreate={isButtonCreate}
        isButtonNotify={isButtonNotify}
        isButtonMessage={isButtonMessage}
        isButtonUser={isButtonUser}
        onButtonCreate={onButtonCreate}
        onDisableAll={onDisableAll}
        onButtonNotify={onButtonNotify}
        onButtonMessage={onButtonMessage}
        onButtonUser={onButtonUser}
      />
      <main
        onClick={onDisableAll}
        className={`${userInfo.user_started && pathname !== routesLik.started ? ` row offcanvas ${styles.paddingMain}` : styles.main}`}>
        {userInfo.user_started && pathname !== routesLik.started && (
          <div className={`col-md-4 col-lg-3 offcanvas-sidebar js_sticky-sidebar ${styles.mainLinkContainer}`}>
            <LefMain
              pathname={pathname}
              translate={translate}
              theme={theme === 'bg-white'}
              userInfo={userInfo}
              siteInfo={siteInfo}
            />
          </div>
        )}
        {children}
        {userInfo.user_started && pathname !== routesLik.started && (
          <div className={`col-md-4 col-lg-3 offcanvas-sidebar js_sticky-sidebar ${styles.mainLinkContainerRight} `}>
            <RightMain
              pathname={pathname}
              translate={translate}
              theme={theme === 'bg-white'}
              userInfo={userInfo}
              siteInfo={siteInfo}
            />
          </div>
        )}
      </main>
      {isCropperAvatar && (
        <ModalComp
          submitText={translate('Сохранить')}
          icon={<i className='fa fa-crop-alt mr5'></i>}
          title={translate(' Обрезать картинку')}
          onClick={() => {
            saveCropperAvatar(cropData);
          }}
          translate={translate}
          onClickCancel={() => {
            dispatch(appActions.toggleCropperAvatar(false));
          }}>
          <CropperComp image={getAvatarUrl(userInfo.user_picture)} setCropData={setCropData} />
        </ModalComp>
      )}
      {isDeleteAvatar && (
        <ModalComp
          submitText={translate('Подтвердить')}
          icon={null}
          title={translate(' Удалить изображение')}
          onClick={deleteAvatar}
          translate={translate}
          onClickCancel={() => {
            dispatch(appActions.toggleDeleteAvatar(false));
          }}>
          <h6>Вы уверены, что хотите удалить свою фотографию?</h6>
        </ModalComp>
      )}
    </>
  );
}

export default PageContainer;
