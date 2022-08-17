import React from "react";
import {
  Button,
  message,
  Dropdown,
  Slider,
  Menu,
  Space,
  Popconfirm,
  Drawer,
  Radio,
} from "antd";
import "./FilterBar.css";
import { DownOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import CheckableTag from "antd/lib/tag/CheckableTag";
import Title from "antd/lib/skeleton/Title";
const text = "Are you sure to delete this task?";

const confirm = () => {
  message.info("Clicked on Yes.");
};

const FilterBar = ({ data, setData }) => {
  const [visible, setVisible] = React.useState(false);
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedTagsHelp, setSelectedTagsHelp] = React.useState([]);
  const [state, setState] = React.useState({
    weeklyHours: [0, 0],
    hourlyRate: [0, 0],
    workingDays: [],
    selectedHelp: [],
    noOfChild: 1,
    childAges: [],
    detailsAboutMe: [],
    experience: 1,
    education: "",
  });

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const helping = [
    "houseKeeping",
    "laundry",
    "preparing meals",
    "traveling",
    "grocery shopping",
    "errands",
    "Crafts",
    "Swimming",
    "feeding pets",
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
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

  const onHandleEducation = (e) => {
    console.log("onHandleEducation = ", e.target.value);
    setState({ ...state, education: e.target.value });
  };

  const onHandleIndFilterSubmit = (type) => {
    console.log(state);
    let filterData;
    if (type == "weeklyHours") {
      filterData = data?.filter((item) => {
        return (
          state?.weeklyHours[0] >= item?.weeklyHours[0] &&
          state?.weeklyHours[1] <= item?.weeklyHours[1]
        );
      });
    } else if (type == "hourlyRate") {
      filterData = data?.filter((item) => {
        debugger;
        return (
          state?.hourlyRate[0] <= parseInt(item?.hourlyRate) &&
          state?.hourlyRate[1] >= parseInt(item?.hourlyRate)
        );
      });
    } else if (type == "experience") {
      filterData = data?.filter((item) => {
        return state?.experience == item?.experience;
      });
    }
    setData(filterData);
  };

  const onHandleSubmit = () => {
    debugger;
    console.log(state);
    let values = data;
    if (state?.workingDays?.length > 0) {
      let arrayOfDays = [];
      for (let i of values) {
        let result = i?.workingDays?.some((ai) => {
          return state?.workingDays?.includes(ai);
        });
        if (result) {
          arrayOfDays.push(i);
        }
      }
      values = arrayOfDays;
    }
    if (state?.weeklyHours[0] !== 0 && state?.weeklyHours[1] !== 0) {
      values = values?.filter((item) => {
        return (
          state?.weeklyHours[0] >= item?.weeklyHours[0] &&
          state?.weeklyHours[1] <= item?.weeklyHours[1]
        );
      });
    }
    if (state?.hourlyRate[0] !== 0 && state?.hourlyRate[1] !== 0) {
      values = values?.filter((item) => {
        return (
          state?.hourlyRate[0] <= parseInt(item?.hourlyRate) &&
          state?.hourlyRate[1] >= parseInt(item?.hourlyRate)
        );
      });
    }
    if (state?.education !== "") {
      values = values?.filter((item) => {
        return state?.education == item?.education;
      });
    }
    if (state?.selectedHelp?.length > 0) {
      let arrayOfHelp = [];
      for (let i of values) {
        let result = i?.selectedHelp?.some((ai) => {
          return state?.selectedHelp?.includes(ai);
        });
        if (result) {
          arrayOfHelp.push(i);
        }
      }
      values = arrayOfHelp;
    }
    if (state?.noOfChild !== 1) {
      values = values?.filter((item) => {
        return item?.noOfChild >= state?.noOfChild;
      });
    }
    if (state?.experience !== 1) {
      values = values?.filter((item) => {
        return item?.experience >= state?.experience;
      });
    }
    setData(values);
    onClose();
  };

  const experienceMenu = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      <PlusOutlined
        style={
          state.experience == 10
            ? { pointerEvents: "none" }
            : { cursor: "pointer" }
        }
        onClick={() => setState({ ...state, experience: state.experience + 1 })}
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
    </div>
  );

  const hourlyRateMenu = (
    <div style={{ width: "13rem", marginTop: "0.4rem" }}>
      <Slider
        // tooltipVisible={true}
        tooltipPlacement="left"
        range={true}
        max={75}
        min={1}
        step={1}
        defaultValue={[state?.hourlyRate[0], state?.hourlyRate[1]]}
        onChange={onHandleHourlyRate}
      />
    </div>
  );

  const weeklyHoursMenu = (
    <div style={{ width: "13rem", marginTop: "0.4rem" }}>
      <Slider
        // tooltipVisible={true}
        tooltipPlacement="left"
        range={true}
        max={75}
        min={1}
        step={1}
        defaultValue={[state.weeklyHours[0], state.weeklyHours[1]]}
        onChange={onHandleWeeklyHours}
      />
      {/* <Button
        onClick={() => onHandleIndFilterSubmit("weeklyHours")}
        style={{ float: "right", marginTop: "1rem" }}
      >
        Apply
      </Button> */}
    </div>
  );

  const helpingMenu = (
    <>
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
    </>
  );

  const noOfChildsMenu = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PlusOutlined
        style={
          state.noOfChild == 10
            ? { pointerEvents: "none" }
            : { cursor: "pointer" }
        }
        onClick={() => setState({ ...state, noOfChild: state.noOfChild + 1 })}
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
        onClick={() => setState({ ...state, noOfChild: state.noOfChild - 1 })}
      />
    </div>
  );

  const educationMenu = (
    <Radio.Group onChange={onHandleEducation}>
      <Radio value={"High School"}>High School</Radio>
      <Radio value={"Under College"}>Under College</Radio>
      <Radio value={"College Degree"}>College Degree</Radio>
      <br />
      <Radio value={"Under Graduation"}>Under Graduation</Radio>
      <Radio value={"Graduate Degree"}>Graduate Degree</Radio>
    </Radio.Group>
  );

  return (
    <>
      <div className="filter">
        <div className="filter-main">
          <div className="more-filter">
            <Drawer
              title="More Filters"
              placement={"left"}
              closable={true}
              onClose={onClose}
              visible={visible}
              key={"left"}
            >
              <div className="drawer-style">
                <h3>Availabilty: </h3>
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
              </div>
              <div className="drawer-style">
                <h3>Weekly Hours: </h3>
                {weeklyHoursMenu}
              </div>
              <div className="drawer-style">
                <h3>Hourly Rate: </h3>
                {hourlyRateMenu}
              </div>
              <div className="drawer-style">
                <h3>Experience: </h3>
                {experienceMenu}
              </div>
              <div className="drawer-style">
                <h3>Preferences: </h3>
                {helpingMenu}
              </div>
              <div className="drawer-style">
                <h3>comfortable carring of :</h3>
                {noOfChildsMenu}
              </div>
              <div className="drawer-style">
                <h3>Education: </h3>
                {educationMenu}
              </div>
              <Button
                style={{
                  backgroundColor: "rgb(149, 149, 251)",
                  color: "white",
                  width: "40%",
                  margin: "10px",
                  borderRadius: "16px",
                }}
                onClick={onHandleSubmit}
              >
                Apply
              </Button>
            </Drawer>
            <Button onClick={showDrawer}>More Filter</Button>
          </div>
          <div className="other-filter">
            <Popconfirm
              placement="bottom"
              title={weeklyHoursMenu}
              onConfirm={() => onHandleIndFilterSubmit("weeklyHours")}
              icon={null}
              okText="Apply"
              showCancel={false}
            >
              <Button>
                <Space>
                  Weekly Hours
                  <DownOutlined />
                </Space>
              </Button>
            </Popconfirm>

            <Popconfirm
              placement="bottom"
              title={hourlyRateMenu}
              onConfirm={() => onHandleIndFilterSubmit("hourlyRate")}
              icon={null}
              okText="Apply"
              showCancel={false}
            >
              <Button>
                <Space>
                  Hourly Rate
                  <DownOutlined />
                </Space>
              </Button>
            </Popconfirm>

            <Popconfirm
              placement="bottom"
              title={experienceMenu}
              onConfirm={() => onHandleIndFilterSubmit("experience")}
              icon={null}
              okText="Apply"
              showCancel={false}
            >
              <Button>
                <Space>
                  Experience
                  <DownOutlined />
                </Space>
              </Button>
            </Popconfirm>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
