import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../../../components/PageContainer';
import styles from './index.module.scss';
import StageStart from '../../../components/StageStart';
import * as stageActions from '../../../actions/app.actions';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import routesLik from '../../../constants/routes.constants';

function StartedPage() {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const startedStage = useSelector((state) => state.app.startedStage);
  const userInfo = useSelector((state) => state.app.user);
  const theme = useSelector((state) => state.app.theme);
  const siteInfo = useSelector((state) => state.site.siteInfo);
  const [countriesCode, setCountriesCode] = useState('ru');
  const [countriesName, setCountriesName] = useState(null);
  const [city, setCity] = useState(null);
  const [cityBirthday, setBirthday] = useState(null);
  const [workTitle, setWorkTitle] = useState(null);
  const [workPlace, setWorkPlace] = useState(null);
  const [workUrl, setWorkUrl] = useState(null);
  const [eduMajor, setEduMajor] = useState(null);
  const [eduSchool, setEduSchool] = useState(null);
  const [eduClass, setEduClass] = useState(null);

  const toggleStage = (i) => {
    dispatch(stageActions.startedStageChange(i));
  };

  const stageTwoSave = (data) => {
    dispatch(stageActions.startedStageTwoSave(data));
  };

  const stageThreeSave = () => {
    dispatch(stageActions.startedStageThreeSave());
  };

  return (
    <>
      {userInfo && siteInfo && (
        <PageContainer theme={theme} userInfo={userInfo} siteInfo={siteInfo} translate={t}>
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
                  <p className='text-xlg'>Эта информация позволит больше узнать о вас</p>
                </div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
                <div className={styles.inner2}></div>
              </div>
            </div>
            <div className={`container ${styles.container}`}>
              <div className='row'>
                <div className='col-12 col-md-10 mx-md-auto'>
                  <div className={theme === 'bg-white' ? 'card shadow' : `card shadow ${styles.black}`}>
                    <div className='card-body'>
                      <ul className='nav nav-pills nav-fill nav-started mb30 js_wizard-steps'>
                        <li className='nav-item'>
                          <Link className={startedStage === 1 ? 'nav-link active' : 'nav-link disabled'} to={'#'}>
                            <h4 className='mb5'>Шаг 1</h4>
                            <p className='mb0'>Загрузите свою фотографию</p>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link className={startedStage === 2 ? 'nav-link active' : 'nav-link disabled'} to={'#'}>
                            <h4 className='mb5'>Шаг 2</h4>
                            <p className='mb0'>Обновите информацию о себе</p>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link className={startedStage === 3 ? 'nav-link active' : 'nav-link disabled'} to={'#'}>
                            <h4 className='mb5'>Шаг 3</h4>
                            <p className='mb0'>Добавьте друзей</p>
                          </Link>
                        </li>
                      </ul>
                      <div className='js_wizard-content' id={`step-${startedStage}`}>
                        <StageStart
                          stage={startedStage}
                          userInfo={userInfo}
                          siteInfo={siteInfo}
                          translate={t}
                          countriesCode={countriesCode}
                          setCountriesCode={setCountriesCode}
                          countriesName={countriesName}
                          setCountriesName={setCountriesName}
                          city={city}
                          setCity={setCity}
                          cityBirthday={cityBirthday}
                          setBirthday={setBirthday}
                          workTitle={workTitle}
                          setWorkTitle={setWorkTitle}
                          workPlace={workPlace}
                          setWorkPlace={setWorkPlace}
                          workUrl={workUrl}
                          setWorkUrl={setWorkUrl}
                          eduMajor={eduMajor}
                          setEduMajor={setEduMajor}
                          eduSchool={eduSchool}
                          setEduSchool={setEduSchool}
                          eduClass={eduClass}
                          setEduClass={setEduClass}
                        />
                        <div className='clearfix mt20'>
                          <div className={startedStage === 2 ? styles.floatinRight : styles.floatRight}>
                            {startedStage === 2 && (
                              <button
                                type='submit'
                                className='btn btn-success'
                                onClick={() => {
                                  stageTwoSave({
                                    user_language: countriesCode,
                                    user_countries: countriesName,
                                    user_city: city,
                                    user_current_city: cityBirthday,
                                    user_work_title: workTitle,
                                    user_work_place: workPlace,
                                    user_work_url: workUrl,
                                    user_edu_major: eduMajor,
                                    user_edu_school: eduSchool,
                                    user_edu_class: eduClass,
                                  });
                                }}>
                                <i className='fas fa-check-circle mr5'></i>Сохранить изменения
                              </button>
                            )}
                            {startedStage === 3 ? (
                              <Link to={routesLik.feed} className='btn btn-danger float-right' onClick={stageThreeSave}>
                                <i className='fas fa-check-circle mr5'></i>Завершить
                              </Link>
                            ) : (
                              <button
                                onClick={() => {
                                  toggleStage(startedStage + 1);
                                }}
                                id='activate-step-2'
                                className='btn btn-primary float-right'>
                                {t('Следующий шаг')}
                                <i className='fas fa-arrow-circle-right ml5'></i>
                              </button>
                            )}
                          </div>
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
  );
}

export default StartedPage;
