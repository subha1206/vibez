import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ comp: Component, isLoggedIn, ...rest }) => {
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn ? (
          <Redirect
            to={{ pathname: '/unAuthorized', state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
