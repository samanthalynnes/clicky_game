import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul className="center navList">
                <li className="logo">Clicky Game!</li>
                <li className="score"> Score: {props.score} | High Score: {props.highScore} </li>
            </ul>
        </nav>
    )
}

export default Nav;