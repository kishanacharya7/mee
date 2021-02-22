import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar1.png";
import avatar2 from "../images/avatars/avatar2.png";
import avatar3 from "../images/avatars/avatar3.png";
import avatar4 from "../images/avatars/avatar4.png";


const TestimonialsCarousel = () => {
    return (
      <Carousel
       showArrows={true}
       infiniteLoop={true}
       showThumbs={false}
       showStatus={false}
       autoPlay={true}
       interval={3000}
      >
          <>
           <img src={avatar1} alt="John Doe 1"/>
           <div className="myCarousel">
           <h3>Arbiter Sports Club - USA</h3>
           <p>
           ArbiterSports provides a complete suite of tools and technology that caters to the needs of Assigners, Coordinators, Business Offices, Game officials and Athletic or Federal Program Directors.  Implementing our system allows you to track your entire athletic schedule and receive training or support in a customizable fashion from your mobile device.
           </p>
           </div>
          </>
          <>
           <img src={avatar2} alt="John Doe 2"/>
           <div className="myCarousel">
           <h3>Bharat Heavy Electricals Limited</h3>
           <p>
           BHEL is one of the largest engineering and manufacturing companies of its kind in India engaged in design, engineering, construction and servicing of a wide range of products and services with over 180 product offerings to meet the ever-growing needs of the core sectors of economy.
           </p>
           </div>
          </>
          <>
           <img src={avatar3} alt="John Doe 3"/>
           <div className="myCarousel">
           <h3>Reliance Jio Infocomm Ltd.(RnD)</h3>
           <p>
           Reliance Jio Infocomm Limited, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Mumbai, Maharashtra, India. It operates a national LTE network with coverage across all 22 telecom circles. It uses only voice over LTE to provide voice service on its 4G network.
           </p>
           </div>
          </>
          <>
           <img src={avatar4} alt="John Doe 4"/>
           <div className="myCarousel">
           <h3>Bosch-Jaipur</h3>
           <p>
           Jaipur Plant is the fourth location of Bosch Ltd. In India, commissioned in 1999 with a state-of-the-art manufacturing facility to produce FIP's. A TS16949 and ISO 14001 certified company, it is a technological oasis in the developing state of Rajasthan. Jaipur Plant is the lead plant for VE pump.
           </p>
           </div>
          </>
      </Carousel>
    )
}

export default TestimonialsCarousel
