import React from 'react'
import ResultsFooter from './ResultsFooter'

const EmotionRegResults = () => {
  return (
    <div className='results-container'>
      <div className='erresults'>
        <h1>Emotion Regulation:</h1>
        <h2>Increase resilience</h2>
        <h2>Change emotions</h2>
        <h2>Accept emotions</h2>
        <h3>Increase Resilience- use often</h3>
        <ul>
          <li><span className="skill">Accumulate Positive Experiences- Short term</span>- add more pleasure</li>
          <li><span className="skill">Accumulate Positive Experiences- Long term</span>- build a life worth living</li>
          <li><span className="skill">Build Mastery</span>- feel competent and confident</li>
          <li><span className="skill">Cope Ahead</span>- prepare for difficult situations</li>
          <li><span className="skill">PLEASE</span>- increase biological resilience</li>
        </ul>
        <h3>Change Emotions- use when needed</h3>
        <ul>
          <li><span className="skill">Model of emotions</span>- figure out emotion, urge and intensity</li>
          <li><span className="skill">Check the Facts</span>- is this due to situation, thoughts, or both?</li>
          <li><span className="skill">Opposite Action</span>- change emotions via behavior</li>
          <li><span className="skill">Problem Solving</span>- change a situation</li>
        </ul>
        <h3>Accept Emotions- use often</h3>
        <ul>
          <li><span className="skill">Mindfullness of current emotion</span></li>
          <li><span className="skill">Radical Acceptance</span></li>
          <li><span className="skill">Willingness</span></li>
          <li><span className="skill">Half-Smile/Willing-Hands</span></li>
        </ul>
      </div>
      <ResultsFooter />
    </div>
  )
}

export default EmotionRegResults
