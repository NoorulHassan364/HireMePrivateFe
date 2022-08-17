import React from "react";
import { Layout, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import "./EmergencyCare.css";
import emergency from "../../../assets/images/emergency.jpg";

const { Title } = Typography;

const EmergencyCare = () => {
  return (
    <>
      <div className="emergency-care-container">
        <div className="emergency-section-title">
          <span style={{ color: "red" }}>Emergency</span> Coverage
        </div>
        <div className="emergency-care-main">
          <div className="img-section">
            <img src={emergency} alt="emergency-pic" style={{ opacity: 0.7 }} />
          </div>
          <div className="links-section">
            <Title level={3}>Need Emergency Care?</Title>
            <div className="all-emergency-links">
              <div>
                <Link to={`/visitor/${true}/Nanny`} className="emergency-links">
                  Baby Sitter/Nanny
                </Link>
              </div>
              <div>
                <Link
                  to={`/visitor/${true}/Pet Care Provider`}
                  className="emergency-links"
                >
                  Pet Care
                </Link>
              </div>
              <div>
                <Link
                  to={`/visitor/${true}/Senior Care Provider`}
                  className="emergency-links"
                >
                  Senior Care
                </Link>
              </div>
              <div>
                <Link
                  to={`/visitor/${true}/Special Needs Provider`}
                  className="emergency-links"
                >
                  Special Needs
                </Link>
              </div>
              <div>
                <Link
                  to={`/visitor/${true}/HouseKeeper`}
                  className="emergency-links"
                >
                  HouseKeeping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyCare;
