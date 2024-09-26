import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './auth.reducer'
import appReducer from './app.reducer'
import siteReducer from './site.reducer'

const rootReducer = (history) =>
  combineReducers({
    site: siteReducer,
    auth: authReducer,
    app: appReducer,
    router: connectRouter(history),
  })
export default rootReducer
