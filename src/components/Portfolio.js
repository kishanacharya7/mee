import React from "react";
import netflix from "../../src/images/esslsecurity.png";
import websitedev from "../../src/images/ArbiterSports.png";
import hotstar from "../../src/images/biometrics-logo.gif";
import sonylv from "../../src/images/JioUPI.jpeg";
//FONT AWSESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearchPlus } from '@fortawesome/free-solid-svg-icons'

//REACT POPUPBOX
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

export const Portfolio = () => {
    //NETFLIX POPUPBOX
    const openPopupboxNetflix=()=>{
        const content=(
        <>
        <img className="portfolio-image-popupbox" src={netflix} alt="ESSL COMMUNICATION SOFTWARE"/>
        <p>
        ESSL COMMUNICATION SOFTWARE,This project used as a bridge between end User and Hardware Device (Reader). Through the
communication Software user can send and receive data in the reader. Communication Software is
used to back up the data from the reader which is crashed. It allows the end user to block the
particular user punch and change the access from one to another. Monitoring and downloading of
data also can perform in the communication software.
        </p>
        <b>Technologies Used : </b>
        C# WPF, SQL Server 2008 R2
        <br/>
        <b>Client : </b>
        BHEL - Hyderabad
        </>
        )
      PopupboxManager.open({content})
    }

    const popupboxCofigNetflix={
            titleBar:{
                enable:true,
            //    text:"ESSL COMMUNICATION SOFTWARE",
            },
            fadeIn:true,
            fadeInSpeed:500
    }

     //WEBAPP POPUPBOX
    const openPopupboxWebApp=()=>{
        const content=(
        <>
        <img className="portfolio-image-popupbox" src={websitedev} alt="Arbiter Sports"/>
        <p>
        Arbiter Sports has been leading the pack in Athletic Event Micromanagement ArbiterOne,
ArbiterGame, Arbiter Pay, Arbiter Works, Arbiter360, and Arbiter Connected. Combined, these

products deliver unprecedented visibility over the entire process of organizing athletic events. Built on
a powerful web-based re-crystallization access from anywhere.
        </p>
        <b>Technologies Used : </b>
        C#, ASP.Net, MVC, WCF, SQL Server 2012.
        <br/>
        <b>Client : </b>
        Arbiter Sports Club - USA
        <br/>
        <b>Website:</b>
            <a className="hyper-link" onClick={()=>window.open("https://www.arbitersports.com/","_blank")}>https://github.com/login</a>
        </>
        )
      PopupboxManager.open({content})
    }

    const popupboxCofigWebApp={
            titleBar:{
                enable:true,
              //  text:"Arbiter Sports",
            },
            fadeIn:true,
            fadeInSpeed:500
    }

     //HOTSTAR POPUPBOX
     const openPopupboxHotStar=()=>{
        const content=(
        <>
        <img className="portfolio-image-popupbox" style={{height:"233px"}} src={hotstar} alt="Bio-Metric System"/>
        <p>
        Bio-Metric System is software that reads finger prints and thumb impressions from reader machines
and saves on a database. The software refers the database to check on entry and exit of people and
keeps track of it. WEBSTARS is multi users Software in which we can trace any modification done
by the user. WEBSTARS used in different location with accumulate only the location employee and
the user can add or deleted the employee from one location to another it also effect in the readers.
        </p>
        <b>Technologies Used : </b>
        C#, ASP.Net &amp; SQL server 2008 R2.
        <br/>
        <b>Client : </b>
        Triton Valves - Bangalore
        <br/>
              </>
        )
      PopupboxManager.open({content})
    }

    const popupboxCofigHotStar={
            titleBar:{
                enable:true,
               // text:"Bio-Metric System",
            },
            fadeIn:true,
            fadeInSpeed:500
    }

     //SONYLV POPUPBOX
     const openPopupboxSonyLv=()=>{
        const content=(
        <>
        <img className="portfolio-image-popupbox" src={sonylv} alt="JioPay UPI"/>
        <p>
        JioPay UPI is a mobile application implemented in KaiOS operating system. User should enroll the
Debit/Credit and they transfer the money to others through mobile. User can check the account details and
transaction history. user can login with 4 UPI digit pin.
        </p>
        <b>Technologies Used : </b>
        ReactJs and Web API.
        <br/>
        <b>Client : </b>
        Reliance Jio Info Comm - Bangaluru.
    </>
        )
      PopupboxManager.open({content})
    }

    const popupboxCofigSonyLv={
            titleBar:{
                enable:true,
                //text:"JioPay UPI",
            },
            fadeIn:true,
            fadeInSpeed:500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                 {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxWebApp}>
                        <img className="portfolio-image" src={websitedev} alt="Web App Clone Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxHotStar}>
                        <img className="portfolio-image" src={hotstar} alt="Hotstar Clone Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxSonyLv}>
                        <img className="portfolio-image" src={sonylv} alt="ESSL COMMUNICATION SOFTWARE"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxCofigNetflix}/>
            <PopupboxContainer {...popupboxCofigWebApp}/>
            <PopupboxContainer {...popupboxCofigHotStar}/>
            <PopupboxContainer {...popupboxCofigSonyLv}/>
        </div>
    )
}
