import * as ActionTypes from '../constants/app.constants'

const initialState = {
  user: null,
  theme: 'bg-white',
  uploadAvatarProgress: 0,
  toggleAvatarProgress: false,
  isCropperAvatar: false,
  isSveCropper: false,
  loadings: {
    user: false,
  },
  errors: {
    user: null,
  },
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_THEME: {
      return {
        ...state,
        theme: action.payload,
      }
    }
    case ActionTypes.TOGGLE_CROPPER_AVATAR: {
      return {
        ...state,
        isCropperAvatar: action.payload,
      }
    }
    case ActionTypes.USER_INFO_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, user: true },
        errors: { ...state.errors, user: null },
      }
    }
    case ActionTypes.USER_INFO_SUCCESS: {
      const user = action.payload
      return {
        ...state,
        loadings: { ...state.loadings, user: false },
        errors: { ...state.errors, user: null },
        user,
      }
    }
    case ActionTypes.USER_INFO_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, user: false },
        errors: { ...state.errors, user: action.payload },
      }
    }
    case ActionTypes.UPLOAD_USER_AVATAR: {
      return {
        ...state,
        toggleAvatarProgress: true,
      }
    }
    case ActionTypes.UPLOAD_USER_AVATAR_PROGRESS: {
      console.log(action)
      return {
        ...state,
        uploadAvatarProgress: action.payload,
      }
    }
    case ActionTypes.UPLOAD_USER_AVATAR_SUCCESS: {
      const userOld = state.user
      return {
        ...state,
        user: {
          ...userOld,
          user_picture: action.payload,
        },
        uploadAvatarProgress: 0,
        toggleAvatarProgress: false,
      }
    }
    case ActionTypes.CROPPER_AVATAR_SAVE: {
      return {
        ...state,
        isCropperAvatar: false,
        isSveCropper: true,
      }
    }
    case ActionTypes.CROPPER_AVATAR_SAVE_SUCCESS: {
      const userOld = state.user
      return {
        ...state,
        user: {
          ...userOld,
          user_avatar_cover: action.payload,
        },
        isSveCropper:false
      }
    }
    default:
      return state
  }
}
export default appReducer
