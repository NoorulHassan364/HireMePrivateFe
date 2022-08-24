import React from "react";
import "../style.css";
import babysitter1 from "../../../../assets/images/babysitter-cover-1.jpg";
import babysitter2 from "../../../../assets/images/babysitter-cover-2.jpg";
import { useNavigate } from "react-router-dom";

const BenifitsOfNanny = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">
            Benefits to consider offering your nanny
          </div>
          <img src={babysitter2} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                When hiring a nanny, some families put all the focus on hours
                and base pay and overlook the equally important aspect of
                providing their nanny with employment benefits. Like other
                professionals, most nannies expect — and should get — job
                benefits that guarantee them paid time off, mileage
                reimbursement and other perks that make their jobs more secure
                and worthwhile. Think of it this way: Nannies have one of the
                most important jobs out there in raising your children and the
                next generation. Why shouldn’t they receive the same benefits
                other professionals get?
              </p>
              <p>
                While an extensive nanny benefits package is not a requirement
                for hiring, it’s important to remember that the nanny industry
                is highly competitive and ensuring the best quality child care
                means being willing to provide standard employment benefits
                commensurate with a nanny’s skill level and experience. Here are
                11 benefits you should consider offering when hiring a nanny.
              </p>
            </div>
            <div>
              <h2>The benefits of hiring a nanny include:</h2>
              <ul>
                <li>
                  Sole-focused care for your child or children, which means that
                  the nanny will get to know your child or children well enough
                  to know their needs and attend to them efficiently and
                  attentively. This means that the care they provide will be
                  sole tailored to the needs of your children, ensuring that
                  they get the most out of their day.
                </li>
                <li>
                  Children will have the security of having a strong attachment
                  base from their nanny, whilst their parents/primary care are
                  away from home. This helps children to feel emotional strong,
                  safe and willing to take part in every day life. Parents can
                  also feel reassured that their child is able to form a loving
                  relationship with a nanny who knows them well and has
                  emotional attachment rather than just a care giving/work
                  attachment relationship.
                </li>
                <li>
                  Nannies will try to make the child’s day as productive as
                  possible, offering children a variety of activities, such as
                  play groups, playtime, outings, educational visits and
                  activities, which ensure children get the most out of the day
                </li>
                <li>
                  Nannies can teach your child a language. With the many
                  benefits of being bilingual, many parents are opting for
                  nannies who speak a foreign language in order to teach their
                  children.
                </li>
                <li>
                  Routines can be tailored to the needs of the child, which can
                  help children to feel secure, safe and as alert as possible.
                </li>
                <li>
                  Nannies are capable of arranging the child’s day to life,
                  which can ease the strain from busy parents. Parents will have
                  the reassurance that their child’s day is organised, safe and
                  stimulating and that their child is being cared for well
                </li>
                <li>
                  Due to the nature of working closely with families, nannies
                  will often help out when needed, for example longer/extra
                  hours subject to prior arrangement, which means families can
                  be reassured that they have child care when they need it
                </li>
                <li>
                  Trust issues are higher due to the personal working
                  relationships between nanny and the family. There are
                  opportunities to discuss issues/problems and/or successes so
                  that the child, who is the main priority gets the care they
                  deserve
                </li>
                <li>
                  Having a nanny, will also help children to become familiar to
                  other people, and due to the activities that nannies will
                  arrange for the child, the child will enjoy a rich and varied
                  day, which will aid their social, personal and physical
                  development
                </li>
              </ul>
            </div>
            <div>
              <h2>Health insurance reimbursement</h2>
              <p>
                Health insurance is fast becoming a standard benefit for
                nannies, either by employers purchasing health insurance plans
                for their nannies or by reimbursing them for the partial cost of
                a plan. Employers can use the federal exchange to find a health
                plan if they wish to cover the full cost of health insurance.
                The other option is to reimburse a nanny for the cost of their
                premiums. However, nannies must obtain health insurance through
                a private exchange or directly from an insurance company if they
                wish to be reimbursed. Per the Affordable Care Act, employers
                cannot reimburse employees for the cost of premiums on insurance
                plans obtained through the federal exchange without being
                subject to additional taxes and fees.
              </p>
            </div>
            <div>
              <h2>Mileage reimbursement</h2>
              <p>
                Whenever a nanny uses her personal car for on-the-job
                transportation, she needs to be reimbursed. “So for example,
                driving the kids to and from school, going grocery shopping,
                running errands and even driving the kids to and from a
                playdate,” says Provinziano. “Keep track of her mileage, and she
                should be reimbursed with the IRS standard mileage rate, which
                changes each year.”
              </p>
              <p>
                Currently, the rate set forth by the IRS is 62.5 cents for every
                mile of business travel driven. Employees do have the option of
                calculating the actual costs of using their vehicle rather than
                using the standard mileage rates. However, per the IRS,
                employers cannot claim deductions for paying both mileage and
                depreciation. It must be one or the other.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate(
                "/care-taker-member/handy-resource/babysitter-responsibilities"
              )
            }
          >
            <h1>Related Articals</h1>
            <img src={babysitter1} alt="image" />
            <h3>
              What to look for in a babysitter: traits and responsibilities
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenifitsOfNanny;
