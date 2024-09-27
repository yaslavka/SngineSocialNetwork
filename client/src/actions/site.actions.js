import * as ActionTypes from '../constants/site.constants';

/* Site Info */
export const noneAuthInfo = (values) => ({
  type: ActionTypes.SITE_NONE_AUT_INFO_REQUEST,
  payload: values,
});
export const siteInfo = (values) => ({
  type: ActionTypes.SITE_INFO_REQUEST,
  payload: values,
});
export const siteInfoSuccess = (values) => ({
  type: ActionTypes.SITE_INFO_SUCCESS,
  payload: values,
});
export const siteInfoError = (error) => ({
  type: ActionTypes.SITE_INFO_ERROR,
  payload: error,
});
