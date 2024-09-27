import { takeEvery, call, put, all, take, fork } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as ActionTypes from '../constants/app.constants';
import * as actions from '../actions/app.actions';
import * as api from '../api/app.api';
import { END, eventChannel } from 'redux-saga';
function createUploader(action) {
  let emit;
  const chan = eventChannel((emitter) => {
    emit = emitter;
    return () => {};
  });
  const formData = new FormData();
  formData.append('avatar', action.avatar);
  const onUploadProgress = ({ total, loaded }) => {
    const percentage = Math.round((loaded * 100) / total);
    emit(percentage);
    if (percentage === 100) emit(END);
  };
  const uploadPromise = api.uploadAvatar(formData, onUploadProgress);
  return [uploadPromise, chan];
}

function* uploadProgressWatcher(chan) {
  while (true) {
    const progress = yield take(chan);
    yield put(actions.uploadAvatarProgress(progress));
  }
}
export function* uploadAvatar(action) {
  try {
    const [uploadPromise, chan] = yield call(createUploader, action.payload);
    yield fork(uploadProgressWatcher, chan);
    const response = yield call(() => uploadPromise);
    if (response.status) {
      yield put(actions.uploadAvatarSuccess(response.newAvatarUrl));
      yield put(actions.toggleCropperAvatar(response.cropper));
      toast.success(response.message);
    } else {
      toast.error(response.error);
    }
  } catch (error) {
    toast.error(error.error);
  }
}

export function* userInfo() {
  try {
    const response = yield call(api.userInfo);
    if (response) {
      yield put(actions.userInfoSuccess(response));
    }
  } catch (error) {
    yield put(actions.userInfoError(error));
    toast.error(error.error);
  }
}

export function* cropperAvatarSave(action) {
  try {
    const response = yield call(api.cropperAvatar, action.payload);
    if (response) {
      yield put(actions.cropperAvatarSaveSuccess(response.newAvatarUrl));
      toast.success(response.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

export function* deleteAvatar() {
  try {
    const response = yield call(api.deleteAvatar);
    if (response) {
      toast.success(response.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

export function* stageTwoSave(action) {
  try {
    const response = yield call(api.stageTwoSave, action.payload);
    if (response) {
      yield put(actions.startedStageTwoSaveSuccess(response.message));
    }
  } catch (error) {
    toast.error(error.message);
  }
}

export function* stageThreeSave(action) {
  try {
    const response = yield call(api.stageThreeSave, action.payload);
    if (response) {
      toast.success(response.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

export function* allUsers() {
  try {
    const response = yield call(api.allUsersInfo);
    if (response) {
      yield put(actions.allUserInfoSuccess(response));
    }
  } catch (error) {
    yield put(actions.allUserInfoError(error));
    toast.error(error.message);
  }
}

export default function* appSaga() {
  yield all([
    takeEvery(ActionTypes.USER_INFO_REQUEST, userInfo),
    takeEvery(ActionTypes.UPLOAD_USER_AVATAR, uploadAvatar),
    takeEvery(ActionTypes.CROPPER_AVATAR_SAVE, cropperAvatarSave),
    takeEvery(ActionTypes.DELETE_AVATAR, deleteAvatar),
    takeEvery(ActionTypes.STARTED_SAGE_TWO_SAVE, stageTwoSave),
    takeEvery(ActionTypes.STARTED_SAGE_THREE_SAVE, stageThreeSave),
    takeEvery(ActionTypes.ALL_USER_INFO_REQUEST, allUsers),
  ]);
}
