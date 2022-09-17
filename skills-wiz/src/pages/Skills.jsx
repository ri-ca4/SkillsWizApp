import React, { useState } from "react";
import './css/pages.css';
import {Link} from "react-router-dom";

const Mindfulness = (props)=>{
    const {visible} = props
    return(
        (visible &&
            <div className="viewSkills">

                <h1>Mindfulness Skills</h1>

                <h2>States of Mind</h2>
                    <p>This skill is all about figuring out where your mind is at. Are you in Emotion 
                        Mind, unable to access your problem-solving skills? Are you in Reasonable 
                        Mind having a hard time accessing your feelings? Or have you found Wise Mind?
                    </p>

                    <h3>Emotion Mind</h3>
                        <p>Are you feeling reactive? impulsive? emotional? 
                            You could be in emotion mind. While society often views 
                            "being emotional" as a negative, it's important to remember
                             that emotions are not only natural, but also important.
                        </p>

                    <h3>Reasonable Mind</h3>
                        <p>Humans think. We plan, we problem-solve, we organize. If you 
                            find yourself focused on logic, detatched from your emotional self
                             you could be in reasonable mind. 
                        </p>

                    <h3>Wise Mind</h3>
                        <p>Wise Mind is where your emotion mind and reasonable mind meet. It's 
                            your place of wisdom and balance, where you find your truth. Practice finding
                             this place where you can both feel your emotions and access your problem-solving,
                             organized self.
                        </p>

                <h2>The "What"</h2>
                    <p>What are you <em>doing</em> mindfully?</p>

                    <h3>Observe</h3>
                        <p>This is where you just notice your experiences. Focus your attention and experience 
                            what is to be experienced
                        </p>

                    <h3>Describe</h3>
                        <p>Now put what you've observed into words- just state the facts</p>

                    <h3>Participate</h3>
                        <p>Immerse yourself in the experience, find the "flow"</p>
                
                <h2>The "How"</h2>
                    <p><em>How</em> are you doing it mindfully?</p>

                    <h3>Non-judgementally</h3>
                        <p>Leave your judgements at the door. Avoid evaluating the situation and try 
                            acceptance instead
                        </p>

                    <h3>One-mindfully</h3>
                        <p>Take one thing at a time. Focus you attention to the task at hand and 
                            avoid distractions
                        </p>

                    <h3>Effectively</h3>
                        <p>Do just what needs to be done and focus on what works.</p>

            </div>
        )
    )
}

const InterpersonalEffectiveness = (props)=>{
    const {visible} = props
    return(
        (visible &&
            <div className="viewSkills">

                <h1>Interpersonal Effectiveness Skills</h1>

                    <h2>DEAR MAN- Objective Effectiveness</h2>
                        <p>This skill is used to help you get your wants met through interpersonal
                            communication. It can be used to ask for what you need or to say "no".
                        </p>
                        <p>D- Describe: Describe the situation, just the facts</p>
                        <p>E- Express: Express your feelings about the situation. Don't assume the other person
                            knows how you feel
                        </p>
                        <p>A- Assert: Ask for what you need/ Say no</p>
                        <p>R- Reinforce: Reward the person ahead of time by explaining the positive results (for them) 
                            of you getting what you want.
                        </p>
                        <p>M- (be) Mindful: Stay focused on your goals, don't get distracted</p>
                        <p>A- Appear Confident: Note that you only need to <em>appear</em> confident</p>
                        <p>N- Negotiate: Be willing to give and take, focus on what works.</p>

                    <h2>GIVE- Relationship Effectiveness</h2>
                        <p>Used in conjunction with the DEAR MAN skill, this skill helps in situations where 
                            the relationship is the priority.
                        </p>
                        <p>G- (be) Gentle: Be nice, avoid attacks, be respectful</p>
                        <p>I- (act) Interested: Listen to the other person's point of view. Appear intersted 
                            as they talk, don't interrupt, be sensitive, be patient.
                        </p>
                        <p>V- Validate: Validate their point of view. Show them you understand where they are 
                            coming from.
                        </p>
                        <p>E- Easy Manner: Be light-hearted, smile! Have a sense of humor</p>

                    <h2>FAST- Self-Respect Effectiveness</h2>
                        <p>Used in conjunction with the DEAR MAN skill, this skill helps in situations where 
                            your self-respect is the priority.</p>
                        <p>F- (be) Fair: Be fair to yourself and the other person</p>
                        <p>A- (no) Apologies: Don't (over) apologize</p>
                        <p>S- Stick to your values: Be clear on your values and don't sell them out</p>
                        <p>T- (be) Truthful: Be honest, don't exaggerate or make up excuses.</p>

                    <h2>Walk the Middle Path</h2>
                        <p>Practice dialectical thinking. "Dialectical" refers to balancing opposites. 
                            This skill asks you to challenge black and white thinking, validate your 
                            experiences, and change your behaviors.
                        </p>

                    <h2>Validation</h2>
                        <p>Validate the experiences and feelings of others as well as yourself</p>

                    <h2>Positive Reinforcement</h2>
                        <p>Use positive reinforcement to create change in others behaviors and your own</p>
            </div>
        )
    )
}

