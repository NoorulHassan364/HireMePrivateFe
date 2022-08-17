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
import GeneralTab from "./GeneralTab";
import ChangePassword from "./ChangePassword";
import { UserAPI } from "../../api";
import { Link } from "react-router-dom";
const { TabPane } = Tabs;
const { Text } = Typography;
const FormItem = Form.Item;

const Profile = () => {
  const [user, setUser] = React.useState();
  const [file, setFile] = React.useState();
  const [image, setImage] = React.useState(undefined);
  const [form] = Form.useForm();
  const [isActive, setActive] = React.useState(false);
  const onChange = (key) => {
    console.log(key);
  };

  const getUser = (id) => {
    UserAPI.getUser(id).then((res) => {
      setUser(res?.data?.data);
    });
  };

  const handleUpload = (event) => {
    setFile(URL.createObjectURL(event.file.originFileObj));
    setImage(event.file.originFileObj);
  };

  React.useEffect(() => {
    const id = JSON.parse(localStorage.getItem("user"))?._id;
    getUser(id);
  }, []);

  return (
    <>
      <div className="container-pro">
        <div className="section-1-pro">
          <div className="profile-pro">
            <Avatar
              size={100}
              src={file ? file : user?.profileImg ? user?.profileImg : null}
              icon={<UserOutlined />}
            />
            <Upload onChange={handleUpload} className="camera-icon-pro">
              <Link to="#">
                <CameraOutlined size={16} />
              </Link>
            </Upload>
          </div>
          <div className="title-pro">{user?.name}</div>
          <div className="email-pro">{user?.email}</div>
          {/* <div className="designation-pro">{user?.designation}</div> */}
          <div className="address-pro">{user?.address}</div>
        </div>
        <div className="section-2-pro">
          <div className="setting-pro">
            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="General" key="1">
                <GeneralTab getUser={getUser} user={user} image={image} />
              </TabPane>
              <TabPane tab="Change Password" key="2">
                <ChangePassword user={user} />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
