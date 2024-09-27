import * as ActionTypes from '../constants/app.constants';

export const toggleSeme = (values) => ({
  type: ActionTypes.TOGGLE_THEME,
  payload: values,
});

/* User Info */
export const userInfo = (values) => ({
  type: ActionTypes.USER_INFO_REQUEST,
  payload: values,
});
export const userInfoSuccess = (values) => ({
  type: ActionTypes.USER_INFO_SUCCESS,
  payload: values,
});
export const userInfoError = (error) => ({
  type: ActionTypes.USER_INFO_ERROR,
  payload: error,
});

export const uploadAvatar = (values) => ({
  type: ActionTypes.UPLOAD_USER_AVATAR,
  payload: values,
});
export const uploadAvatarProgress = (values) => ({
  type: ActionTypes.UPLOAD_USER_AVATAR_PROGRESS,
  payload: values,
});
export const uploadAvatarSuccess = (values) => ({
  type: ActionTypes.UPLOAD_USER_AVATAR_SUCCESS,
  payload: values,
});

export const toggleCropperAvatar = (values) => ({
  type: ActionTypes.TOGGLE_CROPPER_AVATAR,
  payload: values,
});

export const cropperAvatarSave = (values) => ({
  type: ActionTypes.CROPPER_AVATAR_SAVE,
  payload: values,
});
export const cropperAvatarSaveSuccess = (values) => ({
  type: ActionTypes.CROPPER_AVATAR_SAVE_SUCCESS,
  payload: values,
});
export const toggleDeleteAvatar = (values) => ({
  type: ActionTypes.TOGGLE_DELETE_AVATAR,
  payload: values,
});
export const deleteAvatar = (values) => ({
  type: ActionTypes.DELETE_AVATAR,
  payload: values,
});

export const startedStageChange = (values) => ({
  type: ActionTypes.STARTED_SAGE_CHANGE,
  payload: values,
});

export const startedStageTwoSave = (values) => ({
  type: ActionTypes.STARTED_SAGE_TWO_SAVE,
  payload: values,
});

export const startedStageTwoSaveSuccess = (values) => ({
  type: ActionTypes.STARTED_SAGE_TWO_SAVE_SUCCESS,
  payload: values,
});

export const startedStageThreeSave = (values) => ({
  type: ActionTypes.STARTED_SAGE_THREE_SAVE,
  payload: values,
});

export const allUserInfo = (values) => ({
  type: ActionTypes.ALL_USER_INFO_REQUEST,
  payload: values,
});
export const allUserInfoSuccess = (values) => ({
  type: ActionTypes.ALL_USER_INFO_SUCCESS,
  payload: values,
});
export const allUserInfoError = (error) => ({
  type: ActionTypes.ALL_USER_INFO_ERROR,
  payload: error,
});
