import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = (props) => {
  return (
    <div className="wcs_main">
      <div className="header_wcs">Why Choose Us</div>
      <div className="card_main_wcs">
        {props?.cards?.map((item) => {
          return (
            <>
              <div className="card_wcs">
                <div className="icon_wcs">{item?.icon}</div>
                <div className="title_wcs">{item?.title}</div>
                <div className="description_wcs">{item?.description}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
