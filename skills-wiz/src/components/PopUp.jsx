import React from 'react'
import './css/PopUp.css';

const PopUp = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        {props.children}
        <button className='close-popup' onClick={()=> {props.setTrigger(false)}}>close</button>
      </div>
    </div>
  ) : "";
}

export default PopUp
