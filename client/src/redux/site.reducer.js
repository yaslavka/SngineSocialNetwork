import * as ActionTypes from '../constants/site.constants';

const initialState = {
  siteInfo: null,
  loadings: {
    siteInfo: false,
  },
  errors: {
    siteInfo: null,
  },
};
const siteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SITE_NONE_AUT_INFO_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, siteInfo: true },
        errors: { ...state.errors, siteInfo: null },
      };
    }
    case ActionTypes.SITE_INFO_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, siteInfo: true },
        errors: { ...state.errors, siteInfo: null },
      };
    }
    case ActionTypes.SITE_INFO_SUCCESS: {
      const siteInfo = action.payload;
      return {
        ...state,
        loadings: { ...state.loadings, siteInfo: false },
        errors: { ...state.errors, siteInfo: null },
        siteInfo,
      };
    }
    case ActionTypes.SITE_INFO_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, siteInfo: false },
        errors: { ...state.errors, siteInfo: action.payload },
      };
    }
    default:
      return state;
  }
};
export default siteReducer;
