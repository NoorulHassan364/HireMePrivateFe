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
  Typography,
} from "antd";
import React, { useEffect } from "react";
import "./Profile.css";
import { AuthAPI } from "../../api";

const { Title, Text } = Typography;
const FormItem = Form.Item;
const ChangePassword = () => {
  const [form] = Form.useForm();
  const [state, setState] = React.useState();
  const [isActive, setActive] = React.useState(false);
  React.useEffect(() => {
    setState(JSON.parse(localStorage.getItem("user")));
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  const handleSubmit = (values) => {
    setActive(true);
    // console.log(state);
    AuthAPI.changePassword(state?._id, values).then((res) => {
      if (res?.status === 200) {
        form.resetFields();
      }
      setActive(false);
    });
  };
  return (
    <>
      <Text style={{ fontSize: "15px" }}>
        Use this form to change your password. Once changed, your new password
        will be in effect next time you login.
      </Text>
      <div style={{ maxWidth: 300, paddingTop: 15 }}>
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          onFinish={handleSubmit}
          requiredMark={false}
        >
          <Form.Item
            name="currentPassword"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input
              placeholder="Current Password"
              type="password"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Required",
              },
              {
                min: 6,
                message: "password should be at least 6 characters",
              },
            ]}
          >
            <Input
              placeholder="New Password"
              type="password"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Required",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input
              placeholder="Re-enter New Password"
              type="password"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            {isActive === false ? (
              <Button htmlType="submit" type="primary">
                submit
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
    </>
  );
};

export default ChangePassword;