const EmotionRegulation = (props)=>{
    const {visible} = props
    return(
        (visible &&
            <div className="viewSkills">

                <h1>Emotion Regulation Skills</h1>

                    <h2>Check the Facts</h2>
                    <p>Notice your thoughts and check their accuracy</p>

                    <h2>Opposite-to-Emotion Action</h2>
                    <p>Identify your emotion and then act opposite of your emotion urges</p>

                    <h2>Problem-Solving</h2>
                    <p>Find posible solutions to your problem and then test them out</p>

                    <h2>ABC's</h2>
                        <p>This set of skills is used to reduce your vulnerability</p>

                        <h3>A: Accumulate Positive Emotions</h3>
                            <p>Do pleasurable things! Work toward your goals and values (both short-term and 
                                long-term). Be present and mindful in your positive emotions
                            </p>

                        <h3>B: Build Mastery</h3>
                            <p>Do something challenging to help you feel more confident</p>

                        <h3>C: Cope Ahead</h3>
                            <p>Imagine a challenging situation in the future and how you will cope with it</p>

                    <h2>PLEASE</h2>
                        <p>This set of skills is used to reduce your <em>physical</em> vulnerability</p>
                        <p>P(L)- treat Physical illness (and yes that means to take your medications)</p>
                        <p>E- balance Eating</p>
                        <p>A- Avoid drugs</p>
                        <p>S- balance Sleep</p>
                        <p>E- Exercise daily</p>

                    <h2>Mindfulness of Current Emotion</h2>
                        <p>Feeling your emotions effectively reduces suffering</p>

            </div>
        )
        
    )
}

