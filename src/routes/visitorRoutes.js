import React, { lazy } from "react";
import { Routes, Route, Brow } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoutes";
import Profile from "../screens/Profile/CareGiverProfile";
import Loader from "../components/Loader/Loader";

const Cards = lazy(() => import("../screens/Visitor/Visit"));
const ProfileData = lazy(() => import("../screens/Visitor/ProfileData"));

const visitorRoutes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/:emergency/:service/*" element={<Cards />} />
        <Route path="/profileData/:id" element={<ProfileData />} />
      </Routes>
    </React.Suspense>
  );
};

export default visitorRoutes;
