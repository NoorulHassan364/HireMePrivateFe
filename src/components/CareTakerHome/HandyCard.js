import { Avatar, Tabs, Tooltip, Typography, Button, Image } from "antd";
import React from "react";
import Cards from "./Cards";
import FavCards from "./FavCards";
import Viewed from "./Viewed";
import { UserAPI } from "../../api";
import "./HandyCard.css";
import { useNavigate } from "react-router-dom";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

import handy1 from "../../assets/images/handy1.jpg";
import handy2 from "../../assets/images/handy2.jpg";
import handy3 from "../../assets/images/handy3.jpg";
import handy4 from "../../assets/images/handy4.jpg";
import handy5 from "../../assets/images/handy5.jpg";

const { Title } = Typography;
const { TabPane } = Tabs;

const handyCards = [
  {
    description: "21 ways to hire help around the house",
    img: handy1,
  },
  {
    description: "21 ways to hire help around the house",
    img: handy2,
  },
  {
    description: "21 ways to hire help around the house",
    img: handy3,
  },
  {
    description: "21 ways to hire help around the house",
    img: handy4,
  },
  {
    description: "21 ways to hire help around the house",
    img: handy5,
  },
];

const HandyCard = () => {
  return (
    <div style={{ margin: "10px" }}>
      <Title level={4}>Handy Resource</Title>
      <div className="handy-resource">
        <div className="handy-cards-section">
          {handyCards.map((item) => {
            return (
              <div className="handy-card">
                <Image
                  style={{ borderRadius: "12px" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={item?.img}
                />
                <div style={{ fontSize: "14px" }}>{item?.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HandyCard;
