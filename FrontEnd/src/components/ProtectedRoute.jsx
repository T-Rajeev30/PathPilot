import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  if (!auth) return <Navigate to="/login" />; // fallback if contex is missing

  const { user } = useAuth();

  console.log(children);
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
