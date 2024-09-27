import { takeEvery, call, all, put } from 'redux-saga/effects';
import * as ActionTypes from '../constants/auth.constants';
import * as actions from '../actions/auth.actions';
import * as api from '../api/auth.api';
import { setAccessToken } from '../utils';
import { toast } from 'react-toastify';

export function* signIn(action) {
  try {
    const response = yield call(api.signIn, action.payload);
    if (response.token) {
      yield call(setAccessToken, response.token);
      yield put(actions.signInSuccess(response));
    } else {
      yield put(actions.signInError(response));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(actions.signInError(error.message));
    toast.error(error.message);
  }
}

export function* signUp(action) {
  try {
    const response = yield call(api.signUp, action.payload);
    if (!response.success) {
      yield put(actions.signUpError(response));
      toast.error(response.message);
    } else {
      yield call(setAccessToken, response.token);
      yield put(actions.signUpSuccess(response));
      toast.error(response.message);
    }
  } catch (error) {
    yield put(actions.signUpError(error.message));
    toast.error(error.message);
  }
}
export default function* authSagas() {
  yield all([takeEvery(ActionTypes.SIGN_UP_REQUEST, signUp), takeEvery(ActionTypes.SIGN_IN_REQUEST, signIn)]);
}
