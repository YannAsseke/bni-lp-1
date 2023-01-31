import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";

const Gallery = () => {

  return (
    <>
      
        <div className="blog-area ptb-50">
          <div className="container">
          <div className="row justify-content-center ">
        

        <div className="col-lg-4 col-md-6">
          <div className="single-footer-widget ">
            
          {/* <button
                  className="btn-style-two blue-dark-color"
                ><a download href="/files/54635V_1.PDF">
                 Download the brochure</a>
                </button> */}
          </div>
        </div>
      </div>
            <div className="row justify-content-center">
           

                <div
                  className="col-xl-6 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                 
                >
                  <div className="single-blog-post">
                    <div className="image">
                      
                     
                          <Image
                            src={galerie1}
                            
                          />
                       
                      
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-6 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                 
                >
                  <div className="single-blog-post">
                    <div className="image">
                      
                     
                          <Image
                            src={galerie2}
                            
                          />
                       
                      
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                 
                >
                  <div className="single-blog-post">
                    <div className="image">
                      
                     
                          <Image
                            src={galerie3}
                            
                          />
                       
                      
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                 
                >
                  <div className="single-blog-post">
                    <div className="image">
                      
                     
                          <Image
                            src={galerie4}
                            
                          />
                       
                      
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                 
                >
                  <div className="single-blog-post">
                    <div className="image">
                      
                     
                          <Image
                            src={galerie5}
                            
                          />
                       
                      
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Gallery;
