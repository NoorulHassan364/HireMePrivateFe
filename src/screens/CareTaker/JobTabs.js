import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import JobTabs from "../../components/CareTakerHome/JobTabs/JobTabs";

const Index = () => {
  return (
    <>
      <Navbar />
      <JobTabs />
      <Footer />
    </>
  );
};

export default Index;
