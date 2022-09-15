import React from 'react'
import ResultsFooter from './ResultsFooter'

const DistressTolResults = () => {
  return (
    <div className='results-container'>
      <div className='dtresults'>
        <h1>Distress Tolerance:<br/>
            Crisis Survival Strategies</h1>
        <h2>Emotions are really high</h2>
        <h2>You can't change the situation</h2>
        <h3>General Examples:</h3>
        <ul>
          <li>It's hard to think or focus- <span className="skill">TIPP: ice</span></li>
          <li>It's hard to stop crying- <span className="skill">TIPP: paced breathing</span></li>
          <li>You feel sad or spaced out- <span className="skill">TIPP: intense exercise</span></li>
          <li>You feel agitated- <span className="skill">Self Soothe</span></li>
          <li>You feel hopeless- <span className="skill">IMPROVE: meaning making</span></li>
          <li>You are ruminating- <span className="skill">Distract</span></li>
          <li>You have ineffective urges- <span className="skill">STOP</span></li>
          <li>You are feeling impulsive- <span className="skill">Pros and Cons</span></li>
        </ul>
      </div>
      <ResultsFooter />
    </div>
  )
}

export default DistressTolResults
