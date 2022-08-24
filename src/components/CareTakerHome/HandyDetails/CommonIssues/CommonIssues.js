import React from "react";
import "../style.css";
import commonIssue from "../../../../assets/images/common-issue-cover.jpg";
import backgroundCheck from "../../../../assets/images/background-checks-cover.jpg";
import { useNavigate } from "react-router-dom";

const CommonIssues = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-hd">
        <div className="main-hd">
          <div className="header-hd">Common Issues with Care Giver</div>
          <img src={commonIssue} alt="cover-img" />
          <div className="parahgraphs-hd">
            <div className="main-parah-hd">
              <p>
                A great in-home caregiver is worth her weight in gold. She can
                help a senior with cognitive or physical challenges age in place
                in the home he or she loves, rather than moving to a nursing
                home or assisted living facility. She provides companionship for
                her client and peace of mind for family members. But the very
                personal nature of the caregiver-client relationship means that
                when problems arise — and they almost always do, as in any
                employer-employee relationship — it can be tricky to handle
                them.
              </p>
              <p>
                “When my partner Harold was sick, I hired several home aides to
                help him in shifts,” says Joan W., of Westfield, New Jersey.
                “They were all great, but things would occasionally come up that
                were a problem. For example, we had a flood in the basement, and
                I asked the aide to help me out with that while Harold was
                resting, but she resisted.” Making expectations as clear as
                possible from day one is key, but when things go off track, you
                can work them out. Here are a few common issues that come up
                with in-home caregivers and how to handle them.
              </p>
            </div>
            <div>
              <h2>always showing up late.</h2>
              <p>
                We’ve all been stuck in traffic, slept through the alarm or
                couldn’t find the keys as we were running out the door. So a
                late start once in a while is forgivable. But if your caregiver
                is consistently showing up late — especially if you need her to
                arrive before you can leave for work — it’s time to consider
                whether she’s truly committed to the job.
              </p>
              <p>
                “If she’s a really valued caregiver, I would be a little more
                tolerant of this and sit down and tell her she’s doing a great
                job, but it is dangerous for the senior to be left home alone
                even for 15 minutes, so she needs to leave a few minutes earlier
                each morning,” says Wendy Wells-Chanampa, a dementia care expert
                and founder of Senior Resource Consultants in Naples, Florida.
                You might even consider including expectations about punctuality
                in a written contract with the caregiver, suggests Amanda
                Lambert, a geriatric care manager in Salt Lake City, Utah, and
                co-author of “Aging with Care: Your Guide to Hiring and Managing
                Caregivers at Home.” “Put it in writing rather than just
                verbally telling her, so there are no misunderstandings,” she
                says.
              </p>
            </div>
            <div>
              <h2>spends too much time on the phone.</h2>
              <p>
                Your boss wouldn’t be pleased if you were scrolling through
                Instagram during an important work meeting, so it’s perfectly
                reasonable to expect your home aide to put down the phone when
                he is caring for your loved one. “Of course you want her to have
                a phone for emergencies, and she may need to check in with her
                own children or parents during the day, but there should be
                clear guidelines,” says Wells-Chanampa.
              </p>
              <p>
                You can say, “Dad really needs 100 percent of your attention, so
                please limit non-urgent phone calls to when he’s napping.” If
                you live in a different town or state, this can admittedly be
                difficult to monitor, says Wells-Chanampa, who suggests dropping
                in unannounced when you can to see if the aide is complying with
                the rules.
              </p>
            </div>
            <div>
              <h2>The aide gets frustrated or angry with difficult behavior</h2>
              <p>
                If your loved one is suffering from dementia, there can be
                changes in behavior that are a challenge to the home aide: A
                senior with dementia may become more aggressive, refuse to eat,
                resist bathing or accuse the aide of stealing. This would be a
                good time to consult with a geriatric care manager to see if you
                need to step up to another level of care or hire a new aide with
                more experience in dementia care (and a more patient demeanor).
                If you want to continue with the same caregiver, meet with her
                one-on-one to discuss the challenges and see if she is willing
                to go through additional training.
              </p>
              <p>
                “Call the Alzheimer’s Association, or search online for a
                dementia training expert and offer to pay for a training session
                so she can learn new strategies,” says Wells-Chanampa.
              </p>
            </div>
            <div>
              <h2>isn’t providing the stimulation you want.</h2>
              <p>
                You may have visions of your mom’s caregiver taking her for
                walks, playing Scrabble with her and providing endless hours of
                stimulating conversation and care. In reality, they may be
                spending hours every day watching the Home Shopping Network
                together. This may simply be a matter of unclear expectations,
                says Lambert.
              </p>
              <p>
                Her solution: Write up a plan of care, which outlines exactly
                which tasks you expect the aide to do each day. The plan might
                include: Go for a 20-minute walk three times a week; bring mom
                to a book talk at the library once a week; listen to music and
                go through photo albums every afternoon to stimulate memory.
                “The plan of care is a flexible document, which can be changed
                as needed, but it gives the caregiver a clear guideline of
                what’s expected,” Lambert says.
              </p>
            </div>
            <div>
              <h2>doesn’t communicate well.</h2>
              <p>
                Whether you live down the block or across the country, you want
                to keep updated on your loved one’s daily progress, whether
                there are any changes in physical or mental status or any issues
                that need to be addressed. But at the end of the day, your
                caregiver may just be too exhausted to let you know. So make it
                easy for her.
              </p>
              <p>
                “I ask the caregiver to text me at the end of every shift, just
                a sentence or two about any problems that arose that day, or a
                list of what activities they did,” says Wells-Chanampa. “And I
                always validate her by texting back a thank you.” Lambert adds
                that regular communication should be included in your plan of
                care — and if you live too far away to check in regularly,
                consider hiring a geriatric care manager to keep on top of
                things and report back to you.
              </p>
            </div>
          </div>
          <div
            className="related-section"
            onClick={() =>
              navigate("/care-taker-member/handy-resource/backgound-check")
            }
          >
            <h1>Related Articals</h1>
            <img src={backgroundCheck} alt="image" />
            <h3>Background Checks How the process works</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonIssues;
