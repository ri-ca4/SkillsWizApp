import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Disclaimer from "../components/Disclaimer";
import PopUp from "../components/PopUp";
import useSessionStorage from "../hooks/useSessionStorage";
import "./css/pages.css"

const Home = ()=>{
    const [timedPopup, setTimedPopup] = useState(false);
    const [termsAccepted, setTermsAccepted] = useSessionStorage('terms', false);
    
    if (!termsAccepted){
            setTimeout(()=>{
                setTimedPopup(true);
            }, 500);
        
        setTermsAccepted(true);
    }


    return(
        <div className="homepage">
            <Link to='/main_app'><button>Start</button></Link>
            <PopUp trigger={timedPopup} setTrigger={setTimedPopup}>
                <Disclaimer />
            </PopUp>
        </div>
    )
}

export default Home;