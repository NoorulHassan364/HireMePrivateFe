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
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { UserAPI } from "../../api";
import "./Profile.css";

const { TabPane } = Tabs;
const { Text } = Typography;
const FormItem = Form.Item;
const GeneralTab = ({ user, image }) => {
  debugger;
  const [form] = Form.useForm();
  const [isActive, setActive] = React.useState(false);

  React.useEffect(() => {
    console.log(user);
    if (user) {
      form.setFieldsValue(user);
    }
  }, [user]);

  const onChange = (key) => {
    console.log(key);
  };
  const handleSubmit = (values) => {
    console.log("hi image", image);
    // debugger;
    if (image !== undefined) {
      const formData = new FormData();

      for (const key in values) {
        if (Array.isArray(values[key])) {
          formData.append(key, values[key]);
        } else {
          formData.append(key, values[key]);
        }
      }

      formData.append("profileImg", image);
      setActive(true);
      UserAPI.updateUser(user?._id, formData).then((res) => {
        setActive(false);
      });
    } else {
      setActive(true);
      UserAPI.updateUser(user?._id, values).then((res) => {
        setActive(false);
      });
    }
  };
  const onCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    console.log(user);
  };
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        onFinish={handleSubmit}
        requiredMark={false}
      >
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
            <TextArea
              rows={4}
              placeholder="Enter Address"
              autoComplete="off"
              prefix={<UserOutlined />}
              size="large"
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="careNeeds" label="Looking For">
            <Checkbox.Group
              style={{
                width: "100%",
                paddingBottom: 15,
              }}
              onChange={onCheck}
            >
              <Row style={{ paddingLeft: "10px" }}>
                <Col span={8}>
                  <Checkbox value="Child care">Child care</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Special needs">Special needs</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Senior care">Senior care</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Pet care">Pet care</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="House keeping">House keeping</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Day care">Day care</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Errands & oddJobs">
                    Errands & oddJobs
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Tutoring & lessons">
                    Tutoring & lessons
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </div>
        <Form.Item style={{ textAlign: "right" }}>
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
  );
};

export default GeneralTab;
