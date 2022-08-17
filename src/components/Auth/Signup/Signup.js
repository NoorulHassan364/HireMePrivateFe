import React from "react";
import { Form, Input, Button, Checkbox, Image, Layout, Typography } from "antd";
import {
  BulbOutlined,
  HomeOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  UnlockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Row, Col, Spin, Select } from "antd";
import signUpImg from "../../../assets/images/baby5.jpg";
import backImg from "../../../assets/images/back_img.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthAPI } from "../../../api";
import "./Signup.css";

const { Title } = Typography;
const FormItem = Form.Item;
const { Option } = Select;

const Signup = () => {
  const [form] = Form.useForm();
  const [isActive, setActive] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // alert(JSON.stringify(values));
    setActive(true);
    AuthAPI.signup({ ...values, role: "careTaker" }).then((res) => {
      if (res?.status === 201) {
        navigate("/login");
        form.resetFields();
      }
      setActive(false);
    });
  };

  return (
    <Layout
      className="signup"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 25,
        backgroundImage:
          "radial-gradient(circle at 83% 70%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 72% 5%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 26% 91%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 19% 59%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 18% 99%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 74% 21%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 54% 49%, rgba(255,255,255, 0.15) 0%, rgba(255,255,255, 0.15) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 14% 83%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 37% 84%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 42% 27%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 67% 82%, rgba(255,255,255, 0.17) 0%, rgba(255,255,255, 0.17) 4%,transparent 4%, transparent 96%),linear-gradient(135deg, rgba(207,223,223, 0.85),rgba(3,35,171, 0.51))",
        //   backgroundImage:
        //       "radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60,60,60, 0.09) 0%, rgba(60,60,60, 0.09) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150,150,150, 0.06) 0%, rgba(150,150,150, 0.06) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25,25,25, 0.03) 0%, rgba(25,25,25, 0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69,69,69, 0.15) 0%, rgba(69,69,69, 0.15) 6%,transparent 6%, transparent 100%),linear-gradient(115deg, rgb(241,235,255),rgb(241,235,255))",
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
            src={signUpImg}
            preview={false}
            style={{ opacity: 0.5, borderRadius: "15px 0px 0px 15px" }}
            height="100%"
          />
        </Col>
        <Col
          md={{ span: 10 }}
          style={{
            background: "white",
            borderRadius: "0px 10px 10px 0px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            padding: 5,
          }}
        >
          <UnlockOutlined
            style={{ fontSize: 40, color: "blue", marginBottom: 20 }}
          />
          <Title level={4} style={{ color: "gray", marginBottom: 20 }}>
            Sign up to HireMePrivate
          </Title>
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            onFinish={handleSubmit}
          >
            <Row gutter={4} type="flex" justify="center">
              <Col lg={{ span: 12 }} md={{ span: 11 }} xs={{ span: 16 }}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                    // {
                    //   message: "name should have characters",
                    //   type: "string",
                    // },
                  ]}
                >
                  <Input
                    placeholder="Username"
                    prefix={<UserOutlined />}
                    size="large"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>

              <Col lg={{ span: 12 }} md={{ span: 11 }} xs={{ span: 16 }}>
                <Form.Item
                  name="email"
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
                    placeholder="Email"
                    type="email"
                    prefix={<MailOutlined />}
                    size="large"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={4} type="flex" justify="center">
              <Col lg={{ span: 12 }} md={{ span: 11 }} xs={{ span: 16 }}>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                    {
                      message: "invalid contact!",
                      type: "string",
                    },
                  ]}
                >
                  <Input
                    placeholder="Phone"
                    prefix={<PhoneOutlined />}
                    size="large"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>

              <Col lg={{ span: 12 }} md={{ span: 11 }} xs={{ span: 16 }}>
                <Form.Item
                  name="zipCode"
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Zip Code"
                    prefix={<BulbOutlined />}
                    size="large"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row type="flex" justify="center">
              <Col
                lg={{ span: 24 }}
                md={{ span: 22 }}
                xs={{ span: 16 }}
                sm={{ span: 14 }}
              >
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                    {
                      message: "invalid email!",
                      type: "string",
                    },
                  ]}
                >
                  <Input
                    placeholder="Address"
                    prefix={<HomeOutlined />}
                    size="large"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row type="flex" justify="center">
              <Col
                lg={{ span: 24 }}
                md={{ span: 22 }}
                xs={{ span: 16 }}
                sm={{ span: 14 }}
              >
                <Form.Item
                  name="service"
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                  ]}
                >
                  <Select
                    defaultValue="what service you are looking?"
                    // style={{
                    //   width: 120,
                    // }}
                  >
                    <Option value="Nanny">Nanny/BabySitter</Option>
                    <Option value="Special Needs Provider">
                      Special Needs Provider
                    </Option>
                    <Option value="Tutor">Tutor</Option>
                    {/* <Option value="Private Lesson Instructor">
                    Private Lesson Instructor
                  </Option> */}
                    <Option value="Senior Care Provider">
                      Senior Care Provider
                    </Option>
                    <Option value="Pet Care Provider">Pet Care Provider</Option>
                    <Option value="HouseKeeper">HouseKeeper</Option>
                    <Option value="Errands & Odd Jobs Provider">
                      Errands & Odd Jobs Provider
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={4} type="flex" justify="center">
              <Col lg={{ span: 12 }} md={{ span: 11 }} xs={{ span: 16 }}>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                    {
                      message: "password al-least 6 characters",
                      min: 6,
                    },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="Password"
                    prefix={<LockOutlined />}
                    size="large"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>

              <Col lg={{ span: 12 }} md={{ span: 11 }} xs={{ span: 16 }}>
                <Form.Item
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
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
                    type="password"
                    placeholder="Confirm Password"
                    prefix={<LockOutlined />}
                    size="large"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={4} type="flex" justify="center">
              <Col lg={{ span: 12 }} md={{ span: 11 }} xs={{ span: 16 }}>
                <Form.Item style={{ marginTop: "10px" }}>
                  {isActive === false ? (
                    <Button
                      className="login-form-button"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      Sign up
                    </Button>
                  ) : (
                    <Button
                      className="login-form-button"
                      htmlType="submit"
                      block
                      disabled
                    >
                      <Spin
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />
                    </Button>
                  )}

                  <Typography style={{ textAlign: "center" }}>
                    Already have an account
                    <Link to="/login"> Sign in</Link>
                  </Typography>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Signup;