const DistressTolerance = (props)=>{
    const {visible} = props
    return(
        (visible &&
            <div className="viewSkills">
                <h1>Distress Tolerance Skills</h1>

                    <h2>STOP</h2>
                        <p>A skill for noticing when your emotions might be causing you to act impulsively 
                            or against your values
                        </p>
                        <p>S- Stop! Literally stop what you are doing</p>
                        <p>T- Take a step back, figuratively or physically</p>
                        <p>O- Observe the situation, your thoughts, emotions, and urges</p>
                        <p>P- Proceed Mindfully</p>


                    <h2>Pros and Cons</h2>
                        <p>Think about the pros and cons of acting on your urges and the 
                            pros and cons of acting skillfully
                        </p>
                        
                    <h2>TIPP</h2>
                        <p>When your emotions are high, this set of skills is used to bring them 
                            down to a manageable level
                        </p>
                        <p>T- Temperature: Submerging your face in ice-water engages the parasympathetic nervous system</p>
                        <p>I- Intense Exercise: Do something to get your heart rate up and blood pumping</p>
                        <p>P- Paced Breathing: Rather than deep breathing, time your breaths eg. squared breathing</p>
                        <p>P- Paired Muscle Relaxation: Pair your breathing with the tightening and relaxing of
                            your muscles, breathing in as you tighten muscle groups and breath out "relax" as you relax
                        </p>
                        
                    <h2>Distract</h2>
                        <p>Wise Mind ACCEPTS</p>
                        <p>A- Activities: Focus your attention on a task</p>
                        <p>C- Contribute: Contrubute to the community eg. volunteering/ helping a friend</p>
                        <p>C- Comparisons: Compare how you feel now to a time you felt differently</p>
                        <p>E- Emotions: Engage in an activity that encourages emotions eg. happy music, scary movie</p>
                        <p>P- Push Away: Push the situation away for the moment eg. "I can worry about that in an hour"</p>
                        <p>T- Thoughts: Count, repeat song lyrics, read</p>
                        <p>S- Sensations: Listen to loud music, look at a colorful picture, hold a fuzzy blanket</p>
                        
                    <h2>Self-Soothe</h2>
                        <p>Soothe with your 5 senses- and be mindful as you do so</p>
                        
                    <h2>IMPROVE the moment</h2>
                        <p>I- Imagery</p>
                        <p>M- Meaning Making</p>
                        <p>P- Prayer</p>
                        <p>R- Relaxation</p>
                        <p>O- One thing in the moment</p>
                        <p>V- Vacation</p>
                        <p>E- Encouragement</p>
                        
                    <h2>Radical Acceptance</h2>
                        <p>Acceptance (not approval) of reality, exactly as it is, reduces suffering</p>
                        
                    <h2>Half-Smile/ Willing Hands</h2>
                        <p>Promote willingness by adopting a willing posture</p>                   
            </div>
        )
    )
}

const Skills = ()=>{
    const [showMindfulness, setShowMindfulness] = useState(false);
    const [showInterEffect, setShowInterEffect] = useState(false);
    const [showEmotRegulat, setShowEmotRegulat] = useState(false);
    const [showDistressTol, setShowDistressTol] = useState(false);

    const handleClickM = ()=>{
        setShowMindfulness(v => !v);
        setShowInterEffect(false);
        setShowEmotRegulat(false);
        setShowDistressTol(false);
    }
    const handleClickIE = ()=>{
        setShowInterEffect(v => !v);
        setShowMindfulness(false);
        setShowEmotRegulat(false);
        setShowDistressTol(false);
    }
    const handleClickER = ()=>{
        setShowEmotRegulat(v => !v);
        setShowMindfulness(false);
        setShowInterEffect(false);
        setShowDistressTol(false);
    }
    const handleClickDT = ()=>{
        setShowDistressTol(v => !v);
        setShowMindfulness(false);
        setShowInterEffect(false);
        setShowEmotRegulat(false);
    }


    return(
        <div className="skillsPage">
            <div className="menu">
                <div className="selectSkill mind" onClick={handleClickM}>
                    <h3>Mindfulness</h3>
                </div>
                <div className="selectSkill inte" onClick={handleClickIE}>
                    <h3>Interpersonal Effectiveness</h3>
                </div>
                <div className="selectSkill emot" onClick={handleClickER}>
                    <h3>Emotion Regulation</h3>
                </div>
                <div className="selectSkill dist" onClick={handleClickDT}>
                    <h3>Distress Tolerance</h3>
                </div>
            </div>
            <div>
                <Mindfulness visible={showMindfulness}/>
                <InterpersonalEffectiveness visible={showInterEffect}/>
                <EmotionRegulation visible={showEmotRegulat}/>
                <DistressTolerance visible={showDistressTol}/>
            </div>
            <Link to={'/'}><button>Home</button></Link>
        </div>
    )
}

export default Skills;