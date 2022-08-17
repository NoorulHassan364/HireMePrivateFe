import React from "react";
import "./Care.css";
import care_1 from "../../../assets/images/care_1.jpg";
import care_2 from "../../../assets/images/care_2.jpg";
import care_3 from "../../../assets/images/care_3.jpg";
import care_4 from "../../../assets/images/care_4.jpg";
import care_5 from "../../../assets/images/care_5.jpg";
import care_6 from "../../../assets/images/care_6.jpg";
import care_7 from "../../../assets/images/care_7.jpg";

import Gallery from "react-photo-gallery";

const Care = () => {
  const photos = [
    {
      src: care_1,
      width: 1,
      height: 1,
    },
    {
      src: care_2,
      width: 1,
      height: 1,
    },
    {
      src: care_3,
      width: 2,
      height: 1,
    },

    {
      src: care_6,
      width: 1,
      height: 1,
    },
    {
      src: care_5,
      width: 1,
      height: 1,
    },
  ];

  const photos1 = [
    {
      src: care_4,
      width: 2,
      height: 1,
    },
    {
      src: care_7,
      width: 2,
      height: 1,
    },

    {
      src: care_1,
      width: 2,
      height: 1,
    },
  ];
  return (
    <div>
      <div className="care_header">
        <span style={{ color: "green" }}>Caring </span>
        <span style={{ color: "rgb(60, 189, 129)" }}>is a way of Life..</span>
      </div>
      <Gallery photos={photos} margin={0} />
      <Gallery photos={photos1} margin={0} />
      {/* <div className="care_section">
        <div className="care_header">
          <span style={{ color: "green !important" }}>Caring </span>is a way of
          Life..
        </div>
        <div className="gallery">
          <div className="first_sec">
            <div className="first_img">
              <img src={care_1} alt="care-img" />
            </div>
            <div className="first_img">
              <img src={care_1} alt="care-img" />
            </div>
            <div className="first_img">
              <img src={care_1} alt="care-img" />
            </div>
            <div className="first_img">
              <img src={care_1} alt="care-img" />
            </div>
          </div>
          <div className="second_sec">
            <div className="second_img">
              <img src={care_1} alt="care-img" />
            </div>
          </div>
          <div className="third_sec">
            <div className="third_img">
              <img src={care_1} alt="care-img" />
            </div>
            <div className="third_img">
              <img src={care_1} alt="care-img" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Care;
