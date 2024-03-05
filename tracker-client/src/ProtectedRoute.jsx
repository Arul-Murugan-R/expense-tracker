import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  let location = useLocation();

  if (!token) {
    // <Navigate to="/auth/login" state={{ from: location}} replace />
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return <div className="p-4 sm:ml-64">{children}</div>;
};

export default ProtectedRoute;
