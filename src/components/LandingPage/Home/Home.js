import React from "react";
import { Layout, Typography, Button } from "antd";
import image1 from "../../../assets/images/image_2.jpg";
import image3 from "../../../assets/images/image_1.jpg";
import image2 from "../../../assets/images/image_3.jpg";
import { Carousel } from "antd";
import "./Home.css";

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Carousel effect="fade" autoplay easing={true}>
        <div className="cover_img_1">
          <div className="cover_section">
            <div className="parent">
              <div className="title">
                In Home Care That <br /> Elevates the Human Spirit
              </div>
              <div class="text">
                The care you need in the place you want. Discover the difference
                Visiting Angels will make in the life of your loved one.
              </div>
              <Button className="home_button">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="cover_img_2">
          <div className="cover_section">
            <div className="parent">
              <div className="title">
                In Home Care That <br /> Elevates the Human Spirit
              </div>
              <div class="text">
                The care you need in the place you want. Discover the difference
                Visiting Angels will make in the life of your loved one.
              </div>
              <Button className="home_button">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="cover_img_3">
          <div className="cover_section">
            <div className="parent">
              <div className="title">
                In Home Care That <br /> Elevates the Human Spirit
              </div>
              <div class="text">
                The care you need in the place you want. Discover the difference
                Visiting Angels will make in the life of your loved one.
              </div>
              <Button className="home_button">Learn More</Button>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Home;
