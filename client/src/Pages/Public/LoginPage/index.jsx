import React, { useCallback, useMemo } from 'react'
import styles from './index.module.scss'
import AuthPageContainer from '../../../components/AuthPageContainer'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../actions'
import { Link } from 'react-router-dom'
import routesLik from '../../../constants/routes.constants'
import { Field, Form, Formik } from 'formik'
import AuthInput from '../../../components/AuthInput'
import { useTranslation } from 'react-i18next'

function LoginPage() {
  const { t } = useTranslation('common')
  const siteInfo = useSelector((state) => state.site.siteInfo)
  const dispatch = useDispatch()
  const signInError = useSelector((state) => state.auth.errors.signIn)

  const initialValues = useMemo(
    () => ({
      user_email: '',
      user_password: '',
    }),
    [],
  )

  const submitLoginForm = useCallback(
    (credentials) => {
      dispatch(actions.signIn(credentials))
    },
    [dispatch],
  )

  return (
    <>
      {siteInfo && (
        <AuthPageContainer siteInfo={siteInfo}>
          <div className={styles.titleContainer}>
            <div className={styles.signSubTitle}>{siteInfo.signSubTitle}</div>
            <Link to={routesLik.register} className={styles.linkRegister}>
              {t('linkRegister')}
            </Link>
          </div>
          <Formik initialValues={initialValues} onSubmit={submitLoginForm}>
            {() => (
              <Form className={styles.formAth}>
                <label
                  htmlFor="email"
                  className={
                    signInError && signInError.errorEmail
                      ? styles.labelError
                      : styles.label
                  }
                >
                  {signInError && signInError.errorEmail
                    ? t(signInError.errorEmail)
                    : t('emailLabel')}
                </label>
                <Field
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder={t('emailPlaceholder')}
                  component={AuthInput}
                  className={styles.inputForm}
                />
                <label
                  htmlFor="password"
                  className={
                    signInError && signInError.errorpassword
                      ? styles.labelError
                      : styles.label
                  }
                >
                  {signInError && signInError.errorpassword
                    ? t(signInError.errorpassword)
                    : t('passwordLabel')}
                </label>
                <Field
                  id="password"
                  type="password"
                  name="user_password"
                  placeholder={'***'}
                  component={AuthInput}
                  className={styles.inputForm}
                />
                <div className={styles.rememberContainer}>
                  <div className={styles.rememberInner}>
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                    />
                    <label htmlFor="remember_me" className={styles.rememberme}>
                      {t('rememberMe')}
                    </label>
                  </div>
                  <Link
                    to={routesLik.resetPassword}
                    className={styles.forgotPassword}
                  >
                    {t('forgotPassword')}
                  </Link>
                </div>
                <button type="submit" className={styles.buttonLogin}>
                  {t('buttonLogIn')}
                </button>
                <div className={styles.orContainer}>
                  <hr />
                  {t('or')}
                  <hr />
                </div>
                <div className={styles.socialContainer}>
                  <Link to={'/'} className={styles.facebookLogin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.facebook}
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    Facebook
                  </Link>
                  <Link to={'/'} className={styles.facebookLogin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.facebook}
                      viewBox="0 0 512 512"
                    >
                      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                    </svg>
                    Twitter
                  </Link>
                  <Link to={'/'} className={styles.gitHubLogin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.github}
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                    </svg>
                    Github
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </AuthPageContainer>
      )}
    </>
  )
}

export default LoginPage
