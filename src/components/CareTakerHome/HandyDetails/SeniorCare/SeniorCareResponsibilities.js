import React from "react";
import "../style.css";
import seniorcare1 from "../../../../assets/images/seniorcare-cover-1.jpeg";
import seniorcare2 from "../../../../assets/images/seniorcare-cover-2.jpg";

import { useNavigate } from "react-router-dom";

const SeniorCareResponsibilities = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">
            Duties and Responsibilities of a Senior Caregiver
          </div>
          <img src={seniorcare1} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                Cleaning, grocery shopping, cooking, helping with medical
                appointments, and managing medications are some of the duties of
                an elderly caregiver. But your responsibilities will ultimately
                depend on your loved one’s health and needs. If you feel you are
                unable to maintain the level of care your loved one needs, it
                may be time to look into assisted living. At Surpass Senior
                Living, we offer all of the care and assistance for your loved
                one to live their best life.
              </p>
            </div>
            <div>
              <h2>Assess medical needs</h2>
              <p>
                Checking on your senior loved one’s health is an important
                caregiver responsibility. You may need to help keep track of
                medical appointments, manage medications and chronic conditions,
                or assess pain levels. It’s a good idea to discuss your loved
                one’s health with their doctor and other health professionals
                regularly.
              </p>
            </div>
            <div>
              <h2>Prepare a care plan</h2>
              <p>
                Preparing a care plan that addresses your senior loved one’s
                care needs and goals can be helpful when you begin your
                caregiving journey. A plan can help you determine how many hours
                of care a day your loved one will require and whether you need
                additional help to ensure his or her health and safety.
              </p>
            </div>
            <div>
              <h2>Assist with basic needs</h2>
              <p>
                Memory and mobility issues can make even basic needs such as
                eating, bathing, grooming, and toileting — commonly referred to
                as “activities of daily living,” or ADLs — difficult. Check-in
                often and pay attention to specific signs and changes to
                determine if your loved one needs extra help.
              </p>
            </div>
            <div>
              <h2>Provide companionship</h2>
              <p>
                One of the most essential but sometimes overlooked parts of
                caregiving is companionship. Feelings of loneliness in older
                adults can lead to serious health consequences including
                depression. When you care for an aging loved one, you are
                creating opportunities to strengthen your bond and connection.
              </p>
            </div>
            <div>
              <h2>Help with housekeeping</h2>
              <p>
                As your loved one ages, maintaining a home can become
                increasingly difficult. Older adults may need help with dishes,
                taking out the garbage, or vacuuming. If your loved one lives in
                a house, yard work, snow shoveling, and daily maintenance may be
                too much for them to handle even with your help. Consider
                whether your loved one would benefit from the convenience and
                support of a senior living community.
              </p>
            </div>
            <div>
              <h2>Monitor medications</h2>
              <p>
                Older adults often take several prescription medications to
                treat chronic conditions. Your loved one may need help keeping
                track of their medication list, understanding drug interactions,
                and taking prescribed dosages at the right time. You can help
                lower your loved one’s risk of overmedicating by creating
                reminder systems and monitoring his or her medications.
              </p>
            </div>
            <div>
              <h2>Prepare meals</h2>
              <p>
                Food preparation can become increasingly difficult with age. If
                your loved one lives alone, they may lack the energy or
                motivation to cook. In some cases, memory and balance issues may
                make cooking unsafe. As a caregiver, you can help with grocery
                shopping, preparing meals or finding alternatives to ensure your
                loved one gets proper nutrition.
              </p>
            </div>
            <div>
              <h2>Assist with transfer and mobility</h2>
              <p>
                Falls are a major risk to the health of older adults. Your loved
                one may have difficulty moving or transferring — from their bed
                in the morning to a chair in the afternoon, for instance. As a
                caregiver, you can take steps to help prevent falls and help
                your loved one stay safe and comfortable.
              </p>
            </div>
            <div>
              <h2>Provide transportation</h2>
              <p>
                As your loved one ages, public transportation or driving may no
                longer be safe options. You may need to look for senior
                transportation alternatives to get your loved one to doctor’s
                appointments and other activities.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate(
                "/care-taker-member/handy-resource/benifits-of-seniorcare"
              )
            }
          >
            <h1>Related Articals</h1>
            <img src={seniorcare2} alt="image" />
            <h3>Advantages & Benefits of Home Care for Seniors</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeniorCareResponsibilities;
