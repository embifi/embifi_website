import React, { useContext } from "react";
import { GlobalInfo } from "../context/GlobalContext";
import bn from "../Assets/ba-icon.svg";
import riksha from "../Assets/Copy of Logos (1).svg";
// import "./Services.css";
import "./Services.scss";

function Services() {
  const { home, services, whyUs, contactUs, quote } = useContext(GlobalInfo);

  return (
    <section id="services" ref={services}>
      <div className="header">
        <h1 className="underline">Product & Modules</h1>
      </div>

      {/* <div className="service__circle">
      <div className="service__circle-align">  
        <div className="sub-circle circle-1"><p>Loan Processing</p></div>
        <div className="sub-circle circle-2"><p>KYC Module</p></div>
        <div className="sub-circle circle-3"><p>Loan Processing</p></div>
        <div className="sub-circle circle-4"><p>Collections</p></div> */}
      {/* <div className="sub-circle circle-5"><p>Underwriting</p></div>
        <div className="sub-circle circle-6">And much more</div> */}
      {/* </div>  
        <svg
          id="circle-nav-services"
          width="60%"
          height="60%"
          viewBox="0 0 250 250"
        >
      
        
        </svg>
        <img src={riksha} width={"40rem"} height={"40rem"} className="Image" /> */}
      {/* </div> */}
      {/* <div class="container">
        <div class="row">
          <div class="col">
            <div className="circle-div">
              <div className="heading-name service-heading-1">Loan Application</div>
              <div className="heading-name service-heading-2">Collection</div>
              <div className="heading-name service-heading-3">Loan Processing</div>
              <div className="heading-name service-heading-4">Underwriting</div>
              <img src={riksha} alt="loading..." className="rikha-image" />
              </div>
          </div>
        </div>
      </div> */}


      <div className="service-container">
        <div className="services" id="service-1">Loan Application</div>
        <div className="services" id="service-2">Collection</div>
        <div className="services" id="service-5"><img src={riksha} alt="" className="service-img"/></div>
        <div className="services" id="service-3">Loan Processing</div>
        <div className="services" id="service-4">Underwriting</div>
        <div className="services" id="service-6">Kyc Module</div>
        <div className="services" id="service-7">And much more</div>
      
        
      </div>
      
    </section>
  );
}

export default Services;
