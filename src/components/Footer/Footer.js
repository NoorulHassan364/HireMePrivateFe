import "./Footer.css";
import React from "react";
import Footer from "rc-footer";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
export default function Index() {
  return (
    <div className="footer_main">
      <Footer
        columns={[
          {
            title: "HireMePrivate",
            items: [
              {
                title: "Ant Design Pro",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                icon: <EnvironmentOutlined />,
                title: "New York city, USA",
                openExternal: true,
              },
              {
                icon: <PhoneOutlined />,
                title: "Phone: +92 322-1002004",
                openExternal: true,
              },
              {
                icon: <MailOutlined />,
                title: "Example@gmail.com",
              },
            ],
          },
          {
            title: "Follow Us",
            items: [
              {
                icon: <FacebookOutlined />,
                title: "Facebook",
                openExternal: true,
              },
              {
                icon: <InstagramOutlined />,
                title: "Instagram",
                // url: "https://mobile.ant.design/",
                openExternal: true,
              },
              {
                icon: <TwitterOutlined />,
                title: "Twitter",
                // url: "https://kitchen.alipay.com/",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                title: "Help",
                // url: "https://yuque.com",
                // description: "知识创作与分享工具",
                openExternal: true,
              },
              {
                title: "Privacy Policy",
                // url: "https://yunfengdie.com",
                // description: "中台建站平台",
                openExternal: true,
              },
            ],
          },
        ]}
        bottom="Copyright ® 2022 All Rights reserved by, HireMePrivate"
      />
    </div>
  );
}
