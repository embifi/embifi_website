import React, { useContext } from "react";
import { GlobalInfo } from "../context/GlobalContext";
import bn from "../Assets/ba-icon.svg";
import riksha from "../Assets/Copy of Logos (1).svg"
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
        <div className="sub-circle circle-4"><p>Collections</p></div>
        <div className="sub-circle circle-5"><p>Underwriting</p></div>
        <div className="sub-circle circle-6">And much more</div>
        </div>  
        <svg
          id="circle-nav-services"
          width="60%"
          height="60%"
          viewBox="0 0 250 250"
        >
      
        
        </svg>
        <img src={riksha} width={"40rem"} height={"40rem"} className="Image" />
      </div> */}
    </section>
  );
}

export default Services;
