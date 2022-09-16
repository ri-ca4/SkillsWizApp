import React, { useState } from "react";
import { Link } from "react-router-dom";


const Links = (props)=>{
    const {navVisibility, setNavVisibility} = props

    const handleClick = ()=>{
        setNavVisibility(v => !v);
    }

    return(
        ( navVisibility &&
        <nav>
            <ul>
            <Link to='/'>
                <li className="nav-item" onClick={handleClick}>
                    Home
                </li>
            </Link>
            <Link to='/about'>
                <li className="nav-item" onClick={handleClick}>
                    About
                </li>
            </Link>
            <Link to='/skills'>
                <li className="nav-item" onClick={handleClick}>
                    Skills
                </li>
            </Link>
            <Link to='/resources'>
                <li className="nav-item" onClick={handleClick}>
                    Resources
                </li>
            </Link>
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
            <Links navVisibility={navVisibility} setNavVisibility={setNavVisibility}/>
        </div>
    )
}

export default Nav;