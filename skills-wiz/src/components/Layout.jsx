import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";




const Layout = ()=> {
    return(
        <div className="container">
            <div className="app">
                <div className="app-inner">
                    <Nav />

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;