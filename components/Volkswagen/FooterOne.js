import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FooterOne = () => {
 

  const currentYear = new Date().getFullYear();
  return (
    <div className="template-footer-one with-top-border">
      

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <p>
                Copyright © Volkswagen T-Cross {currentYear} 
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
