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
  SearchOutlined,
  UnlockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Row, Col } from "antd";
import signInImg from "../../../assets/images/baby4.jpg";
import backImg from "../../../assets/images/back_img.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthAPI } from "../../../api";

const { Title } = Typography;
const FormItem = Form.Item;

const Login = () => {
  const [isActive, setActive] = React.useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    // alert(JSON.stringify(values));
    setActive(true);
    AuthAPI.login(values).then((res) => {
      if (res?.status === 200) {
        localStorage.setItem("user", JSON.stringify(res?.data?.data));
        if (res?.data?.data?.role == "careTaker") {
          navigate("/care-taker-member");
        } else {
          navigate("/");
        }
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
        backgroundImage:
          "radial-gradient(circle at 83% 70%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 72% 5%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 26% 91%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 19% 59%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 18% 99%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 74% 21%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 54% 49%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 14% 83%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 37% 84%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 42% 27%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 67% 82%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),linear-gradient(304deg, rgba(207,223,223, 0.85),rgba(3,35,171, 0.51))",
      }}
    >
      <Row justify="center" align="center">
        <Col
          xs={{ span: 0 }}
          md={{ span: 6 }}
          style={{
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "15px 0px 0px 15px",
          }}
        >
          <Image
            src={signInImg}
            preview={false}
            height="100%"
            style={{ opacity: 0.5, borderRadius: "15px 0px 0px 15px" }}
          />
        </Col>
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
          <UnlockOutlined
            style={{ fontSize: 40, color: "blue", marginBottom: 20 }}
          />
          <Title level={4} style={{ color: "gray", marginBottom: 20 }}>
            Login to HireMePrivate
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
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <Input
                placeholder="Enter Password"
                type="password"
                prefix={<LockOutlined />}
                size="large"
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item style={{ marginTop: "20px" }}>
              <Link className="login-form-forgot" to="/forgetPassword">
                Forgot password
              </Link>
              {isActive === false ? (
                <Button
                  className="login-form-button"
                  htmlType="submit"
                  type="primary"
                  block
                >
                  Login
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

              <Typography style={{ textAlign: "center" }}>
                Need an account
                <Link to="/get-started"> Sign up</Link>
              </Typography>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Login;
