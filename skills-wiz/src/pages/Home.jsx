import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../components/PopUp";
import useSessionStorage from "../hooks/useSessionStorage";
import "../App.css"
import "./css/home.css"

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
        <div className="homepage">
            <Link to='/main_app'><button>Start</button></Link>
            <PopUp trigger={timedPopup} setTrigger={setTimedPopup}>
                <h3>Pop-up</h3>
            </PopUp>
        </div>
    )
}

export default Home;