import React from "react";
import JWTToken from "../lib/token";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const token = JWTToken.getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default Protected;
