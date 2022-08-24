import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes";
import Profile from "../screens/Profile/CareGiverProfile";
import Loader from "../components/Loader/Loader";
const CareTakerHome = lazy(() => import("../screens/CareTaker/Index"));
const JobForm = lazy(() => import("../screens/CareTaker/JobForm"));
const ViewJobs = lazy(() => import("../screens/CareTaker/viewJobs"));
const JobTabs = lazy(() => import("../screens/CareTaker/JobTabs"));
const CommunicateToHouseKeeper = lazy(() =>
  import(
    "../screens/CareTaker/HandyResource/HouseKeeper/CommunicateToHouseKeeper"
  )
);
const HouseKeeperContractsBeforeHire = lazy(() =>
  import(
    "../screens/CareTaker/HandyResource/HouseKeeper/HouseKeeperContractsBeforeHire"
  )
);

const BabySitterResponsibilities = lazy(() =>
  import(
    "../screens/CareTaker/HandyResource/Babysitter/BabySitterResponsibilities"
  )
);
const BenifitsOfNanny = lazy(() =>
  import("../screens/CareTaker/HandyResource/Babysitter/BenifitsOfNanny")
);

const PetcareResponsibilities = lazy(() =>
  import("../screens/CareTaker/HandyResource/Petcare/PetcareResponsibilities")
);
const BenifitsOfPetcare = lazy(() =>
  import("../screens/CareTaker/HandyResource/Petcare/BenifitsOfPetcare")
);

const SeniorCareResponsibilities = lazy(() =>
  import(
    "../screens/CareTaker/HandyResource/SeniorCare/seniorcareResponsibilities"
  )
);
const BenifitsOfSeniorcare = lazy(() =>
  import("../screens/CareTaker/HandyResource/SeniorCare/benifitsOfSeniorcare")
);

const SpecialNeedsResponsibilities = lazy(() =>
  import(
    "../screens/CareTaker/HandyResource/SpecialNeeds/SpecialNeedsResponsibilities"
  )
);
const BenifitsOfSpecialneeds = lazy(() =>
  import(
    "../screens/CareTaker/HandyResource/SpecialNeeds/BenifitsOfSpecialneeds"
  )
);

const ErrandsResponsibilities = lazy(() =>
  import("../screens/CareTaker/HandyResource/Errands/ErrandsResponsibilities")
);
const ErrandsBenifits = lazy(() =>
  import("../screens/CareTaker/HandyResource/Errands/ErrandsBenifits")
);

const TutorResponsibilities = lazy(() =>
  import("../screens/CareTaker/HandyResource/Tutor/TutorResponsibilities")
);
const BenifitsOfTutor = lazy(() =>
  import("../screens/CareTaker/HandyResource/Tutor/BenifitsOfTutor")
);

const CommonIssue = lazy(() =>
  import("../screens/CareTaker/HandyResource/CommonIssue/CommonIssue")
);
const BackgoundCheck = lazy(() =>
  import("../screens/CareTaker/HandyResource/BackgroundCheck/BackgroundCheck")
);
const GiftedChild = lazy(() =>
  import("../screens/CareTaker/HandyResource/GiftedChild/GiftedChild")
);

const CareTakerRoutes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<CareTakerHome />} />
        <Route path="/post-a-job/:service" element={<JobForm />} />
        <Route path="/view-jobs" element={<ViewJobs />} />
        <Route path="/job-tabs/:jobId" element={<JobTabs />} />
        <Route
          path="/handy-resource/communicate-to-housekeeper"
          element={<CommunicateToHouseKeeper />}
        />
        <Route
          path="/handy-resource/housekeeper-contracts-before-hire"
          element={<HouseKeeperContractsBeforeHire />}
        />
        <Route
          path="/handy-resource/babysitter-responsibilities"
          element={<BabySitterResponsibilities />}
        />
        <Route
          path="/handy-resource/benifits-of-nanny"
          element={<BenifitsOfNanny />}
        />
        <Route
          path="/handy-resource/petcare-responsibilities"
          element={<PetcareResponsibilities />}
        />
        <Route
          path="/handy-resource/benifits-of-petcare"
          element={<BenifitsOfPetcare />}
        />
        <Route
          path="/handy-resource/senior-care-responsibilities"
          element={<SeniorCareResponsibilities />}
        />
        <Route
          path="/handy-resource/benifits-of-seniorcare"
          element={<BenifitsOfSeniorcare />}
        />
        <Route
          path="/handy-resource/special-needs-responsibilities"
          element={<SpecialNeedsResponsibilities />}
        />
        <Route
          path="/handy-resource/benifits-of-specialneeds"
          element={<BenifitsOfSpecialneeds />}
        />
        <Route
          path="/handy-resource/errands-responsibilities"
          element={<ErrandsResponsibilities />}
        />
        <Route
          path="/handy-resource/errands-benifits"
          element={<ErrandsBenifits />}
        />
        <Route path="/handy-resource/common-issues" element={<CommonIssue />} />
        <Route
          path="/handy-resource/backgound-check"
          element={<BackgoundCheck />}
        />
        <Route path="/handy-resource/gifted-child" element={<GiftedChild />} />
        <Route
          path="/handy-resource/tutor-responsibilities"
          element={<TutorResponsibilities />}
        />
        <Route
          path="/handy-resource/tutor-benifits"
          element={<BenifitsOfTutor />}
        />
      </Routes>
    </React.Suspense>
  );
};

export default CareTakerRoutes;
