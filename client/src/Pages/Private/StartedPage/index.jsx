import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PageContainer from '../../../components/PageContainer'
import styles from './index.module.scss'
import StageStart from '../../../components/StageStart'

function StartedPage() {
  const userInfo = useSelector((state) => state.app.user)
  const theme = useSelector((state) => state.app.theme)
  const siteInfo = useSelector((state) => state.site.siteInfo)
  const [stageStartNumber, setStageStartNumber] = useState(1)
  return (
    <>
      {userInfo && siteInfo && (
        <PageContainer theme={theme} userInfo={userInfo} siteInfo={siteInfo}>
          <div className={styles.started}>
            <div className={styles.startedContainer}>
              <div className={styles.startedInner}>
                <img
                  src={`${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.floatingImg}`}
                  alt={siteInfo.seoImage}
                  className={styles.floatingImg}
                />
                <div className={styles.inner}>
                  <h2>Начало работы</h2>
                  <p className="text-xlg">
                    Эта информация позволит больше узнать о вас
                  </p>
                </div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
                <div className={styles.inner2}></div>
              </div>
            </div>
            <div className={`container ${styles.container}`}>
              <div className="row">
                <div className="col-12 col-md-10 mx-md-auto">
                  <div
                    className={
                      theme === 'bg-white'
                        ? 'card shadow'
                        : `card shadow ${styles.black}`
                    }
                  >
                    <div className="card-body">
                      <ul className="nav nav-pills nav-fill nav-started mb30 js_wizard-steps">
                        <li className="nav-item">
                          <a
                            className={
                              stageStartNumber === 1
                                ? 'nav-link active'
                                : 'nav-link disabled'
                            }
                            href="#step-1"
                          >
                            <h4 className="mb5">Шаг 1</h4>
                            <p className="mb0">Загрузите свою фотографию</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={
                              stageStartNumber === 2
                                ? 'nav-link active'
                                : 'nav-link disabled'
                            }
                            href="#step-2"
                          >
                            <h4 className="mb5">Шаг 2</h4>
                            <p className="mb0">Обновите информацию о себе</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={
                              stageStartNumber === 3
                                ? 'nav-link active'
                                : 'nav-link disabled'
                            }
                            href="#step-3"
                          >
                            <h4 className="mb5">Шаг 3</h4>
                            <p className="mb0">Добавьте друзей</p>
                          </a>
                        </li>
                      </ul>
                      <div
                        className="js_wizard-content"
                        id={`step-${stageStartNumber}`}
                      >
                        <StageStart
                          stage={stageStartNumber}
                          userInfo={userInfo}
                          siteInfo={siteInfo}
                        />
                        <div className="clearfix mt20">
                          <button
                            onClick={() => {
                              if (stageStartNumber === 3) {
                              } else {
                                setStageStartNumber(stageStartNumber + 1)
                              }
                            }}
                            id="activate-step-2"
                            className="btn btn-primary float-right"
                          >
                            Следующий шаг
                            <i className="fas fa-arrow-circle-right ml5"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      )}
    </>
  )
}

export default StartedPage
