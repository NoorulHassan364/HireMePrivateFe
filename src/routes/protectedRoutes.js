import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function ProtectedCareGiver({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user?.role === "careTaker") {
    return <Navigate to="/" replace />;
  }
  return children;
}

function ProtectedCareTaker({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user?.role === "careGiver") {
    return <Navigate to="/" replace />;
  }
  return children;
}

function ProtectedLandingPage({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user?.role == "careTaker") {
    return <Navigate to="/care-taker-member" replace />;
  }
  if (user && user?.role == "careGiver") {
    return <Navigate to="/care-giver-profile" replace />;
  }
  return children;
}

export {
  ProtectedRoute,
  ProtectedCareTaker,
  ProtectedCareGiver,
  ProtectedLandingPage,
};
