import { takeEvery, call, put, all, take, fork } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import * as ActionTypes from '../constants/app.constants'
import * as actions from '../actions/app.actions'
import * as api from '../api/app.api'
import { END, eventChannel } from 'redux-saga'
function createUploader(action) {
  let emit
  const chan = eventChannel((emitter) => {
    emit = emitter
    return () => {}
  })
  const formData = new FormData()
  formData.append('avatar', action.avatar)
  const onUploadProgress = ({ total, loaded }) => {
    const percentage = Math.round((loaded * 100) / total)
    emit(percentage)
    if (percentage === 100) emit(END)
  }
  const uploadPromise = api.uploadAvatar(formData, onUploadProgress)
  return [uploadPromise, chan]
}

function* uploadProgressWatcher(chan) {
  while (true) {
    const progress = yield take(chan)
    yield put(actions.uploadAvatarProgress(progress))
  }
}
export function* uploadAvatar(action) {
  try {
    const [uploadPromise, chan] = yield call(createUploader, action.payload)
    yield fork(uploadProgressWatcher, chan)
    const response = yield call(() => uploadPromise)
    if (response.status) {
      yield put(actions.uploadAvatarSuccess(response.newAvatarUrl))
      toast.success(response.message)
    } else {
      toast.error(response.error)
    }
  } catch (error) {
    toast.error(error.error)
  }
}

export function* userInfo() {
  try {
    const response = yield call(api.userInfo)
    if (response) {
      yield put(actions.userInfoSuccess(response))
    }
  } catch (error) {
    yield put(actions.userInfoError(error))
    toast.error(error.error)
  }
}

export default function* appSaga() {
  yield all([
    takeEvery(ActionTypes.USER_INFO_REQUEST, userInfo),
    takeEvery(ActionTypes.UPLOAD_USER_AVATAR, uploadAvatar),
  ])
}
