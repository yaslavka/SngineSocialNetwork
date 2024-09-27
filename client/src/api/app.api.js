import { baseInstance } from './index';

export const userInfo = () => baseInstance.get('/user');

export const uploadAvatar = (avatar, onUploadProgress) =>
  baseInstance.post('/avatar_upload', avatar, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
export const cropperAvatar = (avatar) => baseInstance.post('/avatar_cropper', avatar);
export const deleteAvatar = (avatar) => baseInstance.post('/avatar_delete', avatar);
export const stageTwoSave = (data) => baseInstance.post('/user_stage_two_save', data);
export const stageThreeSave = (data) => baseInstance.post('/user_stage_three_save', data);
export const allUsersInfo = () => baseInstance.get('/users');
