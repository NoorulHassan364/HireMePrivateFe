import React from "react";
import {
  Avatar,
  Tabs,
  Tooltip,
  Typography,
  Button,
  Image,
  Result,
  Switch,
  // Divider,
} from "antd";
import "./ViewJob.css";
import Divider from "antd/lib/divider";
import { useNavigate } from "react-router-dom";
import { JobAPI } from "../../../api";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Swal from "sweetalert2";
import ReactTimeAgo from "react-time-ago";

const { Title } = Typography;
const { TabPane } = Tabs;

const ViewJob = () => {
  const user_id = JSON.parse(localStorage.getItem("user"))._id;
  const [jobCards, setJobCards] = React.useState([]);
  const [isActive, setActive] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    handleGetJobs(user_id);
  }, []);

  const handleGetJobs = () => {
    JobAPI.getJobs(user_id).then((res) => {
      setJobCards(res?.data?.data.reverse());
    });
  };

  const onHandleDeleteJob = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this job",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        JobAPI.deleteJob(id).then((res) => {
          if (res.status == 200) {
            handleGetJobs(user_id);
          }
        });
      }
    });
  };

  const onHandleActive = (e, id) => {
    setActive(true);
    console.log(e, id);
    JobAPI.activeToogle(id, e).then((res) => {
      if (res?.status == 200) {
        handleGetJobs(user_id);
      }
      setActive(false);
    });
  };

  return (
    <>
      <div className="container-vj">
        <div className="main-vj">
          <Title level={3}>Post Jobs</Title>
          <div className="cards-vj">
            {jobCards?.length > 0 ? (
              jobCards?.map((item) => {
                return (
                  <>
                    <div className="single-card-vj">
                      <div className="title-applicants-vj">
                        <div className="job-title-vj">{item?.jobTitle}</div>
                        <div style={{ display: "flex" }}>
                          <div className="post-job-time">
                            <ReactTimeAgo
                              date={item?.created_at}
                              locale="en-US"
                            />
                          </div>
                          <AiFillDelete
                            onClick={() => onHandleDeleteJob(item?._id)}
                            style={{
                              marginTop: "3px",
                              marginLeft: "8px",
                              color: "#E41B17",
                              fontSize: "18px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="view-edit-vj">
                          <AiFillEye
                            onClick={() =>
                              navigate(
                                `/care-taker-member/job-tabs/${item?._id}`
                              )
                            }
                            style={{
                              fontSize: "20px",
                              color: "#22315a",
                              cursor: "pointer",
                            }}
                          />
                          <Switch
                            size="small"
                            checked={item?.isActive}
                            checkedChildren="Active"
                            unCheckedChildren="In Active"
                            onChange={(e) => onHandleActive(e, item?._id)}
                          />
                        </div>
                        <div className="job-applicants-vj">
                          Applicants ({item?.applicants.length})
                        </div>
                      </div>
                      <Divider />
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
        </div>
      </div>
    </>
  );
};

export default ViewJob;
