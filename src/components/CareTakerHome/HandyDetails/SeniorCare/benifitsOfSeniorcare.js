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
            Advantages & Benefits of Home Care for Seniors
          </div>
          <img src={seniorcare2} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                Researching care options for an aging loved one can be
                overwhelming and it might be tough to decide what will be best
                for your family. Some options, like moving to a residential care
                facility require making big lifestyle changes. For many
                families, home care is the best solution as it allows their
                loved one to stay in the comfort of their own home and continue
                living as they are used to. There are many benefits of home
                care.
              </p>
            </div>
            <div>
              <h2>Comfort</h2>
              <p>
                The primary benefit of home care is that your loved one is able
                to stay in the place that is most comfortable and familiar to
                them. They can sleep in their own bed, use their own bathroom,
                and continue their daily routines. Being in familiar
                surroundings can be especially beneficial for those suffering
                from progressive conditions that affect the memory such as
                dementia.
              </p>
            </div>
            <div>
              <h2>Personalized Care</h2>
              <p>
                Instead of adjusting to the schedules and routines of a care
                facility, a home care plan is customized to fit your family’s
                needs. Whether your loved one only needs assistance for a few
                hours a day, or requires full-time live in care, home care is
                flexible and adapts to what is best for each client.
              </p>
            </div>
            <div>
              <h2>Faster Recovery</h2>
              <p>
                Research shows that patients recover from surgery and illness
                faster and more successfully in the comfort of their own home.
                They also have a decreased risk of developing infection from
                exposure to germs in a medical facility and have fewer hospital
                readmissions.
              </p>
            </div>
            <div>
              <h2>One-on-one Attention</h2>
              <p>
                The personal nature of home care allows your loved one to be the
                primary focus of the caregiver. Their job is to provide a level
                of attention and care that ensures your loved one is safe and
                comfortable. Because an in-home caregiver is usually tending to
                a single client, their needs are met much faster than in a
                residential facility.
              </p>
            </div>
            <div>
              <h2>Cost Effectiveness</h2>
              <p>
                Home care rates are charged by the hour, so there is a lot of
                flexibility when it comes to out-of-pocket expense. Costs in the
                Bay Area average $24 – $35 per hour, and there is usually a
                discounted rate for 24-hour live-in care. For individuals that
                need assistance on a part-time basis, the cost of home care can
                be significantly lower than a residential nursing facility,
                which costs up to $550 per day. Long-term care insurance plans
                can also help cover the cost of home care.
              </p>
            </div>
            <div>
              <h2>Peace of mind</h2>
              <p>
                You won’t have to worry about your loved one being alone and
                falling or getting injured while performing daily activities
                such as showering and using the stove. Instead, you will be able
                to rest easy knowing they are being well cared for.
              </p>
            </div>
            <div>
              <h2>Independence</h2>
              <p>
                Loss of independence is a big concern for seniors who are
                considering care options. A huge advantage of home care is that
                your loved one is able to keep control over many aspects of
                their daily life. They get to continue living by their own
                schedule, choosing when they want to eat, sleep, and socialize.
                For seniors who no longer drive, a caregiver can help them get
                to social activities and run errands supporting their ability to
                live independently.
              </p>
            </div>
            <div>
              <h2>Companionship</h2>
              <p>
                Seniors who live alone often experience social isolation and
                feelings of loneliness which can lead to a decline in health. A
                caregiver provides your loved one with a familiar face, friendly
                conversation, and a meaningful human connection, all of which
                can have a big impact on overall health and well-being.
              </p>
            </div>
            <div>
              <h2> Family Involvement</h2>
              <p>
                Home care enables your family to be a larger part of your loved
                ones care plan. With a good home care agency, you will have a
                direct line of communication with your loved one’s caregiver and
                a care manager will provide you with frequent updates regarding
                care.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate(
                "/care-taker-member/handy-resource/senior-care-responsibilities"
              )
            }
          >
            <h1>Related Articals</h1>
            <img src={seniorcare1} alt="image" />
            <h3>Duties and Responsibilities of a Senior Caregiver</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeniorCareResponsibilities;
