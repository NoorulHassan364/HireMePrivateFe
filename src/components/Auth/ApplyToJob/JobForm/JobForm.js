import React from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Image,
  Layout,
  Spin,
  Typography,
  Select,
} from "antd";

import "./JobForm.css";
import { useNavigate } from "react-router-dom";
import { AuthAPI, UserAPI } from "../../../../api";

const { Title } = Typography;
const FormItem = Form.Item;

const JobForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isActive, setActive] = React.useState(false);
  const handleSubmit = (values) => {
    setActive(true);
    // navigate("/apply-to-job/job-form/build-profile");
    AuthAPI.signup({ ...values, role: "careGiver" }).then((res) => {
      if (res?.status === 201) {
        navigate(
          `/apply-to-job/job-form/build-profile/${res?.data?.data?._id}`
        );
      }
      setActive(false);
    });
  };
  const { Option } = Select;

  return (
    <div className="back-img-job">
      <Layout className="wrap-job">
        <div className="form-section-job">
          <Title
            level={3}
            style={{ textAlign: "center", padding: "16px 50px 10px 50px" }}
          >
            Join HireMePrivate.com Today!
          </Title>
          <hr />
          <div style={{ padding: "10px 10px 0px 10px" }}>
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              onFinish={handleSubmit}
            >
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
                <Input placeholder="Username" size="large" autoComplete="off" />
              </Form.Item>
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
                  size="large"
                  autoComplete="off"
                />
              </Form.Item>
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
                <Input placeholder="Phone" size="large" autoComplete="off" />
              </Form.Item>
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
                  defaultValue="what service do you offer?"
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
                  size="large"
                  autoComplete="off"
                />
              </Form.Item>
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
                  size="large"
                  autoComplete="off"
                />
              </Form.Item>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                style={{ maxWidth: "350px" }}
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("must accept agreement")),
                  },
                ]}
              >
                <Checkbox>
                  you agree to our Terms of Use and Privacy Policy. You must be
                  18 years or older to use HireMePrivate.com.
                </Checkbox>
              </Form.Item>
              <Form.Item>
                {isActive === false ? (
                  <Button
                    htmlType="submit"
                    style={{
                      backgroundColor: "maroon",
                      color: "white",
                      padding: "0px 25px 0px 25px",
                      borderRadius: "10px",
                    }}
                  >
                    Join Now
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
      </Layout>
    </div>
  );
};

export default JobForm;
