import { all } from 'redux-saga/effects'
import authSagas from './auth.sagas'
import appSagas from './app.sagas'
import siteSaga from './site.sagas'

export default function* rootSaga() {
  yield all([authSagas(), appSagas(), siteSaga()])
}
