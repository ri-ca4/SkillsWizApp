import React, { useState } from "react";
import './css/skills.css';

const Mindfulness = (props)=>{
    const {visible} = props
    return(
        (visible &&
            <div>

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
            <div>

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
                        <p>M- (be) Mindful</p>
                        <p>A- Appear Confident: Note that you only need to <em>appear</em> confident</p>
                        <p>N- Negotiate: </p>

                    <h2>GIVE- Relationship Effectiveness</h2>
                        <p></p>

                    <h2>FAST- Self-Respect Effectiveness</h2>
                        <p></p>

                    <h2>Walk the Middle Path</h2>
                        <p></p>

                    <h2>Validation</h2>
                        <p></p>

                    <h2>Positive Reinforcement</h2>
                        <p></p>
            </div>
        )
    )
}

const EmotionRegulation = (props)=>{
    const {visible} = props
    return(
        (visible &&
            <div>

                <h1>Emotion Regulation Skills</h1>

                    <h2>Check the Facts</h2>
                    <p></p>

                    <h2>Opposite-to-Emotion Action</h2>
                    <p></p>

                    <h2>Problem-Solving</h2>
                    <p></p>

                    <h2>ABC's</h2>
                        <p></p>

                        <h3>A: Accumulate Positive Emotions</h3>
                            <p></p>

                        <h3>B: Build Mastery</h3>
                            <p></p>

                        <h3>C: Cope Ahead</h3>
                            <p></p>

                    <h2>PLEASE</h2>
                        <p></p>
                        
                    <h2>Mindfulness of Current Emotion</h2>
                        <p></p>

            </div>
        )
        
    )
}

const DistressTolerance = (props)=>{
    const {visible} = props
    return(
        (visible &&
            <div>
                <h1>Distress Tolerance Skills</h1>
                    <p></p>

                    <h2>STOP</h2>
                        <p></p>

                    <h2>Pros and Cons</h2>
                        <p></p>
                        
                    <h2>TIPP</h2>
                        <p></p>
                        
                    <h2>Distract</h2>
                        <p></p>
                        
                    <h2>Self-Soothe</h2>
                        <p></p>
                        
                    <h2>IMPROVE the moment</h2>
                        <p></p>
                        
                    <h2>Radical Acceptance</h2>
                        <p></p>
                        
                    <h2>Half-Smile/ Willing Hands</h2>
                        <p></p>
                        
                    <h2>Willingness</h2>
                        <p></p>                   
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
        <div>
            <div>
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
        </div>
    )
}

export default Skills;