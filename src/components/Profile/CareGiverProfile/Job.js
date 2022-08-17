import React from "react";
import { Avatar, Rate, Result, Tabs } from "antd";
import Icon, { HomeOutlined } from "@ant-design/icons";
import { HeartOutlined, UserOutlined } from "@ant-design/icons";
import { JobAPI, UserAPI } from "../../../api";
import ReactTimeAgo from "react-time-ago";
import { useNavigate } from "react-router-dom";

import FilterBar from "./FilterBar";

const { TabPane } = Tabs;

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

const Job = () => {
  const [jobs, setJobs] = React.useState([]);
  const [duplicateData, setDuplicateData] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [favData, setFavData] = React.useState([]);
  const navigate = useNavigate();
  const user_id = JSON.parse(localStorage.getItem("user"))._id;

  React.useEffect(() => {
    UserAPI.getUser(user_id).then((res) => {
      JobAPI.getServiceJobs(res?.data?.data?.service).then((res) => {
        setJobs(res.data?.data.reverse());
        setDuplicateData(res?.data?.data?.reverse());
      });
    });
    getFavorites(user_id);
    getFavoriteData(user_id);
  }, []);

  const getFavorites = (id) => {
    UserAPI.getUser(id).then((res) => {
      setFavorite(res?.data?.data?.favoriteJobs);
    });
  };

  const getFavoriteData = (id) => {
    JobAPI.getFavorites(id).then((res) => {
      setFavData(res?.data?.data?.favoriteJobs);
    });
  };

  const favoriteFun = (item) => {
    console.log(typeof favorite, "type");
    const fav_id = favorite?.includes(item?._id);
    if (fav_id) {
      JobAPI.removeFavorite(user_id, item?._id).then((res) => {
        console.log(favData);
        setFavorite(res?.data?.data?.favoriteJobs);
        setFavData(favData.filter((elem) => elem._id !== item?._id));
      });
    } else {
      JobAPI.addFavorite(user_id, item?._id).then((res) => {
        console.log(favData);
        setFavorite(res?.data?.data?.favoriteJobs);
        setFavData([...favData, item]);
      });
    }
  };

  const checkFav = (id) => {
    const check = favorite.includes(id);
    if (check) return true;
    else return false;
  };

  return (
    <>
      <div>
        <Tabs
          style={{
            fontWeight: "500",
          }}
        >
          <TabPane tab="Jobs" key="fav1">
            <FilterBar data={duplicateData} setData={setJobs} />
            <div className="jobs-caregiver">
              {jobs?.length > 0 ? (
                jobs?.map((item) => {
                  return (
                    <>
                      <div className="job-card-caregiver">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="job-title-caregiver">
                            {item?.jobTitle}
                          </div>
                          <div>
                            <ReactTimeAgo
                              date={item?.created_at}
                              locale="en-US"
                            />
                            <HeartIcon
                              style={{
                                color: checkFav(item?._id) ? "#E3319D" : "",
                                opacity: checkFav(item?._id) ? 1 : 0.3,
                                marginLeft: "5px",
                              }}
                              onClick={() => favoriteFun(item)}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            className="job-view-apply"
                            onClick={() =>
                              navigate(
                                `/care-giver-profile/job-detail/${item?._id}`
                              )
                            }
                          >
                            View or Apply
                          </div>
                          <div>Applicants ({item?.applicants.length})</div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <Result title="No Data Available" />
                </div>
              )}
            </div>
          </TabPane>
          <TabPane tab="Favorites" key="fav2">
            <div className="jobs-caregiver">
              {favData?.length > 0 ? (
                favData?.map((item) => {
                  return (
                    <>
                      <div className="job-card-caregiver">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="job-title-caregiver">
                            {item?.jobTitle}
                          </div>
                          <div>
                            <ReactTimeAgo
                              date={item?.created_at}
                              locale="en-US"
                            />
                            <HeartIcon
                              style={{
                                color: checkFav(item?._id) ? "#E3319D" : "",
                                opacity: checkFav(item?._id) ? 1 : 0.3,
                                marginLeft: "5px",
                              }}
                              onClick={() => favoriteFun(item)}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            className="job-view-apply"
                            onClick={() =>
                              navigate(
                                `/care-giver-profile/job-detail/${item?._id}`
                              )
                            }
                          >
                            View or Apply
                          </div>
                          <div>Applicants ({item?.applicants.length})</div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <Result title="No Data Available" />
                </div>
              )}
            </div>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Job;
