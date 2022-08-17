import React from "react";
import { Avatar, Tabs, Tooltip, Typography, Button, Image } from "antd";
import EditJob from "./EditJob";
import { useParams, useNavigate } from "react-router-dom";
import Applicants from "./Applicants";
import Hired from "./Hired";
import "./JobTabs.css";
import { JobAPI, UserAPI } from "../../../api";

const { Title } = Typography;
const { TabPane } = Tabs;

const JobTabs = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [applicants, setApplicants] = React.useState([]);
  // const [hiredData, setHiredData] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [hired, setHired] = React.useState([]);
  const [hiredData, setHiredData] = React.useState([]);
  const user_id = JSON.parse(localStorage.getItem("user"))._id;

  React.useEffect(() => {
    JobAPI.getJob(jobId).then((res) => {
      setApplicants(res?.data?.data?.applicants);
      setHired(res?.data?.data?.hired);
      getFavorites(user_id);
      getHired(jobId);
    });
  }, []);

  const onHandleProfile = (id) => {
    navigate(`/visitor/profileData/${id}`);
    UserAPI.addView(user_id, { id }).then((res) => {
      console.log(res?.data?.data);
    });
  };

  const getFavorites = (id) => {
    UserAPI.getUser(id).then((res) => {
      console.log(res?.data?.data);
      setFavorite(res?.data?.data?.favorites);
    });
  };

  const getHired = (id) => {
    JobAPI.getHiredPeople(id).then((res) => {
      setHiredData(res?.data?.data?.hired);
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

  const hiredFun = (item) => {
    const hired_id = hired?.includes(item?._id);
    if (hired_id) {
      JobAPI.removeFromHire(item?._id, jobId).then((res) => {
        setHired(res?.data?.data?.hired);
        getHired(jobId);
      });
    } else {
      JobAPI.addToHire(item?._id, jobId).then((res) => {
        setHired(res?.data?.data?.hired);
        getHired(jobId);
      });
    }
  };

  const checkFav = (id) => {
    const check = favorite?.includes(id);
    if (check) return true;
    else return false;
  };

  const checkHired = (id) => {
    const check = hired?.includes(id);
    if (check) return true;
    else return false;
  };

  return (
    <>
      <div className="container-jt">
        <div className="main-jt">
          <Tabs
            style={{
              fontWeight: "500",
            }}
          >
            <TabPane tab="Edit Job" key="fav1">
              <EditJob jobId={jobId} />
            </TabPane>
            <TabPane tab={`Applicant (${applicants?.length})`} key="fav2">
              <Applicants
                data={applicants}
                favorite={favorite}
                setFavorite={setFavorite}
                hired={hired}
                setHired={setHired}
                favoriteFun={favoriteFun}
                hiredFun={hiredFun}
                checkFav={checkFav}
                checkHired={checkHired}
                onHandleProfile={onHandleProfile}
              />
            </TabPane>
            <TabPane tab={`Hired (${hired?.length})`} key="fav4">
              <Hired
                favorite={favorite}
                setFavorite={setFavorite}
                hired={hired}
                hiredData={hiredData}
                setHired={setHired}
                favoriteFun={favoriteFun}
                hiredFun={hiredFun}
                checkFav={checkFav}
                checkHired={checkHired}
                onHandleProfile={onHandleProfile}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default JobTabs;
