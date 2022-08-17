import { Avatar, Tabs, Tooltip, Typography, Button } from "antd";
import React from "react";
import Cards from "./Cards";
import FavCards from "./FavCards";
import Viewed from "./Viewed";
import { UserAPI } from "../../api";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import {
  AntDesignOutlined,
  SafetyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import HandyCard from "./HandyCard";
import JobCard from "./JobCard";
import "antd/dist/antd.css";

import useWindowDimensions from "../utils/GetWindowDimension";

const { Title } = Typography;
const { TabPane } = Tabs;

const Home = () => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const [state, setState] = React.useState([]);
  const [favData, setFavData] = React.useState([]);
  const [viewData, setViewData] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const user_id = JSON.parse(localStorage.getItem("user"))._id;

  React.useEffect(() => {
    console.log("width", width);
  }, [width]);

  React.useEffect(() => {
    UserAPI.getUser(user_id).then((res) => {
      UserAPI.getBestMatch(res?.data?.data?.service).then((res) => {
        setState(res?.data?.data);
      });
    });
    getFavorites(user_id);
    getFavoriteData(user_id);
    getView(user_id);
  }, []);

  const getFavorites = (id) => {
    UserAPI.getUser(id).then((res) => {
      console.log(res?.data?.data);
      setFavorite(res?.data?.data?.favorites);
      setViewData(res?.data?.data?.viewed);
    });
  };

  const getView = (id) => {
    UserAPI.getView(id).then((res) => {
      setViewData(res?.data?.data?.viewed);
    });
  };

  const getFavoriteData = (id) => {
    UserAPI.getFavorites(id).then((res) => {
      debugger;
      setFavData(res?.data?.data?.favorites);
    });
  };

  const favoriteFun = (item) => {
    const fav_id = favorite?.includes(item?._id);
    if (fav_id) {
      UserAPI.removeFavorite(user_id, { id: item?._id }).then((res) => {
        console.log(favData);
        setFavorite(res?.data?.data?.favorites);
        setFavData(favData.filter((elem) => elem._id !== item?._id));
      });
    } else {
      UserAPI.addFavorite(user_id, { id: item?._id }).then((res) => {
        console.log(favData);
        setFavorite(res?.data?.data?.favorites);
        setFavData([...favData, item]);
      });
    }
  };

  const checkFav = (id) => {
    const check = favorite.includes(id);
    if (check) return true;
    else return false;
  };

  const onHandleProfile = (id) => {
    navigate(`/visitor/profileData/${id}`);
    UserAPI.addView(user_id, { id }).then((res) => {
      console.log(res?.data?.data);
    });
  };

  return (
    <>
      <div className="container-ct">
        <div className="parent-ct">
          <div className="main-ct">
            <div className="section-1-ct">
              <Tabs
                tabPosition={width < 650 ? "left" : "top"}
                style={{
                  marginBottom: 32,
                  fontWeight: "500",
                }}
              >
                <TabPane tab="Best Match" key="fav1">
                  <Cards
                    data={state}
                    favoriteFun={favoriteFun}
                    checkFav={checkFav}
                    onHandleProfile={onHandleProfile}
                  />
                </TabPane>
                <TabPane tab="Viewed" key="fav2">
                  <Viewed
                    data={viewData}
                    favoriteFun={favoriteFun}
                    checkFav={checkFav}
                    onHandleProfile={onHandleProfile}
                  />
                </TabPane>
                <TabPane tab={`Favorites(${favData?.length})`} key="fav3">
                  <FavCards
                    data={favData}
                    favoriteFun={favoriteFun}
                    checkFav={checkFav}
                    onHandleProfile={onHandleProfile}
                  />
                </TabPane>
              </Tabs>
            </div>
            <div className="section-2-ct">
              <div className="post-job-section">
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  My Job Post
                </div>
                <div className="job-post">
                  <div style={{ fontSize: "18px", fontWeight: "500" }}>
                    Yay! You have new applicants.
                  </div>
                  <Avatar.Group
                    maxCount={2}
                    maxPopoverTrigger="click"
                    size="large"
                    maxStyle={{
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                      cursor: "pointer",
                    }}
                  >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Avatar
                      style={{
                        backgroundColor: "#f56a00",
                      }}
                    >
                      K
                    </Avatar>
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{
                          backgroundColor: "#87d068",
                        }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <Avatar
                      style={{
                        backgroundColor: "#1890ff",
                      }}
                      icon={<AntDesignOutlined />}
                    />
                  </Avatar.Group>
                  <Button type="primary" shape="circle">
                    View Applications
                  </Button>
                </div>
              </div>
              <div className="book-sitter-section">
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Book a Sitter
                </div>
                <div className="book-sitter">
                  <div className="avatar-book-sitter">
                    <Avatar
                      className="img-book-sitter"
                      style={{
                        backgroundColor: "#87d068",
                      }}
                      icon={<UserOutlined />}
                    />
                    <Avatar
                      className="img-book-sitter"
                      style={{
                        backgroundColor: "#87d068",
                      }}
                      icon={<UserOutlined />}
                    />
                    <Avatar
                      className="img-book-sitter"
                      style={{
                        backgroundColor: "#87d068",
                      }}
                      icon={<UserOutlined />}
                    />
                    <Avatar
                      className="img-book-sitter"
                      style={{
                        backgroundColor: "#87d068",
                      }}
                      icon={<UserOutlined />}
                    />
                  </div>

                  <div className="wrap-book-sitter">
                    <div style={{ fontSize: "16px", fontWeight: "500" }}>
                      Planning a date night? Need a backup sitter?
                    </div>

                    <Button type="primary" shape="circle">
                      Book a Sitter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="handy-main">
            <HandyCard />
          </div>
          <div className="job-card-main">
            <JobCard />
          </div>

          <div className="saftey-comes-first">
            <div className="saftey-main">
              <div className="saftey-icon">
                <SafetyOutlined
                  style={{
                    background: "white",
                    border: "1px solid rgb(189, 189, 189)",
                    padding: "5px",
                    borderRadius: "40px",
                    color: "green",
                  }}
                />
              </div>
              <div className="safety-title">
                We <span style={{ color: "#C11B17" }}>Believe</span> in Keeping
                You <span style={{ color: "green" }}>Safe</span>
              </div>
              <br />
              <div className="saftey-description">
                <p>
                  All caregivers go through CareCheck, the annual background
                  check in our screening process.
                </p>
                <p>
                  CareCheck is the first step in hiring safely. Visit the Safety
                  Center to learn more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
