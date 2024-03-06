import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { SnackActions } from "./store/SnackStore";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token");
  let location = useLocation();

  if (!token) {
    // <Navigate to="/auth/login" state={{ from: location}} replace />
    dispatch(SnackActions.setSnack({title:'Protected Routes',message:'Requires Login to the site!'}))
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return <div className="p-4 sm:ml-64">{children}</div>;
};

export default ProtectedRoute;
