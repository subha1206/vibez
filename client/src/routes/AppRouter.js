import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../containers/login';
import RegisterPage from '../containers/register';
import ForgotPasswordPage from '../containers/forgotPassword';
import WelcomePage from '../containers/Welcome';
import Home from '../containers/homePage';
import ResetPassword from '../containers/resetPassword';
import UnAuthPage from '../containers/unAuthPage';

const AppRouter = () => {
  return (
    <Switch>
      <ProtectedRoute exact comp={Home} path="/home"></ProtectedRoute>
      <Route exact path="/">
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
      <ProtectedRoute exact comp={WelcomePage} path="/welcome"></ProtectedRoute>
      <Route exact path="/unAuthorized">
        <UnAuthPage />
      </Route>
    </Switch>
  );
};

export default AppRouter;
