import { takeEvery, call, all, put } from 'redux-saga/effects'
import * as ActionTypes from '../constants/auth.constants'
import * as actions from '../actions/auth.actions'
import * as api from '../api/auth.api'
import { setAccessToken } from '../utils'

export function* signIn(action) {
  try {
    const response = yield call(api.signIn, action.payload)
    if (response.success) {
      yield call(setAccessToken, response.access_token)
      yield put(actions.signInSuccess(response))
    } else {
      yield put(actions.signInError(response))
    }
  } catch (error) {
    yield put(actions.signInError(error.message))
  }
}

export function* signUp(action) {
  try {
    const response = yield call(api.signUp, action.payload)
    if (!response.success) {
      yield put(actions.signUpError(response))
    } else {
      yield call(setAccessToken, response.access_token)
      yield put(actions.signUpSuccess(response))
    }
  } catch (error) {
    yield put(actions.signUpError(error.message))
  }
}
export default function* authSagas() {
  yield all([
    takeEvery(ActionTypes.SIGN_UP_REQUEST, signUp),
    takeEvery(ActionTypes.SIGN_IN_REQUEST, signIn),
  ])
}
