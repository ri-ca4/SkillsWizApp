import React from 'react'
import ResultsFooter from './ResultsFooter'

const InterEffectiveResults = () => {
  return (
    <div className='results-container'>
      <div className='ieresults'>
        <h1>Interpersonal Effectiveness</h1>
        <h2>Use when emotions are low</h2>
        <h2>Balance self and others</h2>
        <ul>
          <li><span className="skill">Clarifying Priorities</span></li>
          <li><span className="skill">DEAR MAN</span>- objective effectiveness</li>
          <li><span className="skill">GIVE</span>- relationship effectiveness</li>
          <li><span className="skill">FAST</span>- self-respect effectiveness</li>
          <li><span className="skill">Options for intensity</span></li>
        </ul>
      </div>
      <ResultsFooter />
    </div>
  )
}

export default InterEffectiveResults
