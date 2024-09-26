import { baseInstance } from './index'

export const userInfo = () => baseInstance.get('/user')

export const uploadAvatar = (avatar, onUploadProgress) =>
  baseInstance.post('/avatar_upload', avatar, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  })
export const cropperAvatar = (avatar) =>
  baseInstance.post('/avatar_cropper', avatar)
