import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth);
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
