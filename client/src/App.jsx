import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionUserInfo from './actions/app.actions'
import * as actionSiteInfo from './actions/site.actions'
// import { socketUrl } from './api'
import PrivateRoutes from './roures/PrivateRoutes'
import PrivateStartedRoutes from './roures/PrivateStartedRoutes'
import PublicRoutes from './roures/PublicRoutes'

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const userInfo = useSelector((state) => state.app.user)
  const theme = useSelector((state) => state.app.theme)
  const siteInfo = useSelector((state) => state.site.siteInfo)

  useEffect(() => {
    const body = document.body
    if (body) {
      body.classList = theme
    }
  }, [theme])

  useEffect(() => {
    if (siteInfo && siteInfo) {
      const link = document.querySelector("link[rel*='icon']")
      if (link) {
        link.href = `${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.favicon}`
      }
      document.title = `ХАТ ${siteInfo.question}`
    }
  }, [siteInfo])

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(actionSiteInfo.noneAuthInfo())
    } else {
      dispatch(actionSiteInfo.siteInfo())
    }
  }, [dispatch, isAuthenticated])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(actionUserInfo.userInfo())
    }
  }, [dispatch, isAuthenticated])

  if (isAuthenticated && userInfo) {
    if (!userInfo.user_started) {
      return <PrivateStartedRoutes />
    } else {
      return <PrivateRoutes />
    }
  } else {
    return <PublicRoutes />
  }
}
export default App
