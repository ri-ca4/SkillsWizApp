import React, { useState } from "react";
import Results from "../components/Results";


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
        <div>
            <input type={'number'} min='0' max='100' value={userInput} onChange={handleOnChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        :
        <Results value={userInput}/>
        )
    )
}

export default Main;