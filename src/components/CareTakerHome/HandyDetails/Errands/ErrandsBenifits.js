import React from "react";
import "../style.css";
import errands1 from "../../../../assets/images/errands-cover-1.webp";
import errands2 from "../../../../assets/images/errands-cover-2.jpg";
import { useNavigate } from "react-router-dom";

const ErrandsBenifits = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">
            What actually the benifits of errands service?
          </div>
          <img src={errands2} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                This article has the great information about Errands Services.
                We have gathered some points for advantages and disadvantages of
                running an errands services, going trhrough the content can help
                you to make your choices.
              </p>
            </div>
            <div>
              <h2>Professionalism and Expertise</h2>
              <p>
                Since potential customers have such a wide range of needs, you
                should concentrate on the areas where you have the most
                knowledge and expertise. For example, present yourself as
                someone who can help people reorganise their workspaces and
                better manage their time if you have good organisational and
                management skills.
              </p>
            </div>
            <div>
              <h2>Take Control of Your Own Destiny</h2>
              <p>
                You gain leverage over your availability and the number of jobs
                you are willing to take on in a day or a week because you are
                your own boss.
              </p>
            </div>
            <div>
              <h2>There is No Need for Training</h2>
              <p>
                To work as an errand service provider, no special course, degree
                programme, or credential is required. Relative practice, on the
                other hand, is often beneficial. If you have prior experience as
                a personal assistant, this will also help you retain clients,
                and you will receive positive referrals from previous clients.
              </p>
            </div>
            <div>
              <h2>Connectivity</h2>
              <p>
                This type of work gives you a great chance to form fresh,
                long-term relationships with your clients. You can also use the
                relationships you already have to develop a strong client base
                for your company.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate(
                "/care-taker-member/handy-resource/errands-responsibilities"
              )
            }
          >
            <h1>Related Articals</h1>
            <img src={errands1} alt="image" />
            <h3>What actually the benifits of errands service?</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrandsBenifits;
