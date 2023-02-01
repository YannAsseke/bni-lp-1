import React from "react";
import Link from "next/link";
import features2 from "@/public/images/logo-bni.jpg";
import Image from "next/image";

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Banner = () => {
  return (
    <>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <div
                  className="col-xs-8 col-sm-10 overview-image"
                >
                  <Image
                    src={
                      features2
                    }
					className="img-prop" />
                </div>
          </a>
        </div>
      </nav>
    <div className="business-banner-area">
      
      <div className="container-fluid">
        <div className="business-banner-content">
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
            
          </div>
              </ScrollLink>


  
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;
