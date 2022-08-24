import React from "react";
import "../style.css";
import errands1 from "../../../../assets/images/errands-cover-1.webp";
import errands2 from "../../../../assets/images/errands-cover-2.jpg";
import { useNavigate } from "react-router-dom";

const ErrandsResponsibilities = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">Errands and oddJobs Qualities</div>
          <img src={errands1} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                If you want to be resourceful, you can earn extra income by
                helping clients with quick jobs. You can help people with tasks
                when they don't have the time, knowledge or skills to do tasks
                themselves. Since odd jobs are short-term, they can supplement a
                person's income while between jobs or bring in extra cash flow.
                Odd jobs add experience to a resume. Also, the contacts you make
                could lead to permanent employment.
              </p>
            </div>
            <div>
              <h2>Skills and Availability</h2>
              <p>
                Examples of odd jobs run the gamut from unskilled to
                professional, depending on your skills and availability. For
                instance, you might be available to help a business distribute
                flyers on weekends. Or with basic carpentry or plumbing skills,
                you could assemble furniture or fix a leaking toilet. With
                organizational and management skills, you could run a garage
                sale. Teachers can provide tutoring services. When you have a
                greater variety of skills, you have a wider opportunity to find
                odd jobs.
              </p>
            </div>
            <div>
              <h2>Find a job with flexibility</h2>
              <p>
                Seeking a job that provides a flexible schedule and encourages a
                good work-life balance can help you manage professional and
                personal responsibilities. It's also useful to consider the
                hours you're able to work and apply to jobs with this
                availability or operation hours. For example, if you take your
                kids to school in the morning, you may benefit from finding a
                job that allows you to start a shift later in the morning.
              </p>
            </div>
            <div>
              <h2>Develop time management skills</h2>
              <p>
                Developing time management skills enables you to optimize your
                use of time during the day. You can try time management
                strategies such as creating a to-do list, making a weekly
                schedule, using a planner or prioritizing your tasks. The
                ability to manage your time helps reduce procrastination,
                achieve goals, increase your productivity and allows you to
                stress less.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate("/care-taker-member/handy-resource/errands-benifits")
            }
          >
            <h1>Related Articals</h1>
            <img src={errands2} alt="image" />
            <h3>What actually the benifits of errands service?</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrandsResponsibilities;
