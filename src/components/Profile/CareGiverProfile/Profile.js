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
  PieChartOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useParams, useNavigate } from "react-router-dom";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from "./Sidebar";
// import { UserAPI } from "../../../../api";

const { CheckableTag } = Tag;
const { TabPane } = Tabs;
const { Step } = Steps;
const { Title } = Typography;
const FormItem = Form.Item;
const { TextArea } = Input;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
];

const Profile = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);

  const handleToggleSidebar = () => {
    setToggled((toggled) => !toggled);
    setCollapsed((collapsed) => !collapsed);
  };
  const navigate = useNavigate();
  return (
    <div className="profile-parent">
      {/* <Button onClick={handleToggleSidebar}>toogle</Button> */}
      <div className="care-giver-profile">
        <div className="care-giver-profile-main">
          {/* <Sidebar
          // width="200px"
          // style={{
          //   height: "50vh",
          //   borderRadius: "10px",
          //   backgroundColor: "white",
          //   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          // }}
          // collapsed={collapsed}
          // toggled={toggled}
          // onToggle={handleToggleSidebar}

          // // collapsed={true}
          // // toggled={true}
          >
            <Menu popperArrow={true} style={{ padding: "20px" }}>
              <MenuItem
                onClick={() => navigate("/care-giver-profile")}
                style={{
                  padding: "8px",
                  backgroundColor: "#F5F5F5",
                  margin: "3px",
                  borderRadius: "7px",
                  cursor: "pointer",
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/care-giver-profile/job")}
                style={{
                  padding: "8px",
                  backgroundColor: "#F5F5F5",
                  margin: "3px",
                  borderRadius: "7px",
                  cursor: "pointer",
                }}
              >
                Jobs
              </MenuItem>
            </Menu>
          </Sidebar> */}
          <main
            style={{
              padding: "0px 10px 0px 10px",
              width: "100%",
              backgroundColor: "white",
              height: "fitContent",
              marginLeft: "10px",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
