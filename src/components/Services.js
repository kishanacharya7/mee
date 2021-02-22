import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArtstation, faFacebook, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {faDesktop, faFileCode, faMobile } from '@fortawesome/free-solid-svg-icons'

export const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">my services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faArtstation} size="2x"/></div>
                                <h3>Web Design</h3>
                                <p>I approach each individually and always focus on the result.</p>
                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                                <h3>Web Development</h3>
                                <p>Your website will be build with an new proven technologies</p>
                            </div>
                        </div>
                         {/*-*/}
                         <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Desktop Apps</h3>
                                <p>Using powerful framework for building Windows applications with rich UI design. User interface frameworks offered by Microsoft</p>
                            </div>
                        </div>
                         {/*-*/}
                         <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faMobile} size="2x"/></div>
                                <h3>Mobile Apps</h3>
                                <p>Building a native apps for Android and iOS using React native</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
