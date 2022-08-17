import React from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Image,
  Layout,
  Typography,
  Spin,
} from "antd";
import {
  LockOutlined,
  RedoOutlined,
  SearchOutlined,
  UnlockOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Row, Col } from "antd";
import { AuthAPI } from "../../../api";

const { Title } = Typography;
const FormItem = Form.Item;

const ForgetPassword = () => {
  const [isActive, setActive] = React.useState(false);
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    // alert(JSON.stringify(values));
    setActive(true);
    AuthAPI.forgetPassword(values).then((res) => {
      if (res?.status === 200) {
        form.resetFields();
      }
      setActive(false);
    });
  };

  return (
    <Layout
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        padding: 26,

        backgroundImage:
          "radial-gradient(circle at 83% 70%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 72% 5%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 26% 91%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 19% 59%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 18% 99%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 74% 21%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 54% 49%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 14% 83%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 37% 84%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 42% 27%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 67% 82%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),linear-gradient(304deg, rgba(207,223,223, 0.85),rgba(3,35,171, 0.51))",
      }}
    >
      <Row justify="center" align="center">
        <Col
          sm={{ span: 8 }}
          lg={{ span: 6 }}
          style={{
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            padding: 16,
          }}
        >
          <RedoOutlined
            style={{ fontSize: 40, color: "blue", marginBottom: 20 }}
          />
          <Title level={4} style={{ color: "gray", marginBottom: 10 }}>
            Hire Me Private
          </Title>
          <Title level={5} style={{ color: "gray", marginBottom: 20 }}>
            Lost Your Password? Please Enter your Email address. you will
            receive a link to create a new password via email
          </Title>
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            onFinish={handleSubmit}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Required",
                },
                {
                  message: "invalid email!",
                  type: "email",
                },
              ]}
            >
              <Input
                placeholder="Enter Email"
                prefix={<UserOutlined />}
                size="large"
              />
            </Form.Item>

            <Form.Item style={{ marginTop: "20px" }}>
              {isActive === false ? (
                <Button
                  className="login-form-button"
                  htmlType="submit"
                  type="primary"
                  block
                >
                  Submit
                </Button>
              ) : (
                <Button
                  className="login-form-button"
                  htmlType="submit"
                  type="primary"
                  block
                  disabled
                >
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
        </Col>
      </Row>
    </Layout>
  );
};

export default ForgetPassword;
