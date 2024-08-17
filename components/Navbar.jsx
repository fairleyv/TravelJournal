import React from "react";
import worldIcon from "../src/assets/worldIcon.png"

export default function Navbar () {
    return (
        <div>
            <nav className="navbar">
                <img className="navbarWorldIcon" src={worldIcon} alt="An icon of the earth"/>
                <h1 className="navbarTitle">my travel journal.</h1>
            </nav>
        </div>
    )
}