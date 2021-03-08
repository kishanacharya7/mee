import React from "react";
import author from "../images/profilePic.jpg";

export const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                <img src={author} alt="author..." className="profile-img"/>
                </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>About Me</h1>
                <p>
                “Kishan Kumar,  Module Lead-Software Development. Born and brought up in Kundapura, Karnataka, Completed Bachelor of Computer degree in 2011 and Master of Computer degree in 2014. Qualified computer programmer where I work on various programming languages such as C#, Java, JavaScript, C++, Objective-C, ReactJs and React native. 
Dynamic and creative software developer with over 6 years of experience in producing robust code for high-volume companies. Eager to support the dev team with top-notch coding skills.
                </p>
                </div>
            </div>
            
        </div>
    )
}

