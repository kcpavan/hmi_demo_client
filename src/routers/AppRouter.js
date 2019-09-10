import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';

import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import LoginPage from '../components/LoginPage';



const AppRouter = () => (
  <BrowserRouter>
    <div>

      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
  </BrowserRouter>
);

export default AppRouter;