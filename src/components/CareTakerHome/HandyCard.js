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

import babysitter1 from "../../assets/images/babysitter-cover-1.jpg";
import babysitter2 from "../../assets/images/babysitter-cover-2.jpg";
import errands1 from "../../assets/images/errands-cover-1.webp";
import errands2 from "../../assets/images/errands-cover-2.jpg";
import houseKeeper1 from "../../assets/images/housekeeper-cover-2.jpg";
import houseKeeper2 from "../../assets/images/housekeeper-cover-1.jpeg";
import petcare1 from "../../assets/images/petcare-cover-1.jpg";
import petcare2 from "../../assets/images/petcare-cover-2.jpg";
import seniorcare1 from "../../assets/images/seniorcare-cover-1.jpeg";
import seniorcare2 from "../../assets/images/seniorcare-cover-2.jpg";
import specialneeds1 from "../../assets/images/specialneeds-cover-1.jpg";
import specialneeds2 from "../../assets/images/specialneeds-cover-2.jpg";
import commonIssue from "../../assets/images/common-issue-cover.jpg";
import backgroundCheck from "../../assets/images/background-checks-cover.jpg";
import giftedChild from "../../assets/images/gifted-child-cover.jpg";
import tutor1 from "../../assets/images/tutor-cover-1.jpg";
import tutor2 from "../../assets/images/tutor-cover-2.jpg";

const { Title } = Typography;
const { TabPane } = Tabs;

const HandyCard = ({ service }) => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "10px" }}>
      <Title level={4}>Handy Resource</Title>
      <div className="handy-resource">
        <div className="handy-cards-section">
          {service == "Nanny" ? (
            <>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/babysitter-responsibilities"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={babysitter1}
                />
                <div style={{ fontSize: "14px" }}>
                  Responsibilities of BabySitter
                </div>
              </div>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/benifits-of-nanny"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={babysitter2}
                />
                <div style={{ fontSize: "14px" }}>Benifits of Nanny</div>
              </div>
            </>
          ) : null}
          {service == "Pet Care Provider" ? (
            <>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/petcare-responsibilities"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={petcare1}
                />
                <div style={{ fontSize: "14px" }}>
                  Pet sitter Things of Responsible
                </div>
              </div>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/benifits-of-petcare"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={petcare2}
                />
                <div style={{ fontSize: "14px" }}>Benifits of Pet sitting</div>
              </div>
            </>
          ) : null}
          {service == "Senior Care Provider" ? (
            <>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/senior-care-responsibilities"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={seniorcare1}
                />
                <div style={{ fontSize: "14px" }}>Senior Caregiver duties</div>
              </div>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/benifits-of-seniorcare"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={seniorcare2}
                />
                <div style={{ fontSize: "14px" }}>
                  Benifits of Senior Caregiver
                </div>
              </div>
            </>
          ) : null}
          {service == "Special Needs Provider" ? (
            <>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/special-needs-responsibilities"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={specialneeds1}
                />
                <div style={{ fontSize: "14px" }}>
                  Special Needs Caregiver tasks?
                </div>
              </div>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/benifits-of-specialneeds"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={specialneeds2}
                />
                <div style={{ fontSize: "14px" }}>
                  Benifits of Special Needs Care
                </div>
              </div>
            </>
          ) : null}
          {service == "HouseKeeper" ? (
            <>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/communicate-to-housekeeper"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={houseKeeper1}
                />
                <div style={{ fontSize: "14px" }}>
                  communication with house cleaner
                </div>
              </div>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/housekeeper-contracts-before-hire"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={houseKeeper2}
                />
                <div style={{ fontSize: "14px" }}>Housekeeper contracts</div>
              </div>
            </>
          ) : null}
          {service == "Errands & Odd Jobs Provider" ? (
            <>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/errands-responsibilities"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={errands1}
                />
                <div style={{ fontSize: "14px" }}>
                  Errands and oddJobs Qualities
                </div>
              </div>
              <div
                className="handy-card"
                onClick={() =>
                  navigate("/care-taker-member/handy-resource/errands-benifits")
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={errands2}
                />
                <div style={{ fontSize: "14px" }}>
                  benifits of errands service?
                </div>
              </div>
            </>
          ) : null}
          {service == "Tutor" ? (
            <>
              <div
                className="handy-card"
                onClick={() =>
                  navigate(
                    "/care-taker-member/handy-resource/tutor-responsibilities"
                  )
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={tutor1}
                />
                <div style={{ fontSize: "14px" }}>
                  Home Tutor Responsibility
                </div>
              </div>
              <div
                className="handy-card"
                onClick={() =>
                  navigate("/care-taker-member/handy-resource/tutor-benifits")
                }
              >
                <Image
                  style={{ borderRadius: "12px", opacity: "0.7" }}
                  preview={false}
                  width={200}
                  height={120}
                  icon={<UserOutlined />}
                  src={tutor2}
                />
                <div style={{ fontSize: "14px" }}>benifits of Tutor</div>
              </div>
            </>
          ) : null}
          <div
            className="handy-card"
            onClick={() =>
              navigate("/care-taker-member/handy-resource/common-issues")
            }
          >
            <Image
              style={{ borderRadius: "12px", opacity: "0.7" }}
              preview={false}
              width={200}
              height={120}
              icon={<UserOutlined />}
              src={commonIssue}
            />
            <div style={{ fontSize: "14px" }}>
              Common Issues with Care Giver
            </div>
          </div>
          <div
            className="handy-card"
            onClick={() =>
              navigate("/care-taker-member/handy-resource/backgound-check")
            }
          >
            <Image
              style={{ borderRadius: "12px", opacity: "0.7" }}
              preview={false}
              width={200}
              height={120}
              icon={<UserOutlined />}
              src={backgroundCheck}
            />
            <div style={{ fontSize: "14px" }}>Background checks</div>
          </div>
          <div
            className="handy-card"
            onClick={() =>
              navigate("/care-taker-member/handy-resource/gifted-child")
            }
          >
            <Image
              style={{ borderRadius: "12px", opacity: "0.7" }}
              preview={false}
              width={200}
              height={120}
              icon={<UserOutlined />}
              src={giftedChild}
            />
            <div style={{ fontSize: "14px" }}>Signs of Gifted Childs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandyCard;
