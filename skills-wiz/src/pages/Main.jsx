import React, { useState } from "react";
import Results from "../components/Results";
import "./css/main.css"

const Main = ()=>{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userInput, setUserInput] = useState(0);
    
    const handleOnChange = (event)=>{
        console.log(event.target.value);
        setUserInput(event.target.value)
    }

    const handleSubmit = ()=>{
        setIsSubmitted(true);
    }

    return(
        ( !isSubmitted ?
        <div className="input-container">
            <div className="userInput">
                <div>
                    <h1>Rate your distress level<br/>from 0-100</h1>
                </div>
                <br/><br/>
                <input type={'range'} step='5' min='0' max='100' value={userInput} onChange={handleOnChange} placeholder={userInput}/>
                <br/>
                <input type={'number'} min='0' max='100' value={userInput} onChange={handleOnChange} placeholder={userInput}/>
                <br/>
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        :
        <Results value={userInput}/>
        )
    )
}

export default Main;