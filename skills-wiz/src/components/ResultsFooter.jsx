import React from 'react'
import { Link } from "react-router-dom";

const ResultsFooter = () => {
  return (
    <div className='mindfulness'>
    <h1>Remember</h1>
    <h2>Core Mindfulness</h2>
    <h3>Use these skills with all other skills</h3>
    <h3>Practice all the time</h3>
    <h3>Take hold of your mind!</h3>
    <ul>
        <li>States of mind: Emotion mind, Reasonable mind, Wise mind</li>
        <li>"What" to do while mindful: Observe, Describe, Participate</li>
        <li>"How" to do it: Non-judgementally, One-mindfully, Effectively</li>
    </ul>
    <button><Link to='/'>Home</Link></button>
    <button><Link to='/skills'>See Skills</Link></button>
  </div>
  )
}

export default ResultsFooter
