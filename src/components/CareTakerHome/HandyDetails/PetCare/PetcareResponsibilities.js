import React from "react";
import "../style.css";
import petcare1 from "../../../../assets/images/petcare-cover-1.jpg";
import petcare2 from "../../../../assets/images/petcare-cover-2.jpg";
import { useNavigate } from "react-router-dom";

const PetcareResponsibilities = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">
            Pet sitter Things of Responsible for better service
          </div>
          <img src={petcare1} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                Pet sitters provide daily care for pets while their owners are
                on vacation. They typically stay in the home of the owner, so
                the pets can remain on their familiar territory. In addition to
                caring for pets, they may also provide basic services for the
                owner, such as collecting mail and vacuuming pet hair. Some pet
                sitters limit their clientele to owners of cats and dogs. Others
                provide care for birds, fish, small mammals, reptiles, and
                amphibians.
              </p>
              <p>
                Many pet sitters operate a regular dog walking service and offer
                pet sitting services on an as-needed basis when clients go out
                of town. Some pet sitters hire additional staff members to
                expand their service area, increase the number of customers they
                can accommodate per week, and act as a backup when they go on
                vacation or get sick. They can also earn additional revenue by
                creating a franchise business and licensing pet sitting
                providers under their established brand name.
              </p>
            </div>
            <div>
              <h2>Responsibilities:</h2>
              <p>
                Pet sitters are responsible for all basic animal care while
                their clients are on vacation or traveling for business. They
                must be able to perform the following tasks:
              </p>
              <ul style={{ marginLeft: "40px" }}>
                <li>Provide food and water.</li>
                <li>
                  Brush fur and teeth and carry out other types of grooming.
                </li>
                <li>Walk dogs.</li>
                <li>Clean litter boxes.</li>
                <li>Give medications, if applicable.</li>
              </ul>
              <p>
                Pet sitters are also responsible for notifying owners and taking
                pets to the vet if they should become sick or suffer an injury
                while under their supervision. It is important that sitters
                require owners to fill out a detailed contact sheet with their
                contact information, their vet’s contact information, and
                relevant information about the pet (such as age, breed, weight,
                prior medical conditions, and medications).
              </p>
            </div>
            <div>
              <h2>Education, Training, & Certification</h2>
              <p>
                Pet sitters are not required to have any formal education or
                training, but they should be familiar with all aspects of animal
                care and behavior.
              </p>
              <ul style={{ marginLeft: "40px" }}>
                <li>
                  Prior experience: Most pet sitters have an extensive amount of
                  hands-on experience with the animals they choose to provide
                  care for. It is also useful for pet sitters to have a
                  background in animal healthcare, such as prior work as a
                  veterinary technician or veterinary assistant.
                </li>
                <li>
                  Training: Knowledge of animal CPR and first aid is valuable to
                  those in this career and can be a big plus on the sitter’s
                  marketing materials when trying to attract new clients.
                </li>
              </ul>
            </div>
            <div>
              <h2>Pet Sitter Skills & Competencies</h2>
              <p>
                Successful pet sitters should possess the following skills and
                traits:
              </p>
              <ul style={{ marginLeft: "40px" }}>
                <li>
                  Rapport with animals: Pet sitters must enjoy spending time
                  with animals and have a gentle — yet assertive when necessary
                  — way with them.
                </li>
                <li>
                  Reliable: Their clients count on them to take care of their
                  beloved pets when they can't, so pet sitters have to be
                  reliable and provide their services for as long as they have
                  committed to.
                </li>
                <li>
                  Trustworthy: Pet sitters have free run of a home while the
                  owner is away. They must prove themselves worthy of the trust
                  the owners invest in them.
                </li>
              </ul>
            </div>
            <div>
              <h2>Job Outlook</h2>
              <p>
                The BLS predicts all types of animal care and service worker
                jobs, including pet sitters and other nonfarm animal caretakers,
                will grow 22% from 2016 to 2026, much faster than the average.
                The BLS also notes that there is a high turnover among those
                kinds of jobs.
              </p>
              <p>
                Pet care workers can advance to become supervisors in large
                animal hospitals, kennels, or pet shops. Some experienced
                workers start their own kennels or pet shops. A few pet care
                workers go on to college and become veterinarians. Pet care
                workers can also increase their earnings by developing skills in
                special fields, such as grooming, training, or breeding animals.
              </p>
              <p>
                There will be openings to replace workers who leave the field.
                Because more people are expected to take advantage of pet care
                services, the number of jobs should increase, and job
                opportunities should be very good through the year 2014. The
                best jobs will go to those who have the most experience in
                caring for animals.
              </p>
            </div>
            <div>
              <h2>Work Environment</h2>
              <p>
                In most cases, pet sitters work at their clients' homes. They
                should make themselves as "at home" as their clients have told
                them they're comfortable with.
              </p>
              <p>
                Pet care workers must enjoy being around animals. They may work
                indoors or outdoors. They must not be bothered by the odor of
                animals and should not mind cleaning up after them. Their work
                may involve lifting heavy animals and equipment. Sometimes they
                must drive station wagons or trucks to pick up or deliver pets.
                The work involves interacting with people, so workers should be
                friendly and courteous.
              </p>
              <p>
                Many pet care workers work forty hours a week. Some workers must
                also work or be on call in the evenings or on weekends. There
                are some jobs for part-time workers to care for animals at night
                or on weekends. Some workers care for animals on an
                around-the-clock basis with some time off during each day. In
                these situations the employers often provide attendants with
                living quarters near the kennel. Pet shop workers and owners
                often work more than forty hours a week.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate("/care-taker-member/handy-resource/benifits-of-petcare")
            }
          >
            <h1>Related Articals</h1>
            <img src={petcare2} alt="image" />
            <h3>Benefits of Pet Sitting</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetcareResponsibilities;
