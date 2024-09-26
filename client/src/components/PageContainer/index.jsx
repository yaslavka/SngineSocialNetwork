import React, {useState} from "react";
import Header from "../Header";
import styles from "./index.module.scss";
import ModalComp from "../ModalComp";
import { useDispatch, useSelector } from 'react-redux'
import { getAvatarUrl } from '../../api'
import CropperComp from "../CropperComp";
import * as  actionCropper from '../../actions/app.actions'


function PageContainer({
  userInfo,
  theme,
  siteInfo,
  imageFromCropper,
  functionFromCropper,
  children,
}) {
  const dispatch = useDispatch()
  const isCropperAvatar = useSelector(state => state.app.isCropperAvatar);
  const [isButtonCreate, setIsButtonCreate] = useState(false);
  const [isButtonNotify, setIsButtonNotify] = useState(false);
  const [isButtonMessage, setIsButtonMessage] = useState(false);
  const [isButtonUser, setIsButtonUser] = useState(false);
  const [cropData, setCropData] = useState("#");

  const saveCropperAvatar=(data)=>{
    dispatch(actionCropper.cropperAvatarSave({avatar: data}))
  }
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
  console.log(cropData)
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
        className={`${styles.main} ${userInfo.user_started ? styles.paddingMain : ""}`}>
        {userInfo.user_started && (
          <>
            <></>
          </>
        )}
        {children}
        {userInfo.user_started && (
          <>
            <></>
          </>
        )}
      </main>
      {isCropperAvatar && (
        <ModalComp onClick={()=>{saveCropperAvatar(cropData)}}>
          <CropperComp image={getAvatarUrl(userInfo.user_picture)} setCropData={setCropData}/>
        </ModalComp>
      )}
    </>
  );
}

export default PageContainer;
