import React from 'react'
import {
  Switch,
  Redirect,
  BrowserRouter as Router,
  BrowserRouter,
} from 'react-router-dom'
import omit from 'lodash-es/omit'
import { privateRouteConfig } from '../../routes'
import routesLik from '../../constants/routes.constants'
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes'

function PrivateRoutes() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Switch>
            {privateRouteConfig.map((route, index) => (
              <RouteWithSubRoutes key={index} {...omit(route, 'id')} />
            ))}
            <Redirect to={routesLik.root} />
          </Switch>
        </Router>
      </BrowserRouter>
    </>
  )
}
export default PrivateRoutes
