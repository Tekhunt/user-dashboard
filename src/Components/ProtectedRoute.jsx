import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ element: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("user");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;