import React, { useState } from "react";
import Results from "../components/Results";


const Main = ()=>{

    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = ()=>{setIsSubmitted(true)}
    return(
        ( !isSubmitted ?
        <div>
            input
            <button onClick={handleSubmit}>Submit</button>
        </div>
        :
        <Results/>
        )
    )
}

export default Main;