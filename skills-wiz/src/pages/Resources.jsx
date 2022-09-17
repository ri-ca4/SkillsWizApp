import React from 'react';
import './css/pages.css';
import {Link} from 'react-router-dom'

const Resources = ()=> {
  return (

    <div className='resourcesPage'>
      <div className="resourcesHeader">
          <h1>Mental Health Resources</h1>
          <h2>(United States)</h2>
      </div>
      <div className='resourcesSection'>
        <h2>NAMI HelpLine:</h2>
        <p>call 800-950-NAMI (6264)<br/>text 62640<br/>chat NAMI.org</p>
      </div>
      <div className='resourcesSection'>
        <h2>If you are in <em><strong>immediate danger:</strong></em><br/>
            call 911:</h2>
        <p>Notify the operator that this is a psychiatric emergency</p>
        <p>ask for officers trained in crisis intervention</p>
      </div>
      <div className='resourcesSection'>
        <h2>If you need <em><strong>immediate help in a crisis:</strong></em></h2>
        <p>National Suicide Prevention Lifeline: 800-273-TALK (8255)</p>
        <p>Crisis Text Line: text NAMI to 741-741</p>
        <p>National Domestic Violence Hotline: 800-799-SAFE (7233)</p>
        <p>National Sexual Assault Hotline: 800-656-HOPE (4673)</p>
      </div>
      <div className='moreInfo'>
        <h2>This information was taken from NAMI.org, <br/>
            if you want more details please visit: <br/>
            <a href="https://www.nami.org/help">www.nami.org/help</a></h2>
      </div>
    </div>
  )
}

export default Resources