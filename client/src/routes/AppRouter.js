import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../containers/login';
import RegisterPage from '../containers/register';
import ForgotPasswordPage from '../containers/forgotPassword';
import WelcomePage from '../containers/Welcome';
import Home from '../containers/homePage';
import ResetPassword from '../containers/resetPassword';
import UnAuthPage from '../containers/unAuthPage';

const AppRouter = () => {
  const isLoggedIn = useSelector((state) => state.auth.token, shallowEqual);

  return (
    <Switch>
      <ProtectedRoute
        comp={Home}
        path="/home"
        isLoggedIn={isLoggedIn}
      ></ProtectedRoute>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/forgotPassword">
        <ForgotPasswordPage />
      </Route>
      <Route path="/resetPassword/:token">
        <ResetPassword />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <ProtectedRoute
        exact
        comp={WelcomePage}
        path="/welcome"
        isLoggedIn={isLoggedIn}
      ></ProtectedRoute>
      <Route exact path="/unAuthorized">
        <UnAuthPage />
      </Route>
    </Switch>
  );
};

export default AppRouter;
