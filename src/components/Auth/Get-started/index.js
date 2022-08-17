import React from "react";
import { Button } from "antd";
import "./style.css";
import care1 from "../../../assets/images/need-care-1.jpg";
import care2 from "../../../assets/images/need-care-2.jpg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="container-gs">
      <div className="header-gs">Let’s get started. Choose an option.</div>
      <div className="wrap-gs">
        <div
          className="care-box-gs"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${care1})`,
          }}
        >
          <div className="title-gs">I need a caregiver</div>
          <div className="description-gs">
            Start your free search for care in your area.
          </div>
          <Button
            className="button-gs"
            shape="round"
            onClick={() => navigate("/signup")}
          >
            get started
          </Button>
        </div>
        <div
          className="care-box-gs"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${care2})`,
          }}
        >
          <div className="title-gs">I want a care job</div>
          <div className="description-gs">
            Create a profile and search for jobs.
          </div>
          <Button
            className="button-gs"
            shape="round"
            onClick={() => navigate("/apply-to-job/job-form")}
          >
            get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
