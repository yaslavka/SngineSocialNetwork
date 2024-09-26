import { baseInstance } from './index'

export const noneAuthInfo = () => baseInstance.get('/none_authInfo')
export const siteAuthInfo = () => baseInstance.get('/site_authInfo')
