import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ViewJobs from "../../components/CareTakerHome/ViewJob/ViewJob";

const Index = () => {
  return (
    <>
      <Navbar />
      <ViewJobs />
      <Footer />
    </>
  );
};

export default Index;
