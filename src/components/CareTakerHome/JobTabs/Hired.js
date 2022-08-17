import React from "react";
import { Avatar, Rate, Result, Tooltip } from "antd";
import Icon, { HomeOutlined } from "@ant-design/icons";
import { HeartOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { UserAPI, JobAPI } from "../../../api";

import "./Hired.css";

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

const Hired = ({
  data,
  favorite,
  setFavorite,
  hired,
  hiredData,
  setHired,
  favoriteFun,
  hiredFun,
  checkFav,
  checkHired,
  onHandleProfile,
}) => {
  const { jobId } = useParams();
  const user_id = JSON.parse(localStorage.getItem("user"))._id;

  return (
    <div className="card-main-vf">
      {hiredData?.length > 0 ? (
        <>
          {hiredData?.map((item) => {
            return (
              <div
                className="care-card"
                onClick={() => onHandleProfile(item?._id)}
              >
                <div className="img-icons-app">
                  <Avatar
                    shape="square"
                    size={120}
                    icon={<UserOutlined />}
                    src={item?.profileImg}
                    style={{
                      borderRadius: "9px",
                      border: "1px solid #cfcfcf",
                    }}
                  />
                  <Tooltip
                    title={
                      checkFav(item?._id) ? "Remove Favorite" : "Add Favorite"
                    }
                  >
                    <HeartIcon
                      className="fav-icon-app"
                      style={{
                        color: checkFav(item?._id) ? "#E3319D" : "",
                        opacity: checkFav(item?._id) ? 1 : 0.3,
                      }}
                      onClick={(e) => {
                        favoriteFun(item);
                        e.stopPropagation();
                      }}
                    />
                  </Tooltip>
                  <Tooltip
                    title={
                      checkHired(item?._id) ? "Remove to Hire" : "Add to Hire"
                    }
                  >
                    <FontAwesomeIcon
                      icon={faHandshake}
                      className="hired-icon-app"
                      style={{
                        color: checkHired(item?._id) ? "blue" : "",
                        opacity: checkHired(item?._id) ? 1 : 0.3,
                      }}
                      onClick={(e) => {
                        hiredFun(item);
                        e.stopPropagation();
                      }}
                    />
                  </Tooltip>
                </div>
                <div>
                  <div className="care-taker-rate">
                    <Rate
                      defaultValue={4}
                      style={{ fontSize: "11px" }}
                      disabled
                    />
                  </div>
                  <div className="care-taker-name">{item?.name}</div>
                  <div className="care-taker-address">{item?.address}</div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            <Result title="No Data Available" />
          </div>
        </>
      )}
    </div>
  );
};

export default Hired;
