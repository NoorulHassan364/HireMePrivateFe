import React from "react";
import "../style.css";
import houseKeeper1 from "../../../../assets/images/housekeeper-cover-2.jpg";
import houseKeeper2 from "../../../../assets/images/housekeeper-cover-1.jpeg";
import { useNavigate } from "react-router-dom";

const CommunicateToHouseKeeper = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">
            Effective communication with your house cleaner for better service
          </div>
          <img src={houseKeeper1} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                After diligently searching online and getting recommendations
                from friends, you’ve finally found a housekeeper that fits all
                of your criteria. Now the next step is to make sure your
                housekeeping contract is ideal so you’re clear about all the
                terms of employment. But since every home is unique and every
                homeowner has different standards for how they like things
                tidied up, it’s reasonable to assume most house cleaning
                contracts will also have some customization added to them.
              </p>
              <p>
                If you hired an agency to take care of your housekeeping needs,
                expect them to provide their own contract for you to review.
                However, if you are hiring an individual, you probably will need
                to write your own. Regardless of what hiring choice you made,
                there are a few housekeeping contract best practices you should
                keep in mind.
              </p>
            </div>
            <div>
              <h2>Kick off the relationship right</h2>
              <p>
                When you first hire your house cleaner, it’s important to ask a
                lot of questions about how they do business and also to express
                your expectations. Some cleaners will have a checklist of tasks
                they typically perform while others will want to know what
                services you want completed. “My cleaner visited the house to
                give an estimate and ran through the items she’d clean while
                here and what type of products she’d use,” says Lynda.
              </p>
              <p>
                When Lynda mentioned that she prefers some eco-friendly products
                to the ones her cleaner uses, together they decided that Lynda
                would provide those products for the cleanings. “It is extremely
                important to communicate well so that everyone is on the same
                page as far as policies, expectations and what to expect when
                working with one another,” says Mary Cherry owner of residential
                cleaning service, Evie’s Cleaning Company in Houston. “Cleaners
                want to know your preferences.”
              </p>
            </div>
            <div>
              <h2>Know that special requests can cost extra</h2>
              <p>
                If you do want a service that’s outside the usual scope for your
                house cleaner, it might be doable, but you’ll have to ask
                clearly. “Ask them what is included in a standard cleaning,”
                says Aaron. “If there’s anything else you need them to do, ask
                them to do it, but be prepared to pay extra.”
              </p>
              <p>
                Aaron gives the example of a client who has an aging dog that
                frequently pees on the carpet. That client has asked her to deep
                clean the carpet for her during regular visits. “She pays me
                extra to do the deep clean,” says Aaron. “Every time I go to her
                house, I’m prepared to get urine stains out of the carpet. If
                she hadn’t made this clear and agreed to compensate me
                accordingly, I wouldn’t do this.”
              </p>
            </div>
            <div>
              <h2>Communicate the good and the bad</h2>
              <p>
                “If one of our customers felt they didn’t get the quality care
                they expected, we strongly encourage them to let us know so we
                can make sure we get it right the next time,” says Claire
                Zeysing, founder and CEO of Make It Shine in Las Vegas. “We are
                constantly looking for feedback. We believe there is always room
                for improvement.” How often you communicate with your cleaners
                is up to you — Aaron says some clients text her every week,
                often just to say she did a good job or to ask her to perform
                new tasks, and some hardly ever contact her.
              </p>
              <p>
                “Even with the latter group, I make sure to reach out at least
                once a month to make sure that they’re happy and ask if there’s
                anything else they need,” says Aaron. So don’t be shy! Your
                cleaners likely want to hear from you, whether it’s a compliment
                or a note that you’d like the grout to be scrubbed more
                thoroughly next time.
              </p>
            </div>
            <div>
              <h2>Conclusion</h2>
              <p>
                Cleaning companies can provide excellent service under the right
                conditions. If you’re someone constantly busy at work or someone
                who prefers to relax during the weekends, hiring a professional
                cleaning service should be your ticket to a clean home.
              </p>
              <p>
                Do you need help in keeping your house clean? VepoClean is
                Hoboken’s best cleaning service provider. We take pride in our
                meticulous cleaning processes and extraordinary customer
                service. Book an appointment today and experience living a
                cleaner, healthier life.
              </p>
            </div>
            <div>
              <h2>The ‘tip’-ping Point</h2>
              <p>
                Like any other service, house cleaning calls for tips, as well.
                The rate is on par with the industrial standard of 10-20%. You
                can choose to give tip at the end of each cleaning or during the
                holidays. Regardless of when you do, it is vital to give tips if
                you want high-quality service and a cleaner that stays with you
                for a longer period.
              </p>
              <p>
                “Tipping standards are on par with other service industry jobs:
                10-20%,” says Aaron. “If you have a good cleaner and you want to
                keep them, I’d recommend tipping on the higher end of that
                spectrum.” That’s something you can ask about too — whether a
                tip is included in the cost or expected. In fact, let that
                question be one of many that you openly ask your cleaners about
                their service. As Oliveira puts it, “Trust and respect are
                fostered when both parties can communicate without hesitation.”
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate(
                "/care-taker-member/handy-resource/housekeeper-contracts-before-hire"
              )
            }
          >
            <h1>Related Articals</h1>
            <img src={houseKeeper2} alt="image" />
            <h3>Housekeeper contracts: What to consider before you hire</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunicateToHouseKeeper;
