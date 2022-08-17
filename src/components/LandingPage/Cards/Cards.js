import React from "react";
import { Layout, Row, Col } from "antd";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div>
      <div className="card_section">
        <div className="card_header">Our Services</div>
        <div className="card_main">
          {props?.cards?.map((item) => {
            return (
              <div className="card">
                <div className="card_icon">{item?.icon}</div>
                <div className="card_title">{item?.title}</div>
                <div className="card_description">{item?.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
