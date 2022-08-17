import React from "react";
import "./Profile.css";
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
  Spin,
  message,
  Progress,
  Slider,
  Tag,
  Row,
  Radio,
  Space,
  Col,
  Avatar,
  Upload,
  Tabs,
} from "antd";
import {
  CameraOutlined,
  EditOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import TextArea from "antd/lib/input/TextArea";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UserAPI } from "../../../api";
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
import ErrorValidationMessage from "../../Auth/ApplyToJob/BuildProfile/ErrorValidationMessage";

const { CheckableTag } = Tag;

const { TabPane } = Tabs;
const { Text } = Typography;
const FormItem = Form.Item;

const Account = () => {
  const [form] = Form.useForm();
  const [isActive, setActive] = React.useState(false);
  const [file, setFile] = React.useState();
  const [image, setImage] = React.useState(undefined);
  const [user, setUser] = React.useState();
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedTagsDetail, setSelectedTagDetail] = React.useState([]);

  const [state, setState] = React.useState();

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
    const id = JSON.parse(localStorage.getItem("user"))?._id;
    console.log(id);
    UserAPI.getUser(id).then((res) => {
      console.log(res?.data?.data);
      setState(res?.data?.data);
      setSelectedTags(res?.data?.data?.workingDays);
      form.setFieldsValue(res?.data?.data);
    });
  }, []);

  React.useEffect(() => {
    if (!form.submit) return;
    if (Object.keys(form.getFieldsError).length > 0) {
      document
        .getElementsByName(Object.keys(form.getFieldsError)[0])[0]
        .focus();
    }
  }, [form]);

  const onHandleDaysChange = (tag, checked) => {
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.workingDays, tag]
      : state?.workingDays.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, workingDays: nextSelectedTags });
  };

  const onHandleDetailChange = (tag, checked) => {
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.detailsAboutMe, tag]
      : state?.detailsAboutMe.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTagDetail(nextSelectedTags);
    setState({ ...state, detailsAboutMe: nextSelectedTags });
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

  const onHandleWeeklyHours = (e) => {
    let from = e[0] ? e[0] : "";
    let to = e[1] ? e[1] : "";
    // console.log(e);
    setState({ ...state, weeklyHours: [from, to] });
  };

  const onHandleHourlyRate = (e) => {
    setState({ ...state, hourlyRate: e });
    console.log(e);
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

  const onErrandsCheck = (tag, checked) => {
    // console.log("checked = ", checkedValues);
    // setState({ ...state, errands: checkedValues });
    console.log(tag, checked);
    const nextSelectedTags = checked
      ? [...state?.errands, tag]
      : state?.errands.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
    setState({ ...state, errands: nextSelectedTags });
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

  const onHandleEmergency = (e) => {
    console.log(e);
    setState({ ...state, emergencyCase: e.target.value });
  };

  const onHandleEducation = (e) => {
    console.log("onHandleEducation = ", e.target.value);
    setState({ ...state, education: e.target.value });
  };

  const handleUpload = (event) => {
    setState({
      ...state,
      profileImg: URL.createObjectURL(event.file.originFileObj),
    });
    setImage(event.file.originFileObj);
  };

  const handleSubmit1 = (values) => {
    if (state?.service == "Nanny" && state?.childAges.length == 0) {
      setFieldError({ ...fieldError, childAges: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.service == "Pet Care Provider" &&
      state?.pets?.length == 0
    ) {
      setFieldError({ ...fieldError, pets: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (state?.service == "Tutor" && state?.tutorSubjects.length == 0) {
      setFieldError({ ...fieldError, tutorSubjects: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.service == "HouseKeeper" &&
      state?.houseKeepingServices.length == 0
    ) {
      setFieldError({ ...fieldError, houseKeepingServices: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.service == "Errands & Odd Jobs Provider" &&
      state?.errands.length == 0
    ) {
      setFieldError({ ...fieldError, errands: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.service == "Senior Care Provider" &&
      state?.seniorCareServices.length == 0
    ) {
      setFieldError({ ...fieldError, seniorCareServices: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      state?.service == "Special Needs Provider" &&
      state?.specialNeedsPerson.length == 0
    ) {
      setFieldError({ ...fieldError, specialNeedsPerson: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      let object = {
        ...values,
        childAges: state?.childAges,
        education: state?.education,
        emergencyCase: state?.emergencyCase,
        weeklyHours: state?.weeklyHours,
        hourlyRate: state?.hourlyRate,
        selectedHelp: state?.selectedHelp,
        pets: state?.pets,
        petServices: state?.petServices,
        tutorSubjects: state?.tutorSubjects,
        houseKeepingServices: state?.houseKeepingServices,
        errands: state?.errands,
        seniorCareServices: state?.seniorCareServices,
        specialNeedsPerson: state?.specialNeedsPerson,
        specialNeedsDiseases: state?.specialNeedsDiseases,
        specialNeedsServices: state?.specialNeedsServices,
        detailsAboutMe: state?.detailsAboutMe,
        workingDays: state?.workingDays,
        experience: state?.experience,
        noOfChild: state?.noOfChild,
      };
      if (image !== undefined) {
        const formData = new FormData();

        for (const key in object) {
          if (Array.isArray(object[key])) {
            formData.append(key, object[key]);
          } else {
            formData.append(key, object[key]);
          }
        }

        formData.append("profileImg", image);
        console.log(image);
        // formData.workingDays = formData.weeklyDays.split(",");
        UserAPI.buildProfileUpdate(state?._id, formData).then((res) => {
          console.log(res);
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
        UserAPI.buildProfileUpdate(state?._id, object).then((res) => {
          console.log(res);
          setActive(false);
        });
      }

      setActive(true);
    }
    // if (state?.service == "Tutor" && state?.tutorSubjects?.length == 0) {
    //   setFieldError({ ...fieldError, tutorSubjects: true });
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    //   return;
    // }

    // let object = {
    //   ...values,
    //   childAges: state?.childAges,
    //   education: state?.education,
    //   weeklyHours: state?.weeklyHours,
    //   selectedHelp: state?.selectedHelp,
    //   detailsAboutMe: state?.detailsAboutMe,
    //   workingDays: state?.workingDays,
    //   experience: state?.experience,
    // };
  };

  return (
    <div>
      <div className="profile-account">
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          onFinish={handleSubmit1}
        >
          <div className="profile-pro">
            <Form.Item>
              <Avatar
                size={100}
                src={state?.profileImg ? state?.profileImg : null}
                icon={<UserOutlined />}
              />
              <Upload onChange={handleUpload} className="camera-icon-pro">
                <Link to="#">
                  <CameraOutlined size={16} />
                </Link>
              </Upload>
            </Form.Item>
          </div>
          <div className="wrapping-pro">
            <Form.Item
              label="Username"
              name="name"
              className="name-item-pro"
              rules={[
                {
                  required: true,
                  message: "Required",
                },
                {
                  message: "maximum 25 characters allow",
                  max: 25,
                },
              ]}
            >
              <Input
                placeholder="Enter name"
                autoComplete="off"
                prefix={<UserOutlined />}
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              className="email-item-pro"
              rules={[
                {
                  required: true,
                  message: "Required",
                },
                {
                  type: "email",
                  message: "invalid email",
                },
              ]}
            >
              <Input
                placeholder="Enter email"
                readOnly
                prefix={<LockOutlined />}
                size="large"
              />
            </Form.Item>
          </div>
          <div className="wrapping-pro">
            <Form.Item
              name="phone"
              label="Phone"
              className="phone-item-pro"
              rules={[
                {
                  required: true,
                  message: "Required",
                },
                {
                  // pattern:
                  // "/^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/",
                  message: "invalid Phone number",
                },
              ]}
            >
              <Input
                placeholder="Enter Phone"
                autoComplete="off"
                prefix={<UserOutlined />}
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Zip code"
              name="zipCode"
              className="zipcode-item-pro"
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <Input
                placeholder="Enter zip code"
                autoComplete="off"
                prefix={<LockOutlined />}
                size="large"
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="address"
              label="Address"
              className="address-item-pro"
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <Input
                placeholder="Enter Address"
                autoComplete="off"
                prefix={<UserOutlined />}
                size="large"
              />
            </Form.Item>
          </div>

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
              defaultValue={[state?.weeklyHours[0], state?.weeklyHours[1]]}
              // defaultValue={[12, 22]}
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
                checked={state?.workingDays.indexOf(tag) > -1}
                // checked={state?.workingDays.find((elem) => elem == tag)}
                onChange={(checked) => onHandleDaysChange(tag, checked)}
                color="green"
              >
                {tag}
              </CheckableTag>
            ))}
          </Form.Item>

          {state?.service == "Nanny" ? (
            <>
              <Form.Item
                name="noOfChilds"
                label="I'm comfortable caring for:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
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
                    state?.noOfChild == 1
                      ? { pointerEvents: "none" }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setState({ ...state, noOfChild: state?.noOfChild - 1 })
                  }
                />
              </Form.Item>
              <Form.Item
                name="childAges"
                label="I'm comfortable age with:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                {/* <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onChildAgeCheck}
                >
                  {childAge.map((item) => (
                    <Checkbox value={item} style={{ padding: "10px" }}>
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group> */}
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
                    // checked={state?.workingDays.find((elem) => elem == tag)}
                    onChange={(checked) => onChildAgeCheck(tag, checked)}
                    color="green"
                  >
                    {tag}
                  </CheckableTag>
                ))}
                <ErrorValidationMessage
                  message="Please check at-least one"
                  show={fieldError?.childAges && state?.childAges.length == 0}
                />
              </Form.Item>
            </>
          ) : null}

          {state?.service == "Nanny" ||
          state?.service == "Pet Care Provider" ? (
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
                  checked={state?.selectedHelp.indexOf(tag) > -1}
                  onChange={(checked) => onHandleHelpChange(tag, checked)}
                  color="green"
                >
                  {tag}
                </CheckableTag>
              ))}
            </Form.Item>
          ) : null}

          {state?.service == "Pet Care Provider" ? (
            <>
              <Form.Item
                name="pets"
                label="I'm comfortable with:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                {/* <Checkbox.Group
                style={{
                  width: "100%",
                  paddingBottom: "15px",
                }}
                onChange={onPetsCheck}
              >
                {pets.map((item) => (
                  <Checkbox
                    value={item}
                    style={{ padding: "10px" }}
                    checked={state?.pets?.includes(item) > -1}
                  >
                    {item}
                  </Checkbox>
                ))}
              </Checkbox.Group> */}
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
                    // checked={state?.workingDays.find((elem) => elem == tag)}
                    onChange={(checked) => onPetsCheck(tag, checked)}
                    color="green"
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
                label="Service Provided:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                {/* <Checkbox.Group
                style={{
                  width: "100%",
                  paddingBottom: "15px",
                }}
                onChange={onPetsCheck}
              >
                {pets.map((item) => (
                  <Checkbox
                    value={item}
                    style={{ padding: "10px" }}
                    checked={state?.pets?.includes(item) > -1}
                  >
                    {item}
                  </Checkbox>
                ))}
              </Checkbox.Group> */}
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
                    // checked={state?.workingDays.find((elem) => elem == tag)}
                    onChange={(checked) => onPetServiceCheck(tag, checked)}
                    color="green"
                  >
                    {tag}
                  </CheckableTag>
                ))}
                <ErrorValidationMessage
                  message="Please check at-least one"
                  show={
                    fieldError?.petServices && state?.petServices?.length == 0
                  }
                />
              </Form.Item>
            </>
          ) : null}

          {state?.service == "Tutor" ? (
            <Form.Item
              name="tutorSubjects"
              label="Subjects Taught:"
              style={{ marginTop: "19px", fontWeight: "bold" }}
            >
              {/* <Checkbox.Group
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
              </Checkbox.Group> */}
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
                  // checked={state?.workingDays.find((elem) => elem == tag)}
                  onChange={(checked) => onTutorSubjectsCheck(tag, checked)}
                  color="green"
                >
                  {tag}
                </CheckableTag>
              ))}
              <ErrorValidationMessage
                message="Please check at-least one"
                show={
                  fieldError?.tutorSubjects && state?.tutorSubjects?.length == 0
                }
              />
            </Form.Item>
          ) : null}

          {state?.service == "HouseKeeper" ? (
            <Form.Item
              name="houseKeepingServices"
              label="House Keeping Services:"
              style={{ marginTop: "19px", fontWeight: "bold" }}
            >
              {/* <Checkbox.Group
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
              </Checkbox.Group> */}
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
                  // checked={state?.workingDays.find((elem) => elem == tag)}
                  onChange={(checked) => onHouseKeepingCheck(tag, checked)}
                  color="green"
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

          {state?.service == "Errands & Odd Jobs Provider" ? (
            <Form.Item
              name="errands"
              label="Services I Provided:"
              style={{ marginTop: "19px", fontWeight: "bold" }}
            >
              {/* <Checkbox.Group
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
              </Checkbox.Group> */}
              {errands.map((tag) => (
                <CheckableTag
                  style={{
                    border: "1px solid gray",
                    margin: "10px",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                  key={tag}
                  checked={state?.errands.indexOf(tag) > -1}
                  // checked={state?.workingDays.find((elem) => elem == tag)}
                  onChange={(checked) => onErrandsCheck(tag, checked)}
                  color="green"
                >
                  {tag}
                </CheckableTag>
              ))}
              <ErrorValidationMessage
                message="Please check at-least one"
                show={fieldError?.errands && state?.errands?.length == 0}
              />
            </Form.Item>
          ) : null}

          {state?.service == "Senior Care Provider" ? (
            <Form.Item
              name="seniorCareServices"
              label="Senior Care Services:"
              style={{ marginTop: "19px", fontWeight: "bold" }}
            >
              {/* <Checkbox.Group
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
              </Checkbox.Group> */}
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
                  // checked={state?.workingDays.find((elem) => elem == tag)}
                  onChange={(checked) =>
                    onSeniorCareServicesCheck(tag, checked)
                  }
                  color="green"
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

          {state?.service == "Special Needs Provider" ? (
            <>
              <Form.Item
                name="specialNeedsPerson"
                label="I'm Comfortable carrying with:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                {/* <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onSpecialNeedsPersonCheck}
                >
                  {specialNeedsPerson.map((item) => (
                    <Checkbox
                      value={item}
                      style={{ padding: "10px", fontWeight: "500" }}
                    >
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group> */}
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
                    // checked={state?.workingDays.find((elem) => elem == tag)}
                    onChange={(checked) =>
                      onSpecialNeedsPersonCheck(tag, checked)
                    }
                    color="green"
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
                label="I'm Comfortable carrying with the following needs:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                {/* <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onSpecialNeedsDiseasesCheck}
                >
                  {specialNeedsDiseases.map((item) => (
                    <Checkbox
                      value={item}
                      style={{ padding: "10px", fontWeight: "500" }}
                    >
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group> */}
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
                    // checked={state?.workingDays.find((elem) => elem == tag)}
                    onChange={(checked) =>
                      onSpecialNeedsDiseasesCheck(tag, checked)
                    }
                    color="green"
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
                label="Services I Provided:"
                style={{ marginTop: "19px", fontWeight: "bold" }}
              >
                {/* <Checkbox.Group
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                  }}
                  onChange={onSpecialNeedsServicesCheck}
                >
                  {specialNeedsServices.map((item) => (
                    <Checkbox
                      value={item}
                      style={{ padding: "10px", fontWeight: "500" }}
                    >
                      {item}
                    </Checkbox>
                  ))}
                </Checkbox.Group> */}
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
                    // checked={state?.workingDays.find((elem) => elem == tag)}
                    onChange={(checked) =>
                      onSpecialNeedsServicesCheck(tag, checked)
                    }
                    color="green"
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
                checked={state?.detailsAboutMe.indexOf(tag) > -1}
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
                state?.experience == 70
                  ? { pointerEvents: "none" }
                  : { cursor: "pointer" }
              }
              onClick={() =>
                setState({ ...state, experience: state?.experience + 1 })
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
            <Radio.Group
              onChange={onHandleEducation}
              style={{ fontWeight: "500" }}
            >
              <Radio value={"High School"}>High School</Radio>
              <Radio value={"Under College"}>Under College</Radio>
              <Radio value={"College Degree"}>College Degree</Radio>
              <br />
              <Radio value={"Under Graduation"}>Under Graduation</Radio>
              <Radio value={"Graduate Degree"}>Graduate Degree</Radio>
            </Radio.Group>
          </Form.Item>

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

          <Form.Item
            name="bioTitle"
            label="Add a title:"
            style={{ marginTop: "19px", fontWeight: "bold" }}
            onChange={(e) => setState({ ...state, bioTitle: e.target.value })}
          >
            <Input
              placeholder="Enter Bio"
              autoComplete="off"
              size="large"
              defaultValue={state?.bioTitle}
            />
          </Form.Item>

          <Form.Item
            name="bioDescription"
            label="Introduce yourself to families by writing a bio. We started a draft, but you'll need to edit it — reword or add more detail:"
            style={{ marginTop: "19px", fontWeight: "bold" }}
            rules={[{ message: "at least 150 characters", min: 150 }]}
            onChange={(e) =>
              setState({ ...state, bioDescription: e.target.value })
            }
          >
            <TextArea
              placeholder="Introduce YourSelf"
              autoComplete="off"
              rows={4}
              defaultValue={state?.bioDescription}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            {isActive === false ? (
              <Button
                className="login-form-button"
                htmlType="submit"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Submit
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
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Account;
