import React from "react";
import "../style.css";
import babysitter1 from "../../../../assets/images/babysitter-cover-1.jpg";
import babysitter2 from "../../../../assets/images/babysitter-cover-2.jpg";
import { useNavigate } from "react-router-dom";

const BabySitterResponsibilities = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">
            What to look for in a babysitter: traits and responsibilities
          </div>
          <img src={babysitter1} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                The word babysitter can mean different things to different
                people. To some, it’s a high school student who watches their
                children on date nights. To others, it’s the experienced college
                student who’s there with their children for a few hours after
                school each day. Or maybe it’s the caregiver you rely on to get
                the kids to school a few days a week. Regardless, babysitters
                can be an integral part of your child care team, especially for
                those who don’t need the full-time support of a nanny.
              </p>
              <p>
                Before you begin the search for the perfect babysitter, it’s
                important to know exactly what type of caregiver you’re looking
                for because different types of sitters can offer different
                things in terms of experience, qualifications and even
                availability.
              </p>
              <p>
                Are you considering babysitting for the first time? If so,
                you’re probably wondering what the job is like and what duties
                you’ll have. Every babysitting job is different but there are
                some things that parents will expect of you almost every time.
              </p>
            </div>
            <div>
              <h2>Ensuring Child Safety</h2>
              <p>
                This is the most important responsibility, and it’s always
                required. That’s why it’s number one! Make sure children are
                safe at home and while ‘out and about.’ It’s vital. Parents
                expect that children will be under the watchful eye of the
                sitter at all times.
              </p>
              <p>
                If you need to step away from the child to make lunch or prepare
                a bath (how this is done, of course, depends upon their age),
                make sure the child is in safe surroundings and check on them
                regularly. You can also use a baby monitor if the family has one
                available.
              </p>
            </div>
            <div>
              <h2>Preparing Meals and Snacks</h2>
              <p>
                This responsibility is often expected of babysitters and can
                present its own challenges. If the child has food allergies,
                make sure the parents outline them carefully so you can make all
                efforts to avoid a potentially dangerous reaction. Parents
                should keep a list of the foods to avoid on the refrigerator.
              </p>
              <p>
                Also, if you are going to be cooking during your sit, find out
                what foods are acceptable to the parents and kid-friendly. Learn
                how to make fun, healthy versions of child favorites like pizza,
                spaghetti, tacos, hamburgers, cookies, and muffins.
              </p>
            </div>
            <div>
              <h2>Administering Medications</h2>
              <p>
                This is an important responsibility for any babysitter. Like all
                medications, drugs must be administered exactly as specified.
                Instructions for dosage are usually clearly outlined on the
                packaging or provided in a pamphlet by the doctor or pharmacist.
              </p>
              <p>
                If a child requires medicine, make sure the parents provide
                detailed instructions, so you know what to do. These should
                always be in the written form, so don’t rely on your memory for
                this. Do exactly what parents request and, for any doubts,
                contact them to clarify. If you are unable to give a scheduled
                medication for any reason, you must contact the parent right
                away.
              </p>
            </div>
            <div>
              <h2>Disciplining Children</h2>
              <p>
                Discipline is primarily the responsibility of the parent but
                will fall upon the shoulders of the babysitter when parents are
                away. Learn the family’s preferred discipline strategy and
                follow it as closely as you can to maintain consistency for the
                child.
              </p>
              <p>
                For example, the family may use ‘time-outs.’ This is where the
                child is removed from an activity for a short time (usually 1 to
                10 minutes, 1 minute for each year of age) in order to
                discourage inappropriate behavior. The child is usually placed
                in a quiet, safe space, alone, and can return once they are
                willing to behave. It’s not acceptable to scold or yell at a
                misbehaving child, and never, ever should a babysitter
                physically strike a child. Always seek to resolve conflict in a
                safe, calm, and kind manner. If in doubt, always discuss this
                with the parents.
              </p>
            </div>
            <div>
              <h2>Transporting Children To School and Events</h2>
              <p>
                This may be a babysitter’s responsibility if the parents work
                and are unable to drop off or pick up their child. If car
                transport is required, make sure you use the correctly-sized
                child seat for their age and weight. Children 8 years and above
                are usually big enough not to require a booster seat but
                double-check in your city just to make sure.
              </p>
              <p>
                Safety is the priority, so working seat belts and a reliable
                vehicle are necessities. These, and all things regarding the
                safe transportation of their child, should be discussed in
                detail with the parents ahead of time.
              </p>
            </div>
            <div>
              <h2>Get Children to Bed on Time</h2>
              <p>
                This is probably one of the toughest responsibilities for a
                babysitter as children are not always cooperative when it comes
                time for bed. It may be more challenging for the babysitter than
                parents as children often test their boundaries with someone
                new.
              </p>
              <p>
                Make sure the usual routine is followed as much as possible
                (e.g., putting on pajamas, having a snack, brushing teeth,
                reading stories). Ask the parents exactly how and when each step
                should be done. A firm, yet kind, approach to a child that is
                unwilling to cooperate is often necessary. Just remember to stay
                calm and implement the routine.
              </p>
            </div>
            <div>
              <h2>Having Fun!</h2>
              <p>
                When things run smoothly, babysitting can be the most fun.
                You’ll get to invent crazy games, go on adventures, read
                inspiring stories, tell funny jokes, make amazing discoveries,
                and create beautiful art, sometimes all in the same day!
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate("/care-taker-member/handy-resource/benifits-of-nanny")
            }
          >
            <h1>Related Articals</h1>
            <img src={babysitter2} alt="image" />
            <h3>benefits to consider offering your nanny</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BabySitterResponsibilities;
