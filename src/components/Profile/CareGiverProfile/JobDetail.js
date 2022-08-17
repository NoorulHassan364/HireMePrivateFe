import React from "react";
import { Avatar, Rate, Result, Tabs, Typography, Button } from "antd";
import Icon, { HomeOutlined } from "@ant-design/icons";
import { HeartOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { JobAPI, UserAPI } from "../../../api";
import Swal from "sweetalert2";
import TimeRange from "react-time-range";
import moment from "moment";

import { GrServices } from "react-icons/gr";

import "./JobDetail.css";

const { TabPane } = Tabs;
const { Title } = Typography;

const JobDetail = () => {
  const user_id = JSON.parse(localStorage.getItem("user"))._id;
  const { jobId } = useParams();
  // const [applied, setApplied] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());

  const checkIsApplied = () => {
    debugger;
    console.log(typeof data?.applicants[0], "type");
    if (typeof data?.applicants[0] == "string") {
      return data?.applicants?.includes(user_id);
    } else {
      return data?.applicants?.find((elem) => elem?._id == user_id);
    }
  };

  const getJobDetail = () => {
    JobAPI.getJob(jobId).then((res) => {
      setData(res?.data?.data);
      setStartTime(new Date(res?.data?.data?.timeRange[0]));
      setEndTime(new Date(res?.data?.data?.timeRange[1]));
      // startTime = new Date(`${res?.data?.data?.timeRange[0]}`);
      // endTime = new Date(`${res?.data?.data?.timeRange[1]}`);
      // console.log(res?.data?.data)
    });
  };

  const onHandleApply = (jobId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to apply for this job",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, apply!",
    }).then((result) => {
      if (result.isConfirmed) {
        JobAPI.applyJob(user_id, jobId).then((res) => {
          setData(res?.data?.data);
        });
      }
    });
  };

  React.useEffect(() => {
    getJobDetail();
  }, []);

  return (
    <>
      <div className="job-detail-container-jb">
        {data ? (
          <div className={`job-detail-main-jb`}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div className="job-title-job-detail">{data?.jobTitle}</div>

              <div className="job-applicant-job-detail">
                Applicants ({data?.applicants.length})
              </div>
            </div>
            {data?.jobDescription ? (
              <div
                className="job-description-job-detail"
                style={{ marginBottom: "10px" }}
              >
                {data?.jobDescription}
              </div>
            ) : null}
            {checkIsApplied() ? (
              <Button disabled>Application Submitted</Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "brown",
                  color: "white",
                  border: "none",
                }}
                onClick={() => onHandleApply(data?._id)}
              >
                Easy Apply
              </Button>
            )}
            <div className="job-services-job-detail">
              <div
                style={{
                  fontSize: "19px",
                  display: "flex",
                  marginBottom: "10px",
                }}
              >
                <GrServices style={{ marginTop: "6px" }} />
                <div style={{ marginLeft: "9px" }}>Requirements:</div>
              </div>
              <div className="job-detail-lists">
                <Title level={4}>
                  Hourly Rate:
                  <span style={{ color: "blue" }}> {data?.hourlyRate}$</span>
                </Title>

                {data?.startDate ? (
                  <div style={{ fontSize: "16px", fontWeight: "500" }}>
                    Start Date : {data?.startDate}
                  </div>
                ) : null}

                {data?.endDate ? (
                  <>
                    <div style={{ fontSize: "16px", fontWeight: "500" }}>
                      End Date : {data?.endDate}
                    </div>
                    <br />
                  </>
                ) : null}

                {data?.timeRange.length > 0 ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Timing:
                      <div
                        style={{
                          display: "flex",
                          gap: "7px",
                          marginLeft: "7px",
                        }}
                      >
                        <div>
                          {startTime?.toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </div>
                        to
                        <div>
                          {endTime?.toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </div>
                      </div>
                    </div>
                    <br />
                  </>
                ) : null}

                {data?.service == "Nanny" ? (
                  <>
                    <Title level={5}>Number of Childs: {data?.noOfChild}</Title>

                    <Title level={5}>Child Ages</Title>

                    <ul>
                      {data?.childAges?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}

                <Title level={5}>Availabilty </Title>
                <ul>
                  {data?.workingDays?.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>

                {data?.service == "Pet Care Provider" ? (
                  <>
                    <Title level={5}>Pets</Title>

                    <ul>
                      {data?.pets?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                    <Title level={5}>need Services</Title>

                    <ul>
                      {data?.petServices?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}
                {data?.service == "Tutor" ? (
                  <>
                    <Title level={5}>Subjects</Title>
                    <ul>
                      {data?.tutorSubjects?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}
                {data?.service == "Senior Care Provider" ? (
                  <>
                    <Title level={5}>Senior Care</Title>
                    <ul>
                      {data?.seniorCareServices?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}
                {data?.service == "HouseKeeper" ? (
                  <>
                    <Title level={5}>House Clean Services:</Title>
                    <ul>
                      {data?.houseKeepingServices?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}

                {data?.service == "Special Needs Provider" ? (
                  <>
                    <Title level={5}>special Needs Person</Title>
                    <ul>
                      {data?.specialNeedsPerson?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                    {data?.specialNeedsDiseases.length > 0 ? (
                      <>
                        <Title level={5}>Diseases</Title>
                        <ul>
                          {data?.specialNeedsDiseases?.map((item) => {
                            return <li>{item}</li>;
                          })}
                        </ul>
                      </>
                    ) : null}
                    <Title level={5}>Special Needs Services</Title>
                    <ul>
                      {data?.specialNeedsServices?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}

                {data?.selectedHelp.length > 0 ? (
                  <>
                    <Title level={5}>Should Also Help us with</Title>
                    <ul>
                      {data?.selectedHelp?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}

                {data?.detailsAboutMe.length > 0 ? (
                  <>
                    <Title level={5}>About Qualities</Title>
                    <ul>
                      {data?.detailsAboutMe?.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default JobDetail;
