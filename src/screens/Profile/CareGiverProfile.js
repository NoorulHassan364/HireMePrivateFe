import React from "react";
import Profile from "../../components/Profile/CareGiverProfile/Index";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CareGiverProfileRoutes from "../../routes/careGiverProfileRoutes";

const Index = () => {
  return (
    <>
      <Navbar />
      <Profile>
        <CareGiverProfileRoutes />
      </Profile>
      <Footer />
    </>
  );
};

export default Index;
