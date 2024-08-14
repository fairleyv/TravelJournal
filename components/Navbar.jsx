import React from "react";
import worldIcon from "../src/assets/worldIcon.png"

export default function Navbar () {
    return (
        <div>
            <nav>
                <img className="navbarWorldIcon" src={worldIcon}/>
                <h1 className="navbarTitle">my travel journal.</h1>
            </nav>
        </div>
    )
}