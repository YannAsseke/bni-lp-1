import React from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Banner = () => {
  return (
    <div className="business-banner-area">
      <div className="container-fluid">
        <div className="business-banner-content">
        <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            The new
          </h3>

          <h1 data-aos="fade-up" data-aos-duration="1200">
            T-Cross
          </h1>
          <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            is here
          </h3>

          <ScrollLink
                
                
                to='forms'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                      <div
            className="btn-box"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
           
              <a className="btn-style-one blue-dark-color">
                Contact-us 
              </a>
            
          </div>
              </ScrollLink>


  
        </div>
      </div>
    </div>
  );
};

export default Banner;
