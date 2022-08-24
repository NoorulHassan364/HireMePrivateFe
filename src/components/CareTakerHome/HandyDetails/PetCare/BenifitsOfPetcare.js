import React from "react";
import "../style.css";
import petcare1 from "../../../../assets/images/petcare-cover-1.jpg";
import petcare2 from "../../../../assets/images/petcare-cover-2.jpg";
import { useNavigate } from "react-router-dom";

const BenifitsOfPetcare = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">Benefits of Pet Sitting</div>
          <img src={petcare2} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                Pets are kept in a familiar environment, with normal diet and
                exercise routines, along with personal attention. This service
                eliminates exposure to illnesses of other animals in a group
                type situation away from home. You no longer have to impose on
                friends, family or neighbors.
              </p>
              <p>
                The professional pet sitter has responsibility for both your pet
                and your home, and we take this responsibility very seriously.We
                love animals and it shows. We treat all animals in our care as
                if they were our own. We have natural disaster plans in effect
                in case of emergency. We regularly attend conventions &
                continuing education related to pet sitting in order to bring
                you the best in home pet care.
              </p>
              <p>
                This is an activity that many people are investing in at home or
                in their own business premises, and for good reasons. Many
                times, pet owners are away from their homes either at work or on
                holiday. Sometimes, it is possible to take along your dog or
                cat. However, there comes a time when it is not possible for
                your pet to accompany you.
              </p>
            </div>
            <div>
              <h2>Familiar Surroundings</h2>
              <p>
                Even if the kennel workers are kind and friendly, spending
                several days in a strange environment is incredibly stressful
                for anxious dogs (and for virtually all cats!). These pets are
                often much happier if they can stay in their own homes.
              </p>
            </div>
            <div>
              <h2>Personalized Attention</h2>
              <p>
                A private pet sitter can often spend more one-on-one time with
                your dog or cat than the staff at a busy boarding kennel. Many
                pets are lonely and bored while their human families are away.
                Why not take advantage of a sitter who can spend an hour or two
                cuddling with your kitty on the couch, or playing fetch with
                your dog in the backyard?
              </p>
            </div>
            <div>
              <h2>Flexibility</h2>
              <p>
                Many pet sitters have flexible schedules, and can work around
                any specific needs or requests you might have for your pet’s
                care. You can often choose how many times a day you want the
                sitter to stop by, and how long you want the visits to last.
                Some sitters will even stay overnight so your dog or cat has
                someone to cuddle up with in bed!
              </p>
            </div>
            <div>
              <h2>Proper Care and Safety</h2>
              <p>
                In your home, your pet will stay happy as this is a familiar
                environment and will not have time to get traumatized fighting
                off new pets. Through pet sitting, your pets will remain in a
                secure environment, and not spend time in cold and secluded
                settings away from home.
              </p>
            </div>
            <div>
              <h2>Reduced Risks of Your Pet Getting Sick</h2>
              <p>
                A pet that is left at home with a pet sitter will not be exposed
                to diseases that can be spread by other pets. Pets can also be
                exposed to fleas, bugs, ticks, and other parasites when away
                from their homes and get sick.
              </p>
              <p>
                It takes only one infected pet to spread new infections to other
                pets in the care quarters. Contagious diseases characterized by
                a cough, fatigue and fever are quite common with pets exposed to
                pet care facilities than those spending quality time with a pet
                sitter back home.
              </p>
            </div>
            <div>
              <h2>Low Risk of Stress</h2>
              <p>
                Pets also get stressed easily, and using pet sitting services at
                your home will present your pet with an opportunity to enjoy
                every moment and stay stress-free. Most pets will get distressed
                when taken to new places. Some pets can suffer from anxiety and
                depression if separated from their owners. To show their
                frustrations, some pets will stop eating if spending time in
                unfriendly settings. Others will react aggressively if
                approached by new but friendly pets in the pet care facilities.
              </p>
            </div>
            <div>
              <h2>Bottom Line</h2>
              <p>
                With the many benefits of pet sitting, you’ll know if your pets
                are in safe hands and you’ll be getting updates on how your pets
                is fairing. Overall, it is a great idea to opt for the services
                of a pet sitter. However, ensure you are dealing with an
                experienced, reliable, and a kind pet sitter. You also want to
                enjoy stress-free moments when away from your pets.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate(
                "/care-taker-member/handy-resource/petcare-responsibilities"
              )
            }
          >
            <h1>Related Articals</h1>
            <img src={petcare1} alt="image" />
            <h3>Pet sitter Things of Responsible for better service</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenifitsOfPetcare;
