import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes";
import Profile from "../screens/Profile/CareGiverProfile";
import Loader from "../components/Loader/Loader";

const CareTakerHome = lazy(() => import("../screens/CareTaker/Index"));
const JobForm = lazy(() => import("../screens/CareTaker/JobForm"));
const ViewJobs = lazy(() => import("../screens/CareTaker/viewJobs"));
const JobTabs = lazy(() => import("../screens/CareTaker/JobTabs"));

const CareTakerRoutes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<CareTakerHome />} />
        <Route path="/post-a-job/:service" element={<JobForm />} />
        <Route path="/view-jobs" element={<ViewJobs />} />
        <Route path="/job-tabs/:jobId" element={<JobTabs />} />
      </Routes>
    </React.Suspense>
  );
};

export default CareTakerRoutes;
