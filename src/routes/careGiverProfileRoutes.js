import React, { lazy } from "react";
import { Routes, Route, Brow } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes";
import Profile from "../screens/Profile/CareGiverProfile";
import Loader from "../components/Loader/Loader";

const General = lazy(() => import("../screens/Profile/General"));
const Job = lazy(() => import("../screens/Profile/Job"));
const JobDetail = lazy(() => import("../screens/Profile/JobDetail"));

const careGiverProfileRoutes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/*" element={<General />} />
        <Route path="/job" element={<Job />} />
        <Route path="/job-detail/:jobId" element={<JobDetail />} />
      </Routes>
    </React.Suspense>
  );
};

export default careGiverProfileRoutes;
