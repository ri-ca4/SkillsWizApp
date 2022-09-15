import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../components/PopUp";
import useSessionStorage from "../hooks/useSessionStorage";

const Home = ()=>{
    const [timedPopup, setTimedPopup] = useState(false);
    const [termsAccepted, setTermsAccepted] = useSessionStorage('terms', false);
    
    if (!termsAccepted){
            setTimeout(()=>{
                setTimedPopup(true);
            }, 3000);
        
        setTermsAccepted(true);
    }


    return(
        <div>
            <p>home page</p>
            <button><Link to='/main_app'>Start</Link></button>
            <PopUp trigger={timedPopup} setTrigger={setTimedPopup}>
                <h3>Pop-up</h3>
            </PopUp>
        </div>
    )
}

export default Home;