import React from "react";
import "./BuildProfile.css";
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
  Upload,
} from "antd";
import {
  CameraOutlined,
  EditOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UserAPI } from "../../../../api";
import ErrorValidationMessage from "../../../utils/ErrorValidationMessage";
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
} from "../../../utils/Helper";

const { CheckableTag } = Tag;

const { Step } = Steps;
const { Title } = Typography;
const FormItem = Form.Item;
const { TextArea } = Input;

const BuildForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [data, setData] = React.useState();
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedTagsHelp, setSelectedTagsHelp] = React.useState([]);
  const [selectedTagsDetail, setSelectedTagDetail] = React.useState([]);
  const [image, setImage] = React.useState(undefined);
  const [file, setFile] = React.useState();
  const [isActive, setActive] = React.useState(false);
  const { id } = useParams();
  const [state, setState] = React.useState({
    weeklyHours: [40, 50],
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
    emergencyCase: true,
    bioTitle: "",
    bioDescription: "",
    photo: "",
  });

  const [fieldError, setFieldError] = React.useState({
    weeklyHours: false,
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
    bioTitle: false,
    bioDescription: false,
    photo: false,
  });

  React.useEffect(() => {
    UserAPI.getUser(id).then((res) => {
      setData(res?.data?.data);
    });
  }, []);

  const [current, setCurrent] = React.useState(0);
  const [percentage, setPercentage] = React.useState(0);

  const handleSubmit = (values) => {
    // alert(JSON.stringify(state));
    setActive(true);
    if (image !== undefined) {
      const formData = new FormData();

      for (const key in state) {
        if (Array.isArray(state[key])) {
          formData.append(key, state[key]);
        } else {
          formData.append(key, state[key]);
        }
      }

      formData.append("profileImg", image);
      console.log(image);
      // formData.workingDays = formData.weeklyDays.split(",");
      UserAPI.buildProfile(id, formData).then((res) => {
        if (res?.status == 200) {
          localStorage.setItem("user", JSON.stringify(res?.data?.data));
          navigate("/care-giver-profile");
        }
        setActive(false);
      });
      // setActive(true);
      // UserAPI.updateUser(user?._id, formData).then((res) => {
      //   if (res?.status === 200) {
      //     getUser(user?._id);
      //   }
      //   setActive(false);
      // });
    } else {
      // setActive(true);
      UserAPI.buildProfile(id, state).then((res) => {
        if (res?.status == 200) {
          localStorage.setItem("user", JSON.stringify(res?.data?.data));
          navigate("/care-giver-profile");
        }
        setActive(false);
      });
    }
  };

  const onHandleDaysChange = (tag, checked) => {
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
    setState({ ...state, workingDays: nextSelectedTags });
  };

  const onHandleHelpChange = (tag, checked) => {
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...selectedTagsHelp, tag]
      : selectedTagsHelp.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTagsHelp(nextSelectedTags);
    setState({ ...state, selectedHelp: nextSelectedTags });
  };

  const onHandleDetailChange = (tag, checked) => {
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...selectedTagsDetail, tag]
      : selectedTagsDetail.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTagDetail(nextSelectedTags);
    setState({ ...state, detailsAboutMe: nextSelectedTags });
  };

  const handleUpload = (event) => {
    setFile(URL.createObjectURL(event.file.originFileObj));
    setImage(event.file.originFileObj);
  };

  const next = () => {
    if (current == 1) {
      if (state?.workingDays.length == 0) {
        setFieldError({ ...fieldError, workingDays: true });
      } else {
        setCurrent(current + 1);
        setPercentage(percentage + 17);
      }
    } else if (current == 2) {
      if (state?.childAges.length == 0 && data?.service == "Nanny") {
        setFieldError({ ...fieldError, childAges: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        state?.pets.length == 0 &&
        data?.service == "Pet Care Provider"
      ) {
        setFieldError({ ...fieldError, pets: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        state?.petServices.length == 0 &&
        data?.service == "Pet Care Provider"
      ) {
        setFieldError({ ...fieldError, petServices: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (state?.tutorSubjects.length == 0 && data?.service == "Tutor") {
        setFieldError({ ...fieldError, tutorSubjects: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        state?.seniorCareServices.length == 0 &&
        data?.service == "Senior Care Provider"
      ) {
        setFieldError({ ...fieldError, seniorCareServices: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        state?.errands.length == 0 &&
        data?.service == "Errands & Odd Jobs Provider"
      ) {
        setFieldError({ ...fieldError, errands: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        state?.specialNeedsPerson.length == 0 &&
        data?.service == "Special Needs Provider"
      ) {
        setFieldError({ ...fieldError, specialNeedsPerson: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (state?.education == "") {
        setFieldError({ ...fieldError, education: true });
      } else {
        setCurrent(current + 1);
        setPercentage(percentage + 17);
      }
    } else {
      setCurrent(current + 1);
      setPercentage(percentage + 17);
    }
  };

  const prev = () => {
    // debugger;
    console.log(state);
    setCurrent(current - 1);
    setPercentage(percentage - 20);
    console.log(state);
  };

  const onHandleWeeklyHours = (e) => {
    let from = e[0] ? e[0] : "";
    let to = e[1] ? e[1] : "";
    // console.log(e);
    setState({ ...state, weeklyHours: [from, to] });
  };

  const onHandleHourlyRate = (e) => {
    setState({ ...state, hourlyRate: e });
    // console.log(e);
  };

  const onChildageCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, childAges: checkedValues });
  };

  const onPetsCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, pets: checkedValues });
  };

  const onPetServiceCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, petServices: checkedValues });
  };

  const onTutorSubjectsCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, tutorSubjects: checkedValues });
  };

  const onHouseKeepingCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, houseKeepingServices: checkedValues });
  };

  const onSeniorCareServicesCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, seniorCareServices: checkedValues });
  };

  const onErrandsCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, errands: checkedValues });
  };

  const onSpecialNeedsPersonCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, specialNeedsPerson: checkedValues });
  };

  const onSpecialNeedsDiseasesCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, specialNeedsDiseases: checkedValues });
  };

  const onSpecialNeedsServicesCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setState({ ...state, specialNeedsServices: checkedValues });
  };

  const onHandleEmergency = (e) => {
    console.log(e);
    setState({ ...state, emergencyCase: e.target.value });
  };

  const onHandleEducation = (e) => {
    console.log("onHandleEducation = ", e.target.value);
    setState({ ...state, education: e.target.value });
  };

  const steps = [
    {
      title: "Schedule",
      content: (
        <>
          <Title level={4}>My schedule works best with:</Title>
          <Title level={5}> Work a regular, full, or part-time schedule.</Title>
          <Form.Item
            name="weeklyHours"
            label="Weekly Hours:"
            style={{ marginTop: "19px", fontWeight: "bold" }}
          >
            <Slider
              // tooltipVisible={true}
              tooltipPlacement="left"
              range={true}
              max={75}
              min={1}
              step={1}
              defaultValue={[state.weeklyHours[0], state.weeklyHours[1]]}
              onChange={onHandleWeeklyHours}
              // onAfterChange={onAfterChange}
            />
            {state?.weeklyHours[0]}h to {state?.weeklyHours[1]}h
          </Form.Item>
          <Form.Item
            name="hourlyRate"
            label="My Hourly Rate:"
            style={{ marginTop: "19px", fontWeight: "bold" }}
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
            {state?.hourlyRate}$
          </Form.Item>
        </>
      ),
    },
    {
      title: "Availabilty",
      content: (
        <>
          <Title level={4}>Availabilty</Title>
          <div>
            Tell families what your weekly schedule typically looks like. If
            needed, it's super easy to come back and edit it when you log back
            in.
          </div>
          <Form.Item
            name="workingDays"
            label="I'm available to work:"
            style={{ marginTop: "19px", fontWeight: "bold" }}
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
                checked={selectedTags.indexOf(tag) > -1}
                onChange={(checked) => onHandleDaysChange(tag, checked)}
                color="green"
              >
                {tag}
              </CheckableTag>
            ))}
            <ErrorValidationMessage
              message="Please select at-least one"
              show={fieldError?.workingDays && state?.workingDays?.length == 0}
            />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Experience",
      content: (
        <>
          <Title level={4}>Experience</Title>
          <div>
            Tell families what your weekly schedule typically looks like. If
            needed, it's super easy to come back and edit it when you log back
            in.
          </div>
          {data?.service == "Nanny" || data?.service == "Pet Care Provider" ? (
            <Form.Item
              name="selectedHelp"
              label="I'm actually help to with:"
              style={{ marginTop: "19px", fontWeight: "bold" }}
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
                  checked={selectedTagsHelp.indexOf(tag) > -1}
                  onChange={(checked) => onHandleHelpChange(tag, checked)}
                  color="green"
                >
                  {tag}
                </CheckableTag>
              ))}
            </Form.Item>
          ) : null}

          {data?.service == "Nanny" ? (
            <>
              <Form.Item
                name="noOfChilds"
                label="I'm comfortable caring for:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                <PlusOutlined
                  style={
                    state.noOfChild == 10
                      ? { pointerEvents: "none" }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setState({ ...state, noOfChild: state.noOfChild + 1 })
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
                label="I'm comfortable age with:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onChildageCheck}
                >
                  {childAges.map((item) => (
                    <Checkbox value={item} style={{ padding: "10px" }}>
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
                <ErrorValidationMessage
                  message="Please check at-least one"
                  show={fieldError?.childAges && state?.childAges?.length == 0}
                />
              </Form.Item>
            </>
          ) : null}
          {data?.service == "Pet Care Provider" ? (
            <>
              <Form.Item
                name="Pets"
                label="I'm comfortable with:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onPetsCheck}
                >
                  {pets.map((item) => (
                    <Checkbox value={item} style={{ padding: "10px" }}>
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
                <ErrorValidationMessage
                  message="Please check at-least one"
                  show={fieldError?.pets && state?.pets?.length == 0}
                />
              </Form.Item>
              <Form.Item
                name="petServices"
                label="Services Provided:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onPetServiceCheck}
                >
                  {petServices.map((item) => (
                    <Checkbox value={item} style={{ padding: "10px" }}>
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
                <ErrorValidationMessage
                  message="Please check at-least one"
                  show={
                    fieldError?.petServices && state?.petServices?.length == 0
                  }
                />
              </Form.Item>
            </>
          ) : null}
          {data?.service == "Tutor" ? (
            <Form.Item
              name="TutorSubjects"
              label="Subjects Taught:"
              style={{ marginTop: "19px", fontWeight: "bold" }}
            >
              <Checkbox.Group
                style={{
                  width: "100%",
                  paddingBottom: "15px",
                }}
                onChange={onTutorSubjectsCheck}
              >
                {tutorSubjects.map((item) => (
                  <Checkbox value={item} style={{ padding: "10px" }}>
                    {item}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <ErrorValidationMessage
                message="Please check at-least one"
                show={
                  fieldError?.tutorSubjects && state?.tutorSubjects?.length == 0
                }
              />
            </Form.Item>
          ) : null}
          {data?.service == "HouseKeeper" ? (
            <Form.Item
              name="houseKeepingServices"
              label="House Keeping Services:"
              style={{ marginTop: "19px", fontWeight: "bold" }}
            >
              <Checkbox.Group
                style={{
                  width: "100%",
                  paddingBottom: "15px",
                }}
                onChange={onHouseKeepingCheck}
              >
                {houseKeepingServices.map((item) => (
                  <Checkbox value={item} style={{ padding: "10px" }}>
                    {item}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <ErrorValidationMessage
                message="Please check at-least one"
                show={
                  fieldError?.houseKeepingServices &&
                  state?.houseKeepingServices?.length == 0
                }
              />
            </Form.Item>
          ) : null}
          {data?.service == "Senior Care Provider" ? (
            <Form.Item
              name="seniorCareServices"
              label="Senior Care Services:"
              style={{ marginTop: "19px", fontWeight: "bold" }}
            >
              <Checkbox.Group
                style={{
                  width: "100%",
                  paddingBottom: "15px",
                }}
                onChange={onSeniorCareServicesCheck}
              >
                {seniorCareServices.map((item) => (
                  <Checkbox value={item} style={{ padding: "10px" }}>
                    {item}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <ErrorValidationMessage
                message="Please check at-least one"
                show={
                  fieldError?.seniorCareServices &&
                  state?.seniorCareServices?.length == 0
                }
              />
            </Form.Item>
          ) : null}
          {data?.service == "Errands & Odd Jobs Provider" ? (
            <Form.Item
              name="errands"
              label="Services I Provided:"
              style={{ marginTop: "19px", fontWeight: "bold" }}
            >
              <Checkbox.Group
                style={{
                  width: "100%",
                  paddingBottom: "15px",
                }}
                onChange={onErrandsCheck}
              >
                {errands.map((item) => (
                  <Checkbox value={item} style={{ padding: "10px" }}>
                    {item}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <ErrorValidationMessage
                message="Please check at-least one"
                show={fieldError?.errands && state?.errands?.length == 0}
              />
            </Form.Item>
          ) : null}
          {data?.service == "Special Needs Provider" ? (
            <>
              <Form.Item
                name="specialNeedsPerson"
                label="I'm Comfortable carrying with:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onSpecialNeedsPersonCheck}
                >
                  {specialNeedsPerson.map((item) => (
                    <Checkbox value={item} style={{ padding: "10px" }}>
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
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
                label="I'm Comfortable carrying with the following needs:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onSpecialNeedsDiseasesCheck}
                >
                  {specialNeedsDiseases.map((item) => (
                    <Checkbox value={item} style={{ padding: "10px" }}>
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
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
                label="Services I Provided:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onSpecialNeedsServicesCheck}
                >
                  {specialNeedsServices.map((item) => (
                    <Checkbox value={item} style={{ padding: "10px" }}>
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
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
            name="detailsAboutMe"
            label="Details About Me:"
            style={{ marginTop: "19px", fontWeight: "bold" }}
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
                checked={selectedTagsDetail.indexOf(tag) > -1}
                onChange={(checked) => onHandleDetailChange(tag, checked)}
                color="green"
              >
                {tag}
              </CheckableTag>
            ))}
          </Form.Item>
          <Form.Item
            name="experience"
            label="Years of Experience"
            style={{ marginTop: "19px", fontWeight: "bold" }}
          >
            <PlusOutlined
              style={
                state.experience == 70
                  ? { pointerEvents: "none" }
                  : { cursor: "pointer" }
              }
              onClick={() =>
                setState({ ...state, experience: state.experience + 1 })
              }
            />
            <div style={{ margin: "10px 10px 10px 10px" }}>
              {`${state?.experience}` > 1
                ? `${state?.experience} Years`
                : `${state?.experience} Year`}
            </div>
            <MinusOutlined
              style={
                state?.experience == 1
                  ? { pointerEvents: "none" }
                  : { cursor: "pointer" }
              }
              onClick={() =>
                setState({ ...state, experience: state?.experience - 1 })
              }
            />
          </Form.Item>
          <Form.Item
            name="education"
            label="Education"
            style={{ marginTop: "19px", fontWeight: "bold" }}
          >
            <Radio.Group onChange={onHandleEducation}>
              <Radio value={"High School"}>High School</Radio>
              <Radio value={"Under College"}>Under College</Radio>
              <Radio value={"College Degree"}>College Degree</Radio>
              <br />
              <Radio value={"Under Graduation"}>Under Graduation</Radio>
              <Radio value={"Graduate Degree"}>Graduate Degree</Radio>
            </Radio.Group>
            <ErrorValidationMessage
              message="education required"
              show={fieldError?.education && state?.education == ""}
            />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Emergency",
      content: (
        <>
          <Title level={4}>Emergency Coverage</Title>
          <div>
            An emergency is an urgent, unexpected situation that poses an
            immediate risk to health, life, property, or environment and
            requires immediate action.
          </div>
          <Form.Item
            name="emergencyCase"
            label="Will you available for Emergency Care?:"
            style={{ marginTop: "19px", fontWeight: "bold" }}
          >
            <Radio.Group
              defaultValue={state?.emergencyCase}
              onChange={onHandleEmergency}
              buttonStyle="solid"
              style={{
                width: "100%",
                marginTop: "10px",
              }}
            >
              <Radio.Button value={true} style={{ marginRight: "10px" }}>
                Yes
              </Radio.Button>
              <Radio.Button value={false}>No</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </>
      ),
    },
    {
      title: "Bio",
      content: (
        <>
          <Title level={4}>Your Bio</Title>
          <Form.Item
            name="bioTitle"
            label="Add a title:"
            style={{ marginTop: "19px", fontWeight: "bold" }}
            onChange={(e) => setState({ ...state, bioTitle: e.target.value })}
          >
            <Input placeholder="Enter Bio" size="large" autoComplete="off" />
          </Form.Item>
          <Form.Item
            name="bioDescription"
            label="Introduce yourself to families by writing a bio. We started a draft, but you'll need to edit it — reword or add more detail:"
            style={{ marginTop: "19px" }}
            rules={[{ message: "at least 150 characters", min: 150 }]}
            onChange={(e) =>
              setState({ ...state, bioDescription: e.target.value })
            }
          >
            <TextArea
              placeholder="Introduce YourSelf"
              rows={4}
              autoComplete="off"
            />
          </Form.Item>
          <ErrorValidationMessage
            message="msg"
            show={fieldError?.bioDescription}
          />
        </>
      ),
    },
    {
      title: "Photo",
      content: (
        <>
          <Title level={4}>Upload a photo</Title>
          <Form.Item
            name="photo"
            label="Upload your professional profile photo: "
            style={{ marginTop: "19px", fontWeight: "bold" }}
            rules={[
              {
                required: true,
                message: "photo required",
              },
            ]}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div className="profile-photo-job">
                <Avatar
                  size={100}
                  src={file ? file : null}
                  icon={<UserOutlined />}
                />
                <Upload onChange={handleUpload} className="camera-icon-pro">
                  <Link to="#">
                    <CameraOutlined size={26} />
                  </Link>
                </Upload>
              </div>
            </div>
          </Form.Item>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="build-profile">
        <div className="build-profile-main">
          <div className="side-bar">
            <Title level={4}>Progress</Title>
            <Progress percent={percentage} steps={6} />
            <Steps
              current={current}
              direction="vertical"
              className="steps"
              progressDot
            >
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </div>
          <div className="steps-content">
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              onFinish={handleSubmit}
              style={{ padding: "10px" }}
            >
              {steps[current]?.content}
              <div className="steps-action">
                {current < steps?.length - 1 && (
                  <Button type="primary" onClick={() => next()}>
                    Next
                  </Button>
                )}
                {current === steps?.length - 1 && (
                  <>
                    {isActive === false ? (
                      <Button
                        htmlType="submit"
                        type="primary"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        Finish
                      </Button>
                    ) : (
                      <Button disabled>
                        <Spin
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                        />
                      </Button>
                    )}
                  </>
                )}
                {current > 0 && (
                  <Button
                    style={{
                      margin: "0 8px",
                    }}
                    onClick={() => prev()}
                  >
                    Previous
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildForm;
