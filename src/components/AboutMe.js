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
                “Hi,I am Kishan Kumar. Born and brought up in Kundapura, Karnataka, I completed my Bachelor of Computer degree in 2011 and Master of Computer degree in 2014. I am qualified computer programmer where I work on various programming languages such as C#, Java, JavaScript, C++, Objective-C, ReactJs and React native. Have 6 years of experience in IT Industry as a module lead - Software Development.
                </p>
                </div>
            </div>
            
        </div>
    )
}

