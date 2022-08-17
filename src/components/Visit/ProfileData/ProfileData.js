import React from "react";
import { Avatar, Image, Rate, Typography, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import "./ProfileData.css";
import { UserAPI } from "../../../api";
import {
  CheckCircleOutlined,
  FlagOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCalendarCheck,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import Icon, { HomeOutlined } from "@ant-design/icons";

const { Title } = Typography;

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

const ProfileData = ({ users }) => {
  const { id } = useParams();
  const [data, setData] = React.useState();
  const [relatedData, setRelatedData] = React.useState([]);
  const [state, setState] = React.useState(false);
  const [favorite, setFavorite] = React.useState([]);
  const navigate = useNavigate();
  const user_id = JSON.parse(localStorage.getItem("user"))?._id;

  React.useEffect(() => {
    console.log(id, "id");
    UserAPI.getUser(id).then((res) => {
      console.log(res?.data?.data);
      setData(res?.data?.data);
      UserAPI.getCareGiver(res?.data?.data?.service).then((res) => {
        console.log(res?.data?.data);
        // const result = res?.data?.data?.filter((item) => item._id != id);
        setRelatedData(res?.data?.data?.filter((item) => item._id != id));
      });
    });
    console.log(relatedData);
    if (user_id) {
      getFavorites(user_id);
    }
  }, [id]);

  const getFavorites = (id) => {
    UserAPI.getUser(id).then((res) => {
      console.log(res?.data?.data);
      setFavorite(res?.data?.data?.favorites);
    });
  };

  const favoriteFun = (item) => {
    const fav_id = favorite?.includes(item?._id);
    if (fav_id) {
      UserAPI.removeFavorite(user_id, { id: item?._id }).then((res) => {
        setFavorite(res?.data?.data?.favorites);
      });
    } else {
      UserAPI.addFavorite(user_id, { id: item?._id }).then((res) => {
        setFavorite(res?.data?.data?.favorites);
      });
    }
  };

  const checkFav = (id) => {
    const check = favorite?.includes(id);
    if (check) return true;
    else return false;
  };

  return (
    <>
      <div className="profile-data-container">
        <div className="profile-data-main">
          <div className="profile-data-1">
            <div className="profile-data-section-1">
              <div className="pic-address-pd">
                <Avatar
                  className="profile-avatar"
                  src={
                    <Image
                      src={data?.profileImg}
                      style={{ height: 100, width: 100 }}
                    />
                  }
                  size={100}
                />
                <div className="address-pd">{data?.address}</div>
              </div>
              <div className="profile-info">
                <div className="name-icons-pd">
                  <Title level={4} className="title-pd">
                    {data?.name}
                  </Title>
                  <div style={{ display: "flex", gap: 8, fontSize: "22px" }}>
                    <FlagOutlined />
                    {/* <HeartOutlined /> */}
                    <HeartIcon
                      // className="fav-icon"
                      style={{
                        color: checkFav(data?._id) ? "#E3319D" : "",
                        opacity: checkFav(data?._id) ? 1 : 0.3,
                      }}
                      onClick={() => favoriteFun(data)}
                    />
                  </div>
                </div>
                <div>{data?.education}</div>
                <div>{data?.bioTitle}</div>
                <div className="hourly-exp-Availabilty-pd">
                  <ul>
                    <li>{data?.experience} years exp</li>
                    <li>
                      {data?.weeklyHours[0]}hr-{data?.weeklyHours[1]}
                      hr/wk
                    </li>
                    <li>${data?.hourlyRate}/hr</li>
                    <li>In Morning</li>
                  </ul>
                </div>
                <div>
                  {data?.detailsAboutMe.length > 0 ? (
                    <>
                      {data?.detailsAboutMe.map((item) => {
                        return (
                          <div style={{ display: "flex", gap: 8 }}>
                            <CheckCircleOutlined style={{ fontSize: "20px" }} />
                            <div style={{ fontSize: "14px" }}>{item}</div>
                          </div>
                        );
                      })}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="can-help">
              <div>
                <Title level={4}>Experience</Title>
                <p>{data?.experience} years of experience</p>
              </div>
              <div>
                <Title level={4}>Can Help With</Title>
                {data?.selectedHelp?.map((item) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleOutlined style={{ fontSize: "20px" }} />
                      <div style={{ fontSize: "14px" }}>{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="service-pd">
              <Title level={4}>Service</Title>
              <div className="service-row">
                <div className="service-header">Service: </div>
                <div>{data?.service}</div>
              </div>
              <div className="service-row">
                <div className="service-header">Weekly Hours: </div>
                <div>
                  from {data?.weeklyHours[0]}h to {data?.weeklyHours[1]}h in a
                  week
                </div>
              </div>
              <div className="service-row">
                <div className="service-header">Hourly Rate: </div>
                <div>{data?.hourlyRate}$ per hour</div>
              </div>
              <div>
                <div className="service-header">Working Days in a week: </div>
                {data?.workingDays?.map((item) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          alignItems: "center",
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendarCheck} />
                        <div>{item}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="profile-data-education-section">
              <div>
                <Title level={4}>Education</Title>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                  {data?.education}
                </div>
              </div>
            </div>
            <div className="about-pd">
              <Title level={4}>About</Title>
              <div className="bio-description-pd">{data?.bioDescription}</div>
            </div>
          </div>
          <div className="profile-data-2">
            <div className="message-rate">
              <Rate disabled defaultValue={4} />
              <div>Responds within Hours</div>
              <Button
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  marginTop: "10px",
                  backgroundColor: "#b78361",
                  color: "white",
                }}
              >
                Message
              </Button>
            </div>
            <div className="related-data">
              <Title level={4}>People You May Know</Title>
              {relatedData?.map((item) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      cursor: "pointer",
                      padding: "5px 0px 5px 0px",
                    }}
                    onClick={() =>
                      navigate(`/visitor/profileData/${item?._id}`)
                    }
                  >
                    <Avatar src={item?.profileImg} size="large" />
                    <div>
                      <div style={{ fontWeight: "bold" }}>{item?.name}</div>
                      <div>{item?.address}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileData;
