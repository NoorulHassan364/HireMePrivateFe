import React from "react";
import "../style.css";
import specialneeds1 from "../../../../assets/images/specialneeds-cover-1.jpg";
import specialneeds2 from "../../../../assets/images/specialneeds-cover-2.jpg";
import { useNavigate } from "react-router-dom";

const BenifitsOfSpecialneeds = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">
            Benefits of Home Care for Adults with Special Needs
          </div>
          <img src={specialneeds2} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                Home care services are not just for seniors! People of any age
                with chronic illness or disabilities can benefit as well. These
                days adults with special needs have a wide range of options to
                live more independently than ever. People with Down syndrome,
                autism, and other intellectual and developmental disabilities
                can live and work successfully in their communities.
              </p>
            </div>
            <div>
              <h2>Improves Quality of Life</h2>
              <p>
                Whether it’s going to work, visiting friends and family, or
                taking part in recreational activities, we find meaning in
                living independent lives. Your loved one with special needs can
                also live a rich and fulfilling life. Professional caregivers
                can provide extra support for adults with disabilities so that
                they are able to participate fully in their communities.
              </p>
              <p>Home caregivers can assist with things like:</p>
              <ul style={{ marginLeft: "40px" }}>
                <li>Household tasks</li>
                <li>Personal care and hygiene</li>
                <li>Recreational and community activities</li>
                <li>Managing medications</li>
                <li>Groceries and errands</li>
                <li>Meal preparation</li>
                <li>Assistance with mobility and ambulation</li>
              </ul>
              <p>
                The right support can provide family caregivers with a much
                needed break which can help you find the right balance between
                providing care and promoting independence for your loved one.
                Balance and stability are crucial for adults with special needs
                to continue living independently at home.
              </p>
            </div>
            <div>
              <h2>Incorporates Community Inclusion</h2>
              <p>
                Integrating adults with special needs into the community is the
                norm today. There are many home-based and community options such
                as:
              </p>
              <ul style={{ marginLeft: "40px" }}>
                <li>Adult group homes</li>
                <li>Living independently (with or without supports)</li>
                <li>Living in-home with family</li>
                <li>Adult foster homes</li>
                <li>Adult Day Programs</li>
              </ul>
              <p>
                Many families find that home care helps them support their
                special needs loved ones. In many cases home care provides the
                necessary assistance for special needs individuals to live
                independently in their community or stay in the family home.
              </p>
              <p>
                Parents generally provide the majority of support for children
                with special needs and many continue to support their children
                into adulthood. Depending on what is available in your
                community, services like job coaching, vocational
                rehabilitation, day programs, and community transition programs
                may be accessible. Home care professionals can help your loved
                one prepare for the day, assist with mobility, and help out with
                transportation to these programs.
              </p>
            </div>
            <div>
              <h2>Supports Autonomy and Independence</h2>
              <p>
                Adults with intellectual and developmental disabilities are
                still adults who deserve to have their wishes to live an
                independent lifestyle be respected just like anyone else. For
                many parents, even ones that are aware of the benefits of
                increased autonomy, this transition can be a challenging one.
              </p>
              <p>
                Celebrate independence! You can do this by focusing on your
                child’s strengths and skills, and by working with them to learn
                what supports and services will be best. You may need to take a
                step back in order to allow your child to grow. Notice what your
                child is now able to do on their own or with a home care
                provider who supports them and encourages these changes.
              </p>
              <p>
                There will be many opportunities for you to care for your loved
                one, and as a caregiver it is recommended to adapt your role to
                allow them room to grow and experience as many different aspects
                of life as possible.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate(
                "/care-taker-member/handy-resource/special-needs-responsibilities"
              )
            }
          >
            <h1>Related Articals</h1>
            <img src={specialneeds1} alt="image" />
            <h3>What Does a Special Needs Caregiver Do?</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenifitsOfSpecialneeds;
