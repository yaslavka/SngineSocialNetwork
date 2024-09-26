import * as ActionTypes from '../constants/app.constants'

export const toggleSeme = (values) => ({
  type: ActionTypes.TOGGLE_THEME,
  payload: values,
})

/* User Info */
export const userInfo = (values) => ({
  type: ActionTypes.USER_INFO_REQUEST,
  payload: values,
})
export const userInfoSuccess = (values) => ({
  type: ActionTypes.USER_INFO_SUCCESS,
  payload: values,
})
export const userInfoError = (error) => ({
  type: ActionTypes.USER_INFO_ERROR,
  payload: error,
})

export const uploadAvatar = (values) => ({
  type: ActionTypes.UPLOAD_USER_AVATAR,
  payload: values,
})
export const uploadAvatarProgress = (values) => ({
  type: ActionTypes.UPLOAD_USER_AVATAR_PROGRESS,
  payload: values,
})
export const uploadAvatarSuccess = (values) => ({
  type: ActionTypes.UPLOAD_USER_AVATAR_SUCCESS,
  payload: values,
})
