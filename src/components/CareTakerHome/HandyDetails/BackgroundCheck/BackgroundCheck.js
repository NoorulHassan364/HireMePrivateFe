import React from "react";
import "../style.css";
import commonIssue from "../../../../assets/images/common-issue-cover.jpg";
import backgroundCheck from "../../../../assets/images/background-checks-cover.jpg";
import { useNavigate } from "react-router-dom";

const BackgroundChecks = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">
            Background checks: What every family needs to know before hiring a
            caregiver
          </div>
          <img src={backgroundCheck} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                If you were considering hiring an employee for your business,
                you’d run a background check on them, right? So why wouldn’t you
                do this for someone who will be working in your home or with
                your kids or loved ones? Many people hire caregivers based on
                interviews and the good word of references, but this often won’t
                uncover past misdeeds that could cause concern.
              </p>
              <p>
                “Hiring a caregiver is a big decision, and people want peace of
                mind,” says Tammy Tucker, of National Crime Search, Inc., a
                background screening business, which has experience screening
                nanny candidates. “Background checks can help parents ensure
                they’re hiring a trustworthy nanny to care for their children
                and to keep them safe. Many people mistakenly think they can
                just Google a person’s name and find any criminal history, but
                that method isn’t always accurate.” Here’s what you need to know
                about getting a background check for your caregiver candidates.
              </p>
            </div>
            <div>
              <h2>Why you should run a background check</h2>
              <p>
                Although background checks are not 100% reliable or accurate,
                they can help ensure your caregiver is who they say they are.
                Proper background checks can tell you a lot about a person,
                Tucker notes, including their criminal history and an idea of
                the person’s character. “Gathering as much information as
                possible about a potential caregiver will help people make an
                educated and informed hiring decision,” she says.
              </p>
              <p>
                Most background investigations raise no red flags, says Mike
                Coffey, president of background screening company Imperative in
                Fort Worth, Texas. Imperative owns PFC Information Services,
                which specializes in screening caregivers. However, at least a
                fourth of PFC’s reports identify some sort of criminal record,
                he says. Some are minor items in the distant past, but “some are
                more significant and are things you would want to know before
                you invited someone into your home,” Coffey says.
              </p>
            </div>
            <div>
              <h2>Issues background checks can uncover</h2>
              <p>
                Background checks look into criminal records and motor vehicle
                records, though the degree of thoroughness can vary by provider
                and level of scrutiny you desire. Tucker says a thorough
                background checking service looks for misdemeanors and felonies
                from the past seven to 10 years. If the caregiver will transport
                your children or loved one, she says it’s smart to run a Motor
                Vehicle Report to see if they have a valid driver license and
                any traffic violations in their state of licensure.
              </p>
              <p>
                Coffey says television dramas give the impression that criminal
                records are all available in one database, when in fact, America
                has a decentralized criminal records system. He says there’s no
                reliable nationwide database, which means that relying on
                “instant” online background checking services will miss about
                half of the criminal records that a thorough investigation will
                find.
              </p>
              <p>
                He explains that about 98% of criminal cases originate at the
                local county level, and those records usually aren’t online, so
                a good background check requires investigators to obtain records
                from individual courthouses. A quality background check can also
                look for indicators of behavior that haven’t yet risen to the
                level of a crime, Coffey says. “For instance, we’ve seen nannies
                who are subject to restraining orders from previous employers or
                family members,” he says. “This can be a big red flag for a
                family considering inviting a nanny into their home to care for
                their child.” He adds that minor theft offenses, especially
                recent ones, could also be a dealbreaker for someone you want to
                trust in your home.
              </p>
            </div>
            <div>
              <h2>The cost of a background check</h2>
              <p>
                The price of a background check varies depending on how
                extensive of a screening you want. A basic check can start
                around $60, and increases based on how much information you
                request and how many places the candidate has lived. Coffey says
                a very thorough background check typically costs about $300.
              </p>
            </div>
            <div>
              <h2>How to choose a background screening service</h2>
              <p>
                Coffey recommends avoiding any service that claims to be
                instant. Tucker also recommends choosing a background service
                that’s accredited through the National Association of
                Professional Background Screeners. “All of those companies are
                compliant with the Fair Credit Reporting Act, which sets the
                guidelines for conducting background checks,” she says. “A
                compliant company will also require the job candidate to
                complete an authorization form to run the background check and
                will have methods to verify any criminal records.”
              </p>
              <p>
                Coffey encourages families to use an employment application
                process with direct questions about the caregiver’s education,
                work experience and criminal history. After the interview
                process, let the nannies know that you plan to run a routine
                background check on your final candidates — though some
                jurisdictions require employers to make a conditional offer
                before running a background check, so make sure you know the
                laws in your state. If your candidate would like to proceed,
                then you will need them to authorize the screening when
                requested. If they refuse to comply, that may be a red flag and
                a dealbreaker for your family.
              </p>
              <p>
                “If the parents will conduct a thorough application and
                interview process, then all the background investigation should
                be is a verification that the applicant told the truth,” Coffey
                says. “And if you catch them in even a small lie, do you really
                want to trust them with your child?”
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate("/care-taker-member/handy-resource/common-issues")
            }
          >
            <h1>Related Articals</h1>
            <img src={commonIssue} alt="image" />
            <h3>Common Issues with Care Giver</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundChecks;
