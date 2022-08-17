import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TimeRange from "react-time-range";
import "./JobForm.css";
import TextArea from "antd/lib/input/TextArea";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Image,
  Layout,
  Typography,
  Select,
  Steps,
  message,
  Progress,
  Slider,
  Tag,
  Row,
  Radio,
  Space,
  Spin,
  Col,
  Avatar,
  DatePicker,
} from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import ErrorValidationMessage from "../../utils/ErrorValidationMessage";
import moment from "moment";
import {
  days,
  helping,
  childAges,
  pets,
  petServices,
  tutorSubjects,
  houseKeepingServices,
  seniorCareServices,
  errands,
  specialNeedsPerson,
  specialNeedsDiseases,
  specialNeedsServices,
  details,
} from "../../utils/Helper";
import { JobAPI } from "../../../api";

const { Title } = Typography;
const { CheckableTag } = Tag;
const { RangePicker } = DatePicker;

const JobForm = () => {
  const { service } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const user_id = JSON.parse(localStorage.getItem("user"))._id;
  const [isActive, setActive] = React.useState(false);

  const [state, setState] = React.useState({
    // weeklyHours: [40, 50],
    dateRange: [],
    startDate: "",
    endDate: "",
    timeRange: [],
    hourlyRate: 12,
    workingDays: [],
    selectedHelp: [],
    noOfChild: 1,
    childAges: [],
    pets: [],
    petServices: [],
    tutorSubjects: [],
    houseKeepingServices: [],
    seniorCareServices: [],
    errands: [],
    specialNeedsPerson: [],
    specialNeedsDiseases: [],
    specialNeedsServices: [],
    detailsAboutMe: [],
    experience: 1,
    education: "",
    jobTitle: "",
    jobDescription: "",
    photo: "",
  });

  const [fieldError, setFieldError] = React.useState({
    // weeklyHours: false,
    dateRange: false,
    startDate: false,
    endDate: false,
    timeRange: false,
    hourlyRate: false,
    workingDays: false,
    selectedHelp: false,
    noOfChild: false,
    childAges: false,
    pets: false,
    petServices: false,
    tutorSubjects: false,
    houseKeepingServices: false,
    seniorCareServices: false,
    errands: false,
    specialNeedsPerson: false,
    specialNeedsDiseases: false,
    specialNeedsServices: false,
    detailsAboutMe: false,
    experience: false,
    education: false,
    jobTitle: false,
    jobDescription: false,
    photo: false,
  });

  React.useEffect(() => {
    console.log(service);
  }, []);

  const handleSubmit = (values) => {
    if (state?.childAges.length == 0 && service == "Nanny") {
      setFieldError({ ...fieldError, childAges: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (state?.pets.length == 0 && service == "Pet Care Provider") {
      setFieldError({ ...fieldError, pets: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.petServices.length == 0 &&
      service == "Pet Care Provider"
    ) {
      setFieldError({ ...fieldError, petServices: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (state?.tutorSubjects.length == 0 && service == "Tutor") {
      setFieldError({ ...fieldError, tutorSubjects: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.seniorCareServices.length == 0 &&
      service == "Senior Care Provider"
    ) {
      setFieldError({ ...fieldError, seniorCareServices: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.houseKeepingServices.length == 0 &&
      service == "HouseKeeper"
    ) {
      setFieldError({ ...fieldError, houseKeepingServices: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.specialNeedsPerson.length == 0 &&
      service == "Special Needs Provider"
    ) {
      setFieldError({ ...fieldError, specialNeedsPerson: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.specialNeedsServices.length == 0 &&
      service == "Special Needs Provider"
    ) {
      setFieldError({ ...fieldError, specialNeedsServices: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (state?.workingDays.length == 0) {
      setFieldError({ ...fieldError, workingDays: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (state?.startDate && state?.startDate > state?.endDate) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (state?.endDate && !state?.startDate) {
      setFieldError({ ...fieldError, startDate: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // alert(JSON.stringify(state));
      setActive(true);
      JobAPI.postJob(user_id, { service, user_id, ...state }).then((res) => {
        console.log(res.data);
        setActive(false);
        if (res?.status == 201) {
          navigate("/care-taker-member/view-jobs");
        }
      });
    }
  };

  const onHandleHourlyRate = (e) => {
    setState({ ...state, hourlyRate: e });
    console.log(e);
  };

  const onHandleDaysChange = (tag, checked) => {
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.workingDays, tag]
      : state?.workingDays.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, workingDays: nextSelectedTags });
  };

  const onDateRangeChange = (e) => {
    console.log("onDateRangeChange", e);
    let startDate = e[0];
    let endDate = e[1];
    setState({ ...state, dateRange: [startDate, endDate] });
  };

  const onHandleStartDate = (e) => {
    console.log(e.target.value, "start date");
    setState({ ...state, startDate: e.target.value });
  };

  const onHandleEndDate = (e) => {
    console.log(e.target.value, "end date");
    setState({ ...state, endDate: e.target.value });
    if (state?.startDate > e.target.value) {
      setFieldError({ ...fieldError, endDate: true });
      console.log("error");
    }
  };

  const onHandleTimeRange = (e) => {
    console.log("time", e);
    setState({ ...state, timeRange: [e.startTime, e.endTime] });
  };

  const onHandleHelpChange = (tag, checked) => {
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.selectedHelp, tag]
      : state?.selectedHelp.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTagsHelp(nextSelectedTags);
    setState({ ...state, selectedHelp: nextSelectedTags });
  };

  const onHandleDetailChange = (tag, checked) => {
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.detailsAboutMe, tag]
      : state?.detailsAboutMe.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setState({ ...state, detailsAboutMe: nextSelectedTags });
  };

  const onChildAgeCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, childAge: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.childAges, tag]
      : state?.childAges.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, childAges: nextSelectedTags });
  };

  const onPetsCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, pets: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.pets, tag]
      : state?.pets.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, pets: nextSelectedTags });
  };

  const onPetServiceCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, pets: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.petServices, tag]
      : state?.petServices.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, petServices: nextSelectedTags });
  };

  const onTutorSubjectsCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, tutorSubjects: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.tutorSubjects, tag]
      : state?.tutorSubjects.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, tutorSubjects: nextSelectedTags });
  };

  const onHouseKeepingCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, houseKeepingServices: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.houseKeepingServices, tag]
      : state?.houseKeepingServices.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, houseKeepingServices: nextSelectedTags });
  };

  const onSeniorCareServicesCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, seniorCareServices: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.seniorCareServices, tag]
      : state?.seniorCareServices.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, seniorCareServices: nextSelectedTags });
  };

  const onSpecialNeedsPersonCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, specialNeedsPerson: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.specialNeedsPerson, tag]
      : state?.specialNeedsPerson.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, specialNeedsPerson: nextSelectedTags });
  };

  const onSpecialNeedsDiseasesCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, specialNeedsDiseases: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.specialNeedsDiseases, tag]
      : state?.specialNeedsDiseases.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, specialNeedsDiseases: nextSelectedTags });
  };

  const onSpecialNeedsServicesCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, specialNeedsServices: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.specialNeedsServices, tag]
      : state?.specialNeedsServices.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, specialNeedsServices: nextSelectedTags });
  };

  return (
    <>
      <div className="container-pjf">
        <div className="main-pjf">
          <div style={{ textAlign: "center" }}>
            <Title level={3}>Post Job for {service} </Title>
          </div>
          <div className="job-form-pjf">
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              onFinish={handleSubmit}
              style={{ padding: "10px" }}
            >
              <Form.Item
                name="jobTitle"
                style={{ marginTop: "19px", fontWeight: "bold" }}
                onChange={(e) =>
                  setState({ ...state, jobTitle: e.target.value })
                }
                rules={[
                  {
                    required: true,
                    message: "required",
                  },

                  {
                    max: 50,
                    message: "maximum 50 characters allowed",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Job Title"
                  size="large"
                  autoComplete="off"
                />
              </Form.Item>
              {service == "Nanny" ? (
                <>
                  <Form.Item
                    name="noOfChilds"
                    label="How many childs needs care:"
                    style={{
                      marginTop: "19px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    <PlusOutlined
                      style={
                        state?.noOfChild == 10
                          ? { pointerEvents: "none" }
                          : { cursor: "pointer" }
                      }
                      onClick={() =>
                        setState({ ...state, noOfChild: state?.noOfChild + 1 })
                      }
                    />
                    <div style={{ margin: "10px 10px 10px 10px" }}>
                      {`${state?.noOfChild}` > 1
                        ? `${state?.noOfChild} Children`
                        : `${state?.noOfChild} Child`}
                    </div>
                    <MinusOutlined
                      style={
                        state.noOfChild == 1
                          ? { pointerEvents: "none" }
                          : { cursor: "pointer" }
                      }
                      onClick={() =>
                        setState({ ...state, noOfChild: state.noOfChild - 1 })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="childAge"
                    label="Select an age range:"
                    style={{
                      marginTop: "19px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {childAges.map((tag) => (
                      <CheckableTag
                        style={{
                          border: "1px solid gray",
                          margin: "10px",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                        key={tag}
                        checked={state?.childAges?.indexOf(tag) > -1}
                        onChange={(checked) => onChildAgeCheck(tag, checked)}
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                    <ErrorValidationMessage
                      message="Please check at-least one"
                      show={
                        fieldError?.childAges && state?.childAges.length == 0
                      }
                    />
                  </Form.Item>
                </>
              ) : null}

              {service == "Pet Care Provider" ? (
                <>
                  <Form.Item
                    name="pets"
                    label="I'm comfortable with:"
                    style={{
                      marginTop: "19px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {pets.map((tag) => (
                      <CheckableTag
                        style={{
                          border: "1px solid gray",
                          margin: "10px",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                        key={tag}
                        checked={state?.pets.indexOf(tag) > -1}
                        onChange={(checked) => onPetsCheck(tag, checked)}
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                    <ErrorValidationMessage
                      message="Please check at-least one"
                      show={fieldError?.pets && state?.pets?.length == 0}
                    />
                  </Form.Item>
                  <Form.Item
                    name="petServices"
                    label="Service You need:"
                    style={{
                      marginTop: "19px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {petServices.map((tag) => (
                      <CheckableTag
                        style={{
                          border: "1px solid gray",
                          margin: "10px",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                        key={tag}
                        checked={state?.petServices.indexOf(tag) > -1}
                        onChange={(checked) => onPetServiceCheck(tag, checked)}
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                    <ErrorValidationMessage
                      message="Please check at-least one"
                      show={
                        fieldError?.petServices &&
                        state?.petServices?.length == 0
                      }
                    />
                  </Form.Item>
                </>
              ) : null}

              {service == "Tutor" ? (
                <Form.Item
                  name="tutorSubjects"
                  label="Tutor Subjects:"
                  style={{
                    marginTop: "19px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {tutorSubjects.map((tag) => (
                    <CheckableTag
                      style={{
                        border: "1px solid gray",
                        margin: "10px",
                        padding: "5px",
                        borderRadius: "10px",
                      }}
                      key={tag}
                      checked={state?.tutorSubjects.indexOf(tag) > -1}
                      onChange={(checked) => onTutorSubjectsCheck(tag, checked)}
                    >
                      {tag}
                    </CheckableTag>
                  ))}
                  <ErrorValidationMessage
                    message="Please check at-least one"
                    show={
                      fieldError?.tutorSubjects &&
                      state?.tutorSubjects?.length == 0
                    }
                  />
                </Form.Item>
              ) : null}

              {service == "HouseKeeper" ? (
                <Form.Item
                  name="houseKeepingServices"
                  label="House Keeping Services:"
                  style={{
                    marginTop: "19px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {houseKeepingServices.map((tag) => (
                    <CheckableTag
                      style={{
                        border: "1px solid gray",
                        margin: "10px",
                        padding: "5px",
                        borderRadius: "10px",
                      }}
                      key={tag}
                      checked={state?.houseKeepingServices.indexOf(tag) > -1}
                      onChange={(checked) => onHouseKeepingCheck(tag, checked)}
                    >
                      {tag}
                    </CheckableTag>
                  ))}
                  <ErrorValidationMessage
                    message="Please check at-least one"
                    show={
                      fieldError?.houseKeepingServices &&
                      state?.houseKeepingServices?.length == 0
                    }
                  />
                </Form.Item>
              ) : null}

              {service == "Senior Care Provider" ? (
                <Form.Item
                  name="seniorCareServices"
                  label="Senior Care Services:"
                  style={{
                    marginTop: "19px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {seniorCareServices.map((tag) => (
                    <CheckableTag
                      style={{
                        border: "1px solid gray",
                        margin: "10px",
                        padding: "5px",
                        borderRadius: "10px",
                      }}
                      key={tag}
                      checked={state?.seniorCareServices.indexOf(tag) > -1}
                      onChange={(checked) =>
                        onSeniorCareServicesCheck(tag, checked)
                      }
                    >
                      {tag}
                    </CheckableTag>
                  ))}
                  <ErrorValidationMessage
                    message="Please check at-least one"
                    show={
                      fieldError?.seniorCareServices &&
                      state?.seniorCareServices?.length == 0
                    }
                  />
                </Form.Item>
              ) : null}

              {service == "Special Needs Provider" ? (
                <>
                  <Form.Item
                    name="specialNeedsPerson"
                    label="special Needs For:"
                    style={{
                      marginTop: "19px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {specialNeedsPerson.map((tag) => (
                      <CheckableTag
                        style={{
                          border: "1px solid gray",
                          margin: "10px",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                        key={tag}
                        checked={state?.specialNeedsPerson.indexOf(tag) > -1}
                        onChange={(checked) =>
                          onSpecialNeedsPersonCheck(tag, checked)
                        }
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                    <ErrorValidationMessage
                      message="Please check at-least one"
                      show={
                        fieldError?.specialNeedsPerson &&
                        state?.specialNeedsPerson?.length == 0
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="specialNeedsDiseases"
                    label="Select Diseases (optional):"
                    style={{
                      marginTop: "19px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {specialNeedsDiseases.map((tag) => (
                      <CheckableTag
                        style={{
                          border: "1px solid gray",
                          margin: "10px",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                        key={tag}
                        checked={state?.specialNeedsDiseases.indexOf(tag) > -1}
                        onChange={(checked) =>
                          onSpecialNeedsDiseasesCheck(tag, checked)
                        }
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                    <ErrorValidationMessage
                      message="Please check at-least one"
                      show={
                        fieldError?.specialNeedsDiseases &&
                        state?.specialNeedsDiseases?.length == 0
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="specialNeedsServices"
                    label="Services you need:"
                    style={{
                      marginTop: "19px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {specialNeedsServices.map((tag) => (
                      <CheckableTag
                        style={{
                          border: "1px solid gray",
                          margin: "10px",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                        key={tag}
                        checked={state?.specialNeedsServices.indexOf(tag) > -1}
                        onChange={(checked) =>
                          onSpecialNeedsServicesCheck(tag, checked)
                        }
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                    <ErrorValidationMessage
                      message="Please check at-least one"
                      show={
                        fieldError?.specialNeedsServices &&
                        state?.specialNeedsServices?.length == 0
                      }
                    />
                  </Form.Item>
                </>
              ) : null}

              <Form.Item
                name="hourlyRate"
                label="What would you like to pay?"
                style={{
                  marginTop: "19px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <Slider
                  defaultValue={state?.hourlyRate}
                  max={40}
                  step={1}
                  min={5}
                  tooltipPlacement="left"
                  // tooltipVisible={true}
                  onChange={onHandleHourlyRate}
                  // tipFormatter="$"
                />
                {state?.hourlyRate}$ per hour
              </Form.Item>
              <Form.Item
                name="workingDays"
                label="In which days you need care:"
                style={{
                  marginTop: "19px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {days.map((tag) => (
                  <CheckableTag
                    style={{
                      border: "1px solid gray",
                      margin: "10px",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    key={tag}
                    checked={state?.workingDays.indexOf(tag) > -1}
                    // checked={state?.workingDays.find((elem) => elem == tag)}
                    onChange={(checked) => onHandleDaysChange(tag, checked)}
                    color="green"
                  >
                    {tag}
                  </CheckableTag>
                ))}
                <ErrorValidationMessage
                  message="Please check at-least one"
                  show={
                    fieldError?.workingDays && state?.workingDays.length == 0
                  }
                />
              </Form.Item>
              <Form.Item
                name="dateRange"
                style={{
                  marginTop: "19px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <div>
                  <label>Start Date: </label>
                  <input
                    type="date"
                    onChange={onHandleStartDate}
                    style={{
                      padding: "4px",
                      marginBottom: "12px",
                    }}
                  />
                </div>
                <ErrorValidationMessage
                  message="please enter the start date!"
                  show={
                    fieldError?.startDate && state?.endDate && !state?.startDate
                  }
                />
                <div>
                  <label>End Date: </label>
                  <input
                    type="date"
                    onChange={onHandleEndDate}
                    style={{
                      padding: "4px",
                      marginTop: "12px",
                    }}
                  />
                </div>
                <ErrorValidationMessage
                  message="The end date cannot be before the start date"
                  show={
                    fieldError?.endDate && state?.startDate > state?.endDate
                  }
                />
              </Form.Item>
              <Form.Item
                name="timeRange"
                label="In Which time You need care:"
                style={{
                  marginTop: "19px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <TimeRange
                  onChange={onHandleTimeRange}
                  startMoment={state?.timeRange[0]}
                  endMoment={state?.timeRange[1]}
                />
              </Form.Item>
              {service == "Nanny" ||
              service == "Pet Care Provider" ||
              service == "Senior Care Provider" ||
              service == "Special Needs Provider" ? (
                <Form.Item
                  name="selectedHelp"
                  label="What do you need help with? (optional)"
                  style={{
                    marginTop: "19px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {helping.map((tag) => (
                    <CheckableTag
                      style={{
                        border: "1px solid gray",
                        margin: "10px",
                        padding: "5px",
                        borderRadius: "10px",
                      }}
                      key={tag}
                      checked={state?.selectedHelp.indexOf(tag) > -1}
                      onChange={(checked) => onHandleHelpChange(tag, checked)}
                      color="green"
                    >
                      {tag}
                    </CheckableTag>
                  ))}
                </Form.Item>
              ) : null}
              <Form.Item
                name="detailsAboutMe"
                label="Your ideal caregiver qualities: (optional)"
                style={{
                  marginTop: "19px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {details.map((tag) => (
                  <CheckableTag
                    style={{
                      border: "1px solid gray",
                      margin: "10px",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    key={tag}
                    checked={state?.detailsAboutMe.indexOf(tag) > -1}
                    onChange={(checked) => onHandleDetailChange(tag, checked)}
                    color="green"
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </Form.Item>
              <Form.Item
                name="jobDescription"
                label="Job Description: (optional)"
                style={{ marginTop: "19px", fontWeight: "bold" }}
                onChange={(e) =>
                  setState({ ...state, jobDescription: e.target.value })
                }
              >
                <TextArea
                  placeholder="Description"
                  autoComplete="off"
                  rows={4}
                  defaultValue={state?.jobDescription}
                />
              </Form.Item>
              <Form.Item style={{ textAlign: "center" }}>
                {isActive ? (
                  <Button
                    htmlType="submit"
                    type="primary"
                    style={{
                      backgroundColor: "#e9e9e9",
                      color: "white",
                      width: "40%",
                      borderRadius: "15px",
                      border: "none",
                    }}
                  >
                    <Spin />
                  </Button>
                ) : (
                  <Button
                    htmlType="submit"
                    type="primary"
                    style={{
                      backgroundColor: "brown",
                      color: "white",
                      width: "40%",
                      borderRadius: "15px",
                      border: "none",
                    }}
                  >
                    Submit
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobForm;
