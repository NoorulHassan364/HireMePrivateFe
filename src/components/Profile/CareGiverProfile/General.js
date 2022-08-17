import {
  CameraOutlined,
  EditOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Tabs,
  Form,
  Spin,
  Button,
  Input,
  Checkbox,
  Col,
  Row,
  Upload,
  Typography,
} from "antd";
import React from "react";
import "./Profile.css";
import Account from "./Account";
import ChangePassword from "./ChangePassword";
// import { UserAPI } from "../../api";
import { Link } from "react-router-dom";
const { TabPane } = Tabs;
const { Text } = Typography;
const FormItem = Form.Item;

const General = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="General" key="1">
        <Account />
      </TabPane>
      <TabPane tab="Change Password" key="2">
        <ChangePassword />
      </TabPane>
    </Tabs>
  );
};

export default General;
