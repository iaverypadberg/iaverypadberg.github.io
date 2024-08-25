import React from 'react'
import WritingEntry from '../../components/WritingEntry'
import BasicButton from '../../components/BasicButton'
import { Link } from 'react-router-dom'

const Impatience = () => {
    return (
        <div>

            <div className='flex flex-col items-center justify-center m-2'>
                <h1 className='font-heading text-2xl text-center'>impatience</h1>
                {/* <Link to='/' className='font-body bg'>
                    Back to main Page
                </Link> */}
                <BasicButton to='/' text="Back to Homepage" />
            </div>

            <WritingEntry
                section1Header='A Story About Impatience'
                body='The desire to learn something new or learn something better, is a common feeling among humans. This could be a skill, idea, system, sport … really anything that can be conceived by the mind. By learning this new thing, the learner knows that they will be able to apply it to some aspect of their life, and enjoy the reward that it brings to them.'
                body1='Most often it is the case that the learner wants to learn so that they may enjoy the outcome of that learning. Here, all attention is focused on this outcome, which the learner expects to be a state of reality where they have something that they didn’t previously have, a better reality. Let’s call this new reality the destination. This destination is an undiscovered state that the learner so badly wants to get to that they lose interest in how they are going to get there.'
                body2='To learn effectively, it is required that the learner is attentive to what they are learning in the present moment. Dreaming of where the learning might take them is not going to bring them any closer to that destination. However, it is worth noting that some initial dreaming of the destination can be a powerful motivator to aid in the learning process, but it is not a replacement.'
                body3="It is in this dreaming and desire to reach some destination that impatience first becomes apparent. If too much focus is placed on the destination, the present moment becomes a hindrance in the learner's journey. They see the destination in their mind and it becomes their desired reality, but when they come back to the present moment and realize they are not already at their destination, they become irritated with the present moment."
                body4="It is this rejection of the present moment that shows the origin of impatience."
                section2Header='A Deeper look at Impatience'
                section2SubHeader1='The Cycle of Impatience'
                body5="When one is impatient, everything is rushed. The present moment is not enough for the impatient one, so they constantly search for new and interesting moments somewhere in the future, and rush towards it. This future moment can only temporarily satisfy the impatient one, and so the cycle continues on. The key component of this cycle is the rejection of the present moment and what it has to offer. If the impatient one were to accept the current moment and relax into it, the cycle would be unable to continue. No longer would there be a need to rush through the present moment with the hope of getting to a new and exciting experience, as the present moment would be fully appreciated."
                section2SubHeader2="Where do we learn to be Impatient?"
                body6="Impatience is one of the original emotions. It has been around as long as humans have been capable of desiring something. Although the original emotion has not changed, its rate of occurrence in humans has skyrocketed. We are more impatient than our ancestors and it's not even close. We don’t have to look very far to find suspicious patterns in our lives that may contribute to impatience."
                body7="Let’s start with advertisements. Unsuspecting and harmless as they seem, their effects are rather insidious. The obvious impact is that they get you thinking about whatever brand is running the advertisement. The idea is that they plant their brand into your mind so that in the future you are more likely to do business with them and view them in a positive way. Advertisements are such a powerful way to plant ideas in the minds of viewers that companies have whole departments dedicated to this practice."
                body8="The lesser acknowledged idea communicated through advertisements is that of a great moment. Since advertisements aim to paint a positive picture of the brand, it is taken for granted that the ad will be overly positive. Moments of success, joy, laughter, and fun are all disproportionately shown in advertisements. It would be imprudent to ignore the effects of these images on our brains, as advertisements' single goal is to influence our brain in a subtle and unseen way."
                body9="The overwhelming amount of climactic moments shown in advertising campaigns causes an imbalance in our brain where we are led to believe that success is the only way. Failure and plateaus, both essential parts of living, are not present in advertisements. Advertisers know that failure and plateaus do not sell, so they manipulate their advertisements to catch your eye with images of awesome success and outrageous scenarios."
                body10="This same trend is found on social media. People share their successful moments, happy pictures, and great times. Everyone is trying so hard to prove to themselves and the world around them that they are living an amazing life with lots of climactic moments and success stories."
                body11="The average social media user’s life is not a success story, yet. Most are simply on the platform for some quick entertainment in the form of swiping through posts that they could do without. The “climax content” found on these platforms is so ingrained that users can’t help but post some of it themselves, and so the cycle continues on."
                body12="Almost everywhere we look in the world, there is an unrealistic portrayal of success in every moment. This quick success track has been beaten into our brains and so we cannot help but be unhappy when every moment is not a success. Upon realizing that at the present moment we are not where we want to be, we become angry because we have not achieved our imagined successful moment."
                body13="This is impatience. It’s rooted deep in the way our society operates and continues to grow stronger in people as they are exposed to unrealistic portrayals of a successful life."
                section2SubHeader3="Why your life should be boring."
                body14="One reason to rush away from the present moment is that it's boring or dull. Having to do the same things over and over is considered boring, because there is nothing new to experience at that moment. This is an assumption that we make because we are not in tune with the world around us. The reality of it is that no two moments are the same, and yet most people view their daily lives as if it's the same play being shown over and over and over again. Actions such as taking the trash out, driving to work, going to the bathroom, saying hello to your family/friends etc.. can all become boring to us. We expect each time we perform these tasks to be the same as the last because we are doing the same thing. Although it might not be obvious all the time, our worlds can shift drastically from one moment to the next. Our hunger for new experiences and novel things in our lives might actually be satiated if we stopped searching for them all together. "
                body15="This is the definition of counterintuitive, but often in life, the most important decisions we make are counterintuitive."
                body16="Often we are so caught up in searching for new things that provide extreme excitement, that once we reach this peak we want to go higher, but growth like this is never sustainable. Think cryptocurrency, sugar and gambling. Volatile. The downside is always around the corner, and when it hits, it hits hard."
                body17="Living this way is exhausting, unsatisfying, and will get you nowhere. Since when did we all become crackheads? "
            />

        </div>
    )
}

export default Impatience