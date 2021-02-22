import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

export const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Website, Desktop and Mobile Apps Development</h1>
                <Typed
                 className="typed-text"
                 strings={["Web Design", "Web Development", "Desktop Apps", "Mobile Apps"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                />
                <Link smooth={true} to="contacts" offset={-80} className="btn-main-offer" href="#">Contact</Link>
            </div>
        </div>
    )
}
