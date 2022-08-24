import React from "react";
import "../style.css";
import houseKeeper2 from "../../../../assets/images/housekeeper-cover-1.jpeg";
import houseKeeper1 from "../../../../assets/images/housekeeper-cover-2.jpg";
import { useNavigate } from "react-router-dom";

const HouseKeeperContractsBeforeHire = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">
            Housekeeper contracts: What to consider before you hire
          </div>
          <img src={houseKeeper2} alt="cover-img" />
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
              <h2>What should your housekeeper contract include?</h2>
              <ul>
                <li>
                  Detailed list of duties. Make sure you spell out every area of
                  your home that should be cleaned, along with how often it
                  should be cleaned. While mopping floors may be a weekly task,
                  dusting the blinds may only need to be done on a monthly
                  basis. This also keeps you honest because if you want your
                  housekeeper to clean the counters and sink in your kitchen,
                  you need to make sure there are no dirty dishes laying around
                  when they get to your home.
                </li>
                <li>
                  An expected schedule to follow. Spell out how often you want
                  your housekeeper to come to your home (weekly, twice per week,
                  monthly) and what times of the day are ideal.
                </li>
                <li>
                  Terms of payment. This should be listed as an hourly rate,
                  rate per room, rate by task or whatever you’ve agreed to with
                  your housekeeper in order to easily calculate the total fee
                  for each visit. You should also specify if your housekeeper
                  will be paid by the job, weekly, bi-weekly, etc. and how you
                  will pay them (cash, check, credit card, etc.).
                </li>
                <li>
                  Establish who provides the necessary supplies. Don’t just
                  assume your housekeeper will bring over a vacuum and the
                  necessary cleaners to get the job done to your liking. This is
                  especially important if you or your children have allergies to
                  certain chemicals and require specific brands of cleaners to
                  be used in your home.
                </li>
                <li>
                  List any off-limits areas of your home. Be clear about any
                  rooms that you don’t wish your housekeeper to enter or any
                  items they should not touch. Your housekeeper wants to do a
                  thorough job and needs to know if it’s okay to skip parts of
                  your home.
                </li>
                <li>
                  Have a kid and pet policy. If you have pets, it’s likely best
                  to put them in a restricted area while your housekeeper is
                  cleaning to avoid any issues. The same goes for children. If
                  you have little ones, it might be a good idea to take them out
                  of the house, or at least out of the way, for a bit so that
                  the housekeeper can do their job without distractions.
                </li>
                <li>
                  How to handle last-minute requests. If any services are not
                  listed in your contract that you happen to want your
                  housekeeper to address, explain how much notice you will give
                  them to add it to their list of tasks and how much extra
                  you’re willing to pay for it.
                </li>
                <li>
                  Terms for ending the relationship. Tell your housekeeper how
                  much notice you’ll give them if you no longer wish to use
                  their services. Also be specific on whether this can be done
                  in writing or verbally over the phone.
                </li>
              </ul>
            </div>
            <div>
              <h2>Positive Reviews</h2>
              <p>
                Whenever you find a house cleaning service that interests you,
                you must look into their reviews to determine whether they’d be
                a good fit for you. If a house cleaner has poor reviews, it’s
                because they don’t provide quality services. Using Reviews, you
                can find reviews for house cleaners whenever you search for
                them. While going through them, read both positive and negative
                reviews. This will give you a better understanding of what the
                pros and cons are of a house cleaning service.
              </p>
              <p>
                Hiring a housekeeper doesn’t have to be a difficult process, but
                you can’t go with someone that doesn’t have a good reputation.
                Even when someone refers you to a house cleaner, look them up so
                you can learn more about them and the experiences that others
                have had.
              </p>
            </div>
            <div>
              <h2>Decide on a flat fee or an hourly fee</h2>
              <p>
                When considering hiring a housekeeper, one of the things that
                you might have to decide is if you're going to pay by the hour
                or pay a flat fee, though the housekeeper or company might have
                their own non-negotiable policies.
              </p>
              <p>
                If you pay by the hour, a lot of people worry that a housekeeper
                will stretch out jobs to take more time. However, paying a flat
                rate fee might mean the housekeeper rushes through their work.
                Discuss the options with your chosen housekeeper.
              </p>
            </div>
            <div>
              <h2>Decide on Tasks</h2>
              <p>
                Certain house-cleaning tasks are standard, such as sweeping,
                mopping, and scrubbing the showers and toilets. However, you
                might have to negotiate any additional tasks, such as laundry or
                dishes, to be done regularly. Sometimes, you can also request to
                add duties a couple of times per year, such as cleaning the
                fridge or ovens.
              </p>
              <p>
                A housekeeper's insurance might limit certain duties; for
                example, house cleaners aren't often allowed to clean the
                exterior of windows. Any tasks that require climbing on ladders
                to great heights, like cleaning chandeliers or the tops of
                cabinets might be denied, too.
              </p>
            </div>
            <div>
              <h2>Agree to a trial period</h2>
              <p>
                So you interviewed and found the perfect candidate to keep your
                home clean. Now you're ready to hire them and live happily ever
                after? It's a good idea to start with a trial period of two-four
                weeks.
              </p>
              <p>
                This will give them time to get used to your expectations and
                give you an opportunity to let them settle into what your home
                is in need of. Any less time​ and you might not get a fair
                assessment of what they are really capable of. If you're not
                satisfied after several visits and clear expectations, then
                there's a good chance that this relationship isn't going to
                work. A trial period protects you and the housekeeper.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate(
                "/care-taker-member/handy-resource/communicate-to-housekeeper"
              )
            }
          >
            <h1>Related Articals</h1>
            <img src={houseKeeper1} alt="image" />
            <h3>
              Effective communication with your house cleaner for better service
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseKeeperContractsBeforeHire;
