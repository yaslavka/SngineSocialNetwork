import React, { useEffect } from 'react';
import { getAvatarUrl } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { isValidImageType } from '../../utils';
import * as appUser from '../../actions/app.actions';
import styles from './index.module.scss';
import StageTwo from '../StartedStageComponent/StageTwo';
import StageThree from '../StartedStageComponent/StageThree';

const AutoSubmit = ({ initialValues, values, submitForm }) => {
  useEffect(() => {
    if (initialValues !== values && values.avatar !== null) {
      submitForm();
    }
  }, [initialValues, submitForm, values]);
  return null;
};

function StageStart({
  stage,
  siteInfo,
  translate,
  city,
  cityBirthday,
  countriesCode,
  countriesName,
  eduClass,
  eduMajor,
  setBirthday,
  setCity,
  setCountriesCode,
  setCountriesName,
  setEduClass,
  setEduMajor,
  eduSchool,
  setEduSchool,
  setWorkPlace,
  setWorkTitle,
  setWorkUrl,
  workPlace,
  workTitle,
  workUrl,
  userInfo,
}) {
  const dispatch = useDispatch();
  const uploadProgress = useSelector((state) => state.app.uploadAvatarProgress);
  const toggleAvatarProgress = useSelector((state) => state.app.toggleAvatarProgress);
  const isSveCropper = useSelector((state) => state.app.isSveCropper);

  const submitAvatarForm = ({ avatar }) => {
    dispatch(appUser.uploadAvatar({ avatar: avatar }));
  };

  const deleteAvatar = () => {
    dispatch(appUser.toggleDeleteAvatar(true));
  };

  const toggleCropperAvatar = () => {
    dispatch(appUser.toggleCropperAvatar(!toggleAvatarProgress));
  };

  switch (stage) {
    case 1:
      return (
        <>
          <div className='text-center'>
            <h3 className='mb5'>
              Добро пожаловать{' '}
              <span className='text-primary'>
                {userInfo.user_firstname} {userInfo.user_lastname}
              </span>
            </h3>
            <p className='mb20'>Давайте начнем с загрузки вашей фотографии</p>
          </div>
          <div className='position-relative' style={{ height: '170px' }}>
            <div className='profile-avatar-wrapper static'>
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
              <div className='profile-avatar-change'>
                <Formik
                  initialValues={{
                    avatar: null,
                  }}
                  validate={({ avatar }) => {
                    const errors = {};

                    if (avatar && avatar.size / 1024 / 1024 >= 10) {
                      errors.avatar = 'Размер изображения превышает 10Mb';
                    }

                    if (avatar && !isValidImageType(avatar.type)) {
                      errors.avatar = 'Неверный формат изображения';
                    }

                    return errors;
                  }}
                  onSubmit={submitAvatarForm}>
                  {(props) => (
                    <Form className='x-uploader'>
                      <Field>
                        {({ form }) => (
                          <>
                            <input
                              name='file'
                              type='file'
                              accept='.png, .gif, .jpeg, .jpg'
                              onChange={({ target: { files } }) => {
                                if (files && files[0]) {
                                  const image = files[0];
                                  form.setFieldValue('avatar', image);
                                }
                              }}
                            />
                            <i className='fa fa-camera js_x-uploader' data-handle='picture-user'></i>
                          </>
                        )}
                      </Field>
                      <AutoSubmit {...props} />
                    </Form>
                  )}
                </Formik>
              </div>
              {toggleAvatarProgress && (
                <div className='profile-avatar-change-loader'>
                  <div className='progress x-progress'>
                    <div className='progress-bar' role='progressbar' style={{ width: uploadProgress + 20 }}></div>
                  </div>
                </div>
              )}
              {isSveCropper && (
                <div className='profile-avatar-change-loader'>
                  <div className={styles.progress}>
                    <div className={styles.loader}></div>
                  </div>
                </div>
              )}
              {userInfo.user_picture && (
                <>
                  <div className='profile-avatar-crop' onClick={toggleCropperAvatar}>
                    <i
                      className='fa fa-crop-alt js_init-crop-picture'
                      data-image=''
                      data-handle='user'
                      data-id='16'></i>
                  </div>
                  <div className={'profile-avatar-delete'} onClick={deleteAvatar}>
                    <i className='fa fa-trash js_delete-picture' data-handle='picture-user'></i>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <StageTwo
            stage={stage}
            userInfo={userInfo}
            siteInfo={siteInfo}
            dispatch={dispatch}
            translate={translate}
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
        </>
      );
    case 3:
      return (
        <>
          <StageThree userInfo={userInfo} siteInfo={siteInfo} translate={translate} />
        </>
      );
  }
}

export default StageStart;
