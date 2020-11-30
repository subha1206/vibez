import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ comp: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('jwt');
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn ? (
          <Redirect to={{ pathname: '/' }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
