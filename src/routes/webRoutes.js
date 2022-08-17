import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedAuthRoute from "./protectedAuthRoutes";
import {
  ProtectedRoute,
  ProtectedCareGiver,
  ProtectedCareTaker,
  ProtectedLandingPage,
} from "./protectedRoutes";
import Loader from "../components/Loader/Loader";
// import CareGiverRoutes from "./careGiverProfileRoutes";
import VisitorRoutes from "./visitorRoutes";
import CareTakerRoutes from "./careTakerRoutes";

const LandingPage = lazy(() => import("../screens/LandingPage/LandingPage"));
const Login = lazy(() => import("../screens/Auth/Login/Login"));
const Signup = lazy(() => import("../screens/Auth/Signup/Signup"));
const ForgetPassword = lazy(() =>
  import("../screens/Auth/ForgetPassword/ForgetPassword")
);
const ResetPassword = lazy(() =>
  import("../screens/Auth/ResetPassword/ResetPassword")
);
const Profile = lazy(() => import("../screens/Profile/Profile"));
const CareGiverProfile = lazy(() =>
  import("../screens/Profile/CareGiverProfile")
);

const GetStarted = lazy(() => import("../screens/GetStarted/index"));
const JobForm = lazy(() => import("../screens/Auth/ApplyToJob/JobForm"));
const BuildProfile = lazy(() =>
  import("../screens/Auth/ApplyToJob/BuildProfile")
);

export default function AppRoutes() {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedLandingPage>
              <LandingPage />
            </ProtectedLandingPage>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <ProtectedAuthRoute>
              <Login />
            </ProtectedAuthRoute>
          }
        />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route
          exact
          path="/signup"
          element={
            <ProtectedAuthRoute>
              <Signup />
            </ProtectedAuthRoute>
          }
        />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route
          exact
          path="/forgetPassword"
          element={
            <ProtectedAuthRoute>
              <ForgetPassword />
            </ProtectedAuthRoute>
          }
        />
        {/* <Route exact path="/forgetPassword" element={<ForgetPassword />} /> */}
        <Route
          exact
          path="/resetPassword/:id"
          element={
            <ProtectedAuthRoute>
              <ResetPassword />
            </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedCareTaker>
              <Profile />
            </ProtectedCareTaker>
          }
        />
        <Route
          exact
          path="/care-taker-member/*"
          element={
            <ProtectedCareTaker>
              <CareTakerRoutes />
            </ProtectedCareTaker>
          }
        />
        <Route
          exact
          path="/care-giver-profile/*"
          element={
            <ProtectedCareGiver>
              <CareGiverProfile />
            </ProtectedCareGiver>
          }
        />
        {/* <Route exact path="/resetPassword" element={<ResetPassword />} /> */}
        <Route
          exact
          path="/get-started"
          element={
            <ProtectedAuthRoute>
              <GetStarted />
            </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/apply-to-job/job-form"
          element={
            <ProtectedAuthRoute>
              <JobForm />
            </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/apply-to-job/job-form/build-profile/:id"
          element={
            <ProtectedAuthRoute>
              <BuildProfile />
            </ProtectedAuthRoute>
          }
        />
        <Route exact path="/visitor/*" element={<VisitorRoutes />} />
      </Routes>
    </React.Suspense>
  );
}
