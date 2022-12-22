import React, { useState } from "react";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";

function NavigationBar(props) {
    let { SportsClicked } = props;
   

    return (
        <div>
            <div>
                <ul>
                    <li>
                        <NavLink to="./" className="NavItem">
                            <span onClick={() => SportsClicked("top-headlines")}>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./technology" className="NavItem">
                            <span onClick={() => SportsClicked("technology")}>Technology</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./entertainment" className="NavItem">
                            <span onClick={() => SportsClicked("entertainment")}>Entertainment</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./science" className="NavItem">
                            <span onClick={() => SportsClicked("science")}>Science</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./general" className="NavItem">
                            <span onClick={() => SportsClicked("general")}>General</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./Sports" className="NavItem">
                            <span onClick={() => SportsClicked("sports")}>Sports</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationBar;
