import React from "react";
import "../style.css";
import tutor1 from "../../../../assets/images/tutor-cover-1.jpg";
import tutor2 from "../../../../assets/images/tutor-cover-2.jpg";

import { useNavigate } from "react-router-dom";

const BenifitsOfTutor = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">7 Benefits Of Working As A Home Tutor</div>
          <img src={tutor2} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                Home tuition jobs has gained prominence and many students seek
                help for almost all subjects as the method of studying has
                drastically changed. This can be owed to the changes in
                expectations of students as well as the changes in education
                syllabus which encourages students to be critical thinkers.
              </p>
            </div>
            <div>
              <h2>THE PAYCHECK</h2>
              <p>
                Firstly, home tutors earn a lot of money. In this day and age
                where there is a higher demand for tuition than ever before, any
                tutor can easily get a handsome earning. The amount earned can
                also increase depending on the qualification of the tutor.
              </p>
              <p>
                Home tutors are also able to charge more than other tutors as
                they have to travel to the students’ houses which acts as a
                convenience fee. Even though tutors have to spend money on
                travel expenses, their ability to charge higher more than makes
                up for it.
              </p>
              <p>
                With this higher rate and the ability to take as many students
                as they want weekly based on their schedule, home tutors can end
                up earning a lot more than people think. Home tutoring can also
                be done part-time which can be very useful for university
                students as they will be able to apply the knowledge that they
                learn and earn a lot of money at the same time.
              </p>
            </div>
            <div>
              <h2>FLEXIBLE SCHEDULE</h2>
              <p>
                Secondly, home tutors have a lot of freedom compared to other
                tutors and school teachers. School teachers are bound to a
                specific syllabus, lesson structure and pace. They have to
                assign previously specified homework and have very limited
                control over the coursework.
              </p>
              <p>
                Tutors, however, can choose what topic they want to teach and
                what order they want to teach it. They can also decide on how
                deep they want to go into certain topics. They have the freedom
                to decide their own course materials, homework and assignments.
              </p>
            </div>
            <div>
              <h2>INTERACTION</h2>
              <p>
                Thirdly, home tutors have the ability to understand their
                students much better than other tutors. Home tutoring is usually
                one to one and this interaction allows tutors to talk at a more
                personal level with the students. Having the freedom to digress
                during lessons allows tutors to understand their students’
                characteristics and personality.
              </p>
              <p>
                They can more easily analyse their student’s strengths,
                weaknesses, learning style, etc. Tutors can thus alter their
                teaching style based on what will be most beneficial for their
                students. Moreover, being a friend to the student will help to
                strengthen the relationship between the tutor and student,
                increasing the understanding between the two parties. This will
                allow the student to feel comfortable with the tutor and enjoy
                lessons much more making them more effective and fun.
              </p>
            </div>
            <div>
              <h2>A STRONGER BOND</h2>
              <p>
                Home tutors are able to form a stronger bond with their students
                as compared to other tutors. An added benefit is that tutors are
                also able to interact with the students’ parents much more. No
                matter how much closer home tutors may be to their students as
                compared to other tutors, they will never be as close as the
                parents.
              </p>
              <p>
                Parents have a greater understanding and may have useful
                information about their children that can help tutors greatly.
                Parents are able to see how often their child studies and how
                hardworking they are which is something tutors are unable to
                see. By understanding how much effort their students put in,
                home tutors can tailor their lessons accordingly. They can also
                inform parents on what the student needs to do so that parents
                can enforce it which makes sure that the tutoring is effective.
              </p>
            </div>
            <div>
              <h2>A GOOD START</h2>
              <p>
                Home tutoring is beginner-friendly for tutors who are new to the
                business. When tutors first begin their career, it may be very
                intimidating to teach in front of a large group of students.
                Many tutors may think that tutoring is not the job for them once
                they panic in front of a crowd of students. Home tutoring places
                tutors in a calm and controlled environment.
              </p>
              <p>
                Once home tutors are familiar with how tutoring works, they can
                choose what type of tutor they want to be based on their
                preference. Home tutoring also provides tutors with many
                transferable skills that can be useful for those who do not wish
                to pursue tutoring. The 2 main skills that tutors learn are
                communication skills and patience which are essential for many
                other jobs.
              </p>
            </div>
            <div>
              <h2>SUPERVISION</h2>
              <p>
                Home tutors have more control over their students as compared to
                other tutors. No matter how friendly a tutor may want to be, it
                is still necessary to show students that they need to respect
                them.
              </p>
              <p>
                Although some tutors may face no problem keeping a large number
                of students under control, many inexperienced or shy tutors may
                be too overwhelmed by them. Having one-to-one tuition allows
                tutors to ensure that the student is disciplined. One-to-one
                tuition also allows tutors to be able to monitor everything that
                the student is doing during lessons. By ensuring that the
                student is paying full attention during lessons, tutors can
                increase the effectiveness of their lessons.
              </p>
            </div>
            <div>
              <h2>SATISFACTION</h2>
              <p>
                Tutoring is an emotionally fulfilling job. Tutors start off
                their journey by meeting someone new who is struggling with
                their studies and desperate for help. As time goes by, tutors
                will be able to see their students become stronger in the topics
                that they initially were struggling with.
              </p>
              <p>
                They can see their students developing not only in terms of
                academics but also as a person. They can feel proud knowing that
                they have positively influenced someone’s life. This emotional
                fulfillment is the main reason why tutors continue with their
                career no matter how stressful it may become!
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate(
                "/care-taker-member/handy-resource/tutor-responsibilities"
              )
            }
          >
            <h1>Related Articals</h1>
            <img src={tutor1} alt="image" />
            <h3>Home Tutor Responsibilities</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenifitsOfTutor;
