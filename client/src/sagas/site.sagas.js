import { takeEvery, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import * as ActionTypes from '../constants/site.constants'
import * as actions from '../actions/site.actions'
import * as api from '../api/siteContent.api'

export function* noneAuthInfo() {
  try {
    const response = yield call(api.noneAuthInfo)
    if (response) {
      yield put(actions.siteInfoSuccess(response))
    }
  } catch (error) {
    yield put(actions.siteInfoError(error))
    toast.error(error.message)
  }
}

export function* siteInfo() {
  try {
    const response = yield call(api.siteAuthInfo)
    if (response) {
      yield put(actions.siteInfoSuccess(response))
    }
  } catch (error) {
    yield put(actions.siteInfoError(error))
    toast.error(error.message)
  }
}

export default function* siteSaga() {
  yield all([
    takeEvery(ActionTypes.SITE_NONE_AUT_INFO_REQUEST, noneAuthInfo),
    takeEvery(ActionTypes.SITE_INFO_REQUEST, siteInfo),
  ])
}
