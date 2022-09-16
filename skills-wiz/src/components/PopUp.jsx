import React from 'react'
import './css/PopUp.css';

const PopUp = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-popup' onClick={()=> {props.setTrigger(false)}}>close</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default PopUp
