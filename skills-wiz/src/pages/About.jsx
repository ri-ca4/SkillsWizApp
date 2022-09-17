import React from "react";
import './css/pages.css';

const About = ()=>{
    return(
        <div className="aboutPage">
            <div>
                <h1>What is DBT?</h1>
                <p>Dialectical Behavioral Therapy is a therapeutic approach focused on 
                    four modules: Mindfulness, Interpersonal Effectiveness, Emotion 
                    Regulation, and Distress Tolerance. It teaches healthy coping skills 
                    and encourages living in the moment. DBT was originally developed to 
                    treat Borderline Personality Disorder, but is currently used to treat 
                    many disorders with great success.
                </p>
            </div>
            <div>
                <h1>About this app:</h1>
                <h2>What this app is:</h2>
                <p>This app is intended to be used as a tool to assist individuals and 
                    providers during and after treatment.
                </p>
                <h2>What this app isn't:</h2>
                <p>This app is <em>NOT</em> a substitute for professional care. It 
                    is not a crisis management tool. It is not professional medical 
                    advice.</p>
                <h1>About the creator</h1>
                <p>ri-ca4 is a web developer with a special interest in creating websites
                    and applications centered around mindfulness and mental health. They 
                    went through a DBT program themselves which changed their life, and now
                    hopes to help others like them.
                </p>
            </div>
        </div>
    )
}

export default About;