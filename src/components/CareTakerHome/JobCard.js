import { Avatar, Tabs, Tooltip, Typography, Button, Image } from "antd";
import React from "react";
import Cards from "./Cards";
import FavCards from "./FavCards";
import Viewed from "./Viewed";
import { UserAPI } from "../../api";
import "./JobCard.css";
import { useNavigate } from "react-router-dom";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHoldingChild,
  faHandHoldingHand,
  faPersonChalkboard,
  faHouseChimney,
  faCloudSun,
  faShieldDog,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";

const { Title } = Typography;
const { TabPane } = Tabs;

const jobCards = [
  {
    title: "Child Care",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: <FontAwesomeIcon icon={faHandsHoldingChild} />,
    service: "Nanny",
  },
  {
    title: "Senior Care",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: <FontAwesomeIcon icon={faHandHoldingHand} />,
    service: "Senior Care Provider",
  },
  {
    title: "Tutoring",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    service: "Tutor",
  },
  {
    title: "House Keeping",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: <FontAwesomeIcon icon={faHouseChimney} />,
    service: "HouseKeeper",
  },

  {
    title: "Pet Care",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: <FontAwesomeIcon icon={faShieldDog} />,
    service: "Pet Care Provider",
  },

  {
    title: "Special Needs",
    description: "Lorem ipsum dolor sit amet consectetur",
    icon: <FontAwesomeIcon icon={faWheelchair} />,
    service: "Special Needs Provider",
  },
];

const JobCard = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "10px" }}>
      <Title level={4}>Post a Job</Title>
      <div className="post-jobs-card">
        <div className="post-job-card-section">
          {jobCards.map((item) => {
            return (
              <div
                className="post-job-single-card"
                onClick={() =>
                  navigate(`/care-taker-member/post-a-job/${item?.service}`)
                }
              >
                <div className="job-card-icon" style={{ fontSize: "32px" }}>
                  {item?.icon}
                </div>
                <div
                  className="job-card-title"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  {item?.title}
                </div>
                <div className="job-card-description">{item?.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
