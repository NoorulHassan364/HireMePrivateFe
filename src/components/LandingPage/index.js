import {
  BulbOutlined,
  HeartOutlined,
  LikeOutlined,
  MessageOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React from "react";
import Cards from "./Cards/Cards";
import Home from "./Home/Home";
import Care from "./Care/Care";
import Reviews from "./Reviews/Reviews";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Emergency from "./Emergency/EmergencyCare";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHoldingChild,
  faHandHoldingHand,
  faPersonChalkboard,
  faHouseChimney,
  faCloudSun,
  faShieldDog,
} from "@fortawesome/free-solid-svg-icons";
const LandingPage = () => {
  const cards_array = [
    {
      title: "Home Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iusto.",
      icon: (
        <FontAwesomeIcon
          icon={faHandsHoldingChild}
          style={{ color: "black !important" }}
        />
      ),
    },
    {
      title: "Senior Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iusto.",
      icon: <FontAwesomeIcon icon={faHandHoldingHand} />,
    },
    {
      title: "Tutoring",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iusto.",
      icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    },
    {
      title: "House Keeping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iusto.",
      icon: <FontAwesomeIcon icon={faHouseChimney} />,
    },
    {
      title: "Day Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iusto.",
      icon: <FontAwesomeIcon icon={faCloudSun} />,
    },
    {
      title: "Pet Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iusto.",
      icon: <FontAwesomeIcon icon={faShieldDog} />,
    },
  ];

  const care_array = [
    {
      title: "Care Advices",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos culpa repudiandae eaque porro dolor.",
      icon: <SafetyCertificateOutlined />,
    },
    {
      title: "Easy to Use",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos culpa repudiandae eaque porro dolor.",
      icon: <HeartOutlined />,
    },
    {
      title: "Our Tips",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos culpa repudiandae eaque porro dolor.",
      icon: <BulbOutlined />,
    },
    {
      title: "Lots of Choice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos culpa repudiandae eaque porro dolor.",
      icon: <LikeOutlined />,
    },
  ];
  return (
    <>
      <Home />
      <Cards cards={cards_array} />
      <Care />
      <Emergency />
      <WhyChooseUs cards={care_array} />
      <Footer />
    </>
  );
};

export default LandingPage;
