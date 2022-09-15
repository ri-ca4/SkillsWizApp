import React, { useState } from "react";
import { Link } from "react-router-dom";


const Links = (props)=>{
    const {navVisibility} = props
    return(
        ( navVisibility &&
        <nav>
            <ul>
                <li className="nav-item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/skills'>Skills</Link>
                </li>
                <li className="nav-item">
                    <Link to='/resources'>Resources</Link>
                </li>
            </ul>
        </nav>
        )
    )
}


const Nav = ()=>{

    const [navVisibility, setNavVisibility] = useState(false);
    
    const handleClick = ()=>{
        setNavVisibility(v => !v);
    }


    return(
        <div>
            <button className="hamburger" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Links navVisibility={navVisibility}/>
        </div>
    )
}

export default Nav;