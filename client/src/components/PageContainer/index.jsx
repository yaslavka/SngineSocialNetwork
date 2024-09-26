import React, { useState } from 'react'
import Header from '../Header'
import styles from './index.module.scss'

function PageContainer({ userInfo, theme, siteInfo, children }) {
  const [isButtonCreate, setIsButtonCreate] = useState(false)
  const [isButtonNotify, setIsButtonNotify] = useState(false)
  const [isButtonMessage, setIsButtonMessage] = useState(false)
  const [isButtonUser, setIsButtonUser] = useState(false)

  const onButtonCreate = () => {
    setIsButtonCreate(!isButtonCreate)
    setIsButtonNotify(false)
    setIsButtonMessage(false)
    setIsButtonUser(false)
  }
  const onDisableAll = () => {
    setIsButtonCreate(false)
    setIsButtonNotify(false)
    setIsButtonUser(false)
    setIsButtonMessage(false)
  }
  const onButtonNotify = () => {
    setIsButtonCreate(false)
    setIsButtonMessage(false)
    setIsButtonUser(false)
    setIsButtonNotify(!isButtonNotify)
  }

  const onButtonMessage = () => {
    setIsButtonCreate(false)
    setIsButtonNotify(false)
    setIsButtonUser(false)
    setIsButtonMessage(!isButtonMessage)
  }
  const onButtonUser = () => {
    setIsButtonCreate(false)
    setIsButtonNotify(false)
    setIsButtonUser(!isButtonUser)
    setIsButtonMessage(false)
  }
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
        className={`${styles.main} ${userInfo.user_started ? styles.paddingMain : ''}`}
      >
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
    </>
  )
}
export default PageContainer
