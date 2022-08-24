import React from "react";
import "../style.css";
import tutor1 from "../../../../assets/images/tutor-cover-1.jpg";
import tutor2 from "../../../../assets/images/tutor-cover-2.jpg";

import { useNavigate } from "react-router-dom";

const SpecialNeedsResponsibilities = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">Home Tutor Responsibility</div>
          <img src={tutor1} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                This post provides complete information on the job description
                of a home tutor, to help you learn what they do. It provides the
                key duties, tasks, and responsibilities that commonly constitute
                the home tutor work description.
              </p>
              <p>
                It also highlights the major requirements you may be expected to
                fulfill by employers/recruiters if you are seeking to work as a
                home tutor.
              </p>
            </div>
            <div>
              <h2>What Does a Home Tutor Do?</h2>
              <p>
                Home tutors provide one-on-one home lessons to elementary or
                secondary school students or even adults. They help students to
                better understand and complete their assignments and also
                provide a general understanding of the school curriculum better
                for the student in a more simple form. Home tutors generally
                play the role of the school teacher at home for the students.
                They are responsible for working with students to improve their
                academic performance and outcome, through given them a better
                understanding of what has been taught in the class room in their
                various schools.
              </p>
              <p>
                They review class room topics and assignments, as well as the
                curriculum topics for the students. They diligently work with
                the student to help them understand key points and ideas to
                drive home the concepts they might have learned during classes
                in school. The home tutor duties also involve teaching students
                important skills to improve academic outcomes such as note
                taking strategies, approaches to answering test questions, and
                general study skills.
              </p>
              <p>
                It also involves developing and distributing teaching materials
                in order to supplement class room lectures, which include study
                guide, pictorial diagrams, and charts. They interact with
                students to provide academic and study advice, as well as
                provide feedback on students’ strength, weakness, and areas of
                interest.
              </p>
              <p>
                Home tutors also provide vital information to parents on
                students’ performance and progress, as well as information on
                area of their strength for proper academic and career decisions.
                Generally, they are responsible for assisting students with
                homework, assignment, projects, talks, and presentations for
                effective outcomes. Home tutors also organize, give, and grade
                assignment and test to their students to track their progress
                while identifying key areas of improvement in a given subject.
              </p>
            </div>
            <div>
              <h2>Home Tutor Requirements</h2>
              <p>
                If you are seeking a home tutor role, you will be expected to
                fulfill certain requirements, which include:
              </p>
              <ul style={{ marginLeft: "40px" }}>
                <li>
                  Education: Most home tutoring positions requires a Bachelor
                  degree often in the specific subject the candidates specialize
                  in teaching. Although a High School diploma maybe acceptable
                  for an entry level tutoring job for grade 1-8 students,
                  however, most home tutoring jobs require a Bachelor’s degree
                  in Education or in a related course of study
                </li>
                <li>
                  Experience: Home tutors are required to have prior experience
                  with teaching and should demonstrate expertise in the subject
                  area they plan to teach. Having a prior experience as a class
                  room teacher is an added advantage
                </li>
                <li>
                  Communication Skill: The basic essence of teaching is through
                  effective communication. By this, home tutors most be great
                  communicators. Having a good communication skill will help
                  deliver the required information to the student in a
                  simplified and easy to understand mode
                </li>
                <li>
                  Organizational Skill: Home tutors most have good
                  organizational skills to present and represent information and
                  data in good form and manner. This includes having good
                  presentation, book keeping, and word processing skills
                </li>
                <li>
                  Knowledge: Home tutors must have verse knowledge of the
                  specific academic subject to be taught
                </li>
                <li>
                  Ability: They should be able to encourage and push students to
                  improve their academic performance through efficient
                  strategies
                </li>
                <li>
                  Home tutor should have patience, empathy, and compassion for
                  students as they respond to teaching on their own pace while
                  developing the required skill.
                </li>
              </ul>
            </div>
            <div>
              <h2>Conclusion</h2>
              <p>
                To hire a home tutor, recruiters/employers often need to publish
                the job description for interested applicants to learn about the
                role and apply for it. To recruit/hire for the position, you can
                draft your home tutor job description from the sample published
                in this article.
              </p>
              <p>
                The detailed information provided in this article on duties,
                responsibilities, and requirements can serve as a guide and
                framework for employers/recruiters who are looking to hire for
                the position of a home tutor to attract and retain the best
                talent for the position. This post is also useful to anyone who
                is interested in becoming a home tutor and is looking forward to
                applying for a job as a home tutor. It gives you a detailed
                description of the skills, responsibilities, and general
                qualification that most employers/recruiters will be looking out
                for in filling the post of a home tutor.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate("/care-taker-member/handy-resource/tutor-benifits")
            }
          >
            <h1>Related Articals</h1>
            <img src={tutor2} alt="image" />
            <h3>Benefits of Home Tutor</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialNeedsResponsibilities;
