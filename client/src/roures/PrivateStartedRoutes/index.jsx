import React from 'react';
import { Switch, Redirect, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import omit from 'lodash-es/omit';
import { privateStartRouteConfig } from '../../routes';
import routesLik from '../../constants/routes.constants';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

function PrivateStartedRoutes() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Switch>
            {privateStartRouteConfig.map((route, index) => (
              <RouteWithSubRoutes key={index} {...omit(route, 'id')} />
            ))}
            <Redirect to={routesLik.started} />
          </Switch>
        </Router>
      </BrowserRouter>
    </>
  );
}
export default PrivateStartedRoutes;
