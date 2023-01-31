import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";




const Features = () => {

  return (
    <>
      <div className="overview-area ptb-50 bg-ffffff accordion-body feature-1">
        <div className="container">

       


          
            <div className="overview-item-style-two; " >
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 overview-content">
                  <h2 className="vwtextregular-font">
                    T-Cross
                  </h2>
                  <p className="vwtextregular-font">Fun and stylish outside. Spacious and comfortable inside, the T-Cross is made to impress.<br/> 
                  With its striking design and eye catching colors, you are going to feel unique in it.<br/>
                  Practical and spacious, drive comfortably thanks to the adjustable driver’s seat, the multi-function steering wheel and modern dashboard. </p>

                  {/* <div className="partner-area ">
      <div className="container">
        <div className="partner-slides">
          
            <div
              className="partner-slides "
              
            >
             
              <div className="partner-item">
                <Image src={partnerImg2} alt="partner-image" />
                <Image src={partnerImg3} alt="partner-image" />
                <Image src={partnerImg4} alt="partner-image" />
              </div>
              
             
            </div>
         
        </div>
      </div>
    </div> */}
               
                </div>

                <div
                  className="col-lg-6 col-md-12 overview-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <Image
                    src={
                      features1
                    }
                    
                  />
                </div>
             
              </div>
            </div>
          



          
        </div>
      </div>
    </>
  );
};

export default Features;
