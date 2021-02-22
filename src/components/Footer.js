import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon,
    InstapaperShareButton,
    InstapaperIcon
} from "react-share";
import {Link} from "react-scroll";

export const  Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                          <p>
                             Bangaluru, Karnataka
                          </p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-555">
                                +918861032900
                            </a>
                        </div>
                        <div className="d-flex">
                        <p>
                             kishanat007@gmail.com
                          </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                            <Link smooth={true} to="home" offset={-80} className="footer-nav" href="#">Home <span className="sr-only">(current)</span></Link>
                                <br/>
                                <Link smooth={true} to="about" offset={-80} className="footer-nav" href="#">About me</Link>
                                <br/>
                                <Link smooth={true} to="services" offset={-80} className="footer-nav" href="#">Services</Link>
                            </div>
                            <div className="col">
                            <Link smooth={true} to="experience" offset={-80} className="footer-nav" href="#">Experience</Link>
                                <br/>
                                <Link smooth={true} to="portfolio" offset={-80} className="footer-nav" href="#">Portfolio</Link>
                                <br/>
                                <Link smooth={true} to="contacts" offset={-80} className="footer-nav" href="#">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton 
                            url={"https://www.facebook.com/kishan.kishan.acharya"} 
                            quote={"FullStack Developer"} 
                            hashtag="#javascript">
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <TwitterShareButton 
                            url={"https://twitter.com/Kishanacharya1"} 
                            quote={"FullStack Developer"} 
                            hashtag="#javascript">
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            
                            {/* <InstapaperShareButton 
                            url={"https://www.udemy.com/course/build-portfolio-with-reactjs-and-bootstrap/learn/lecture/24022970#overview"} 
                            quote={"FullStack Developer"} 
                            hashtag="#javascript">
                                <InstapaperIcon className="mx-3" size={36}/>
                            </InstapaperShareButton> */}

                            
                            <LinkedinShareButton 
                            url={"https://www.linkedin.com/in/kishan-acharya-13863477/"} 
                            quote={"FullStack Developer"} 
                            hashtag="#javascript">
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Stack Software Pvt Ltd. | All right reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
