import React, { useContext } from "react";
import { GlobalInfo } from "../context/GlobalContext";
import bn from "../Assets/ba-icon.svg";
// import "./Services.css";
import "./Services.scss";

function Services() {
  const { home, services, whyUs, contactUs, quote } = useContext(GlobalInfo);

  return (
    <section id="services" ref={services}>
      <div className="header">
        <h1 className="underline">Product & Modules</h1>
      </div>

      <div className="service__circle">
        
        <div className="sub-circle circle-1">1</div>
        <div className="sub-circle circle-2">2</div>
        <div className="sub-circle circle-3">3</div>
        <div className="sub-circle circle-4">4</div>
        <div className="sub-circle circle-5">5</div>
        <div className="sub-circle circle-6">6</div>
        <svg
          id="circle-nav-services"
          width="100%"
          height="100%"
          viewBox="0 0 650 550"
        >
          <defs>
            <filter id="service-shadow" height="2" width="2" y="-.5" x="-.5">
              <feOffset result="offOut" in="SourceGraphic" dx="0" dy="5" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="12" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>

          <svg x="150" y="0" width="350" height="350" viewBox="0 0 500 500">
            <linearGradient
              id="a"
              gradientUnits="userSpaceOnUse"
              x1="250.2542"
              y1="496.283"
              x2="250.2542"
              y2="-.2102"
            >
              <stop offset="0" stop-color="#0F68A9" />
              <stop offset="1" stop-color="#3DDEED" stop-opacity="0" />
            </linearGradient>
            <path
              fill="url(#a)"
              d="M250.3 0c137 0 248.1 111.1 248.1 248.1S387.3 496.2 250.3 496.2 2.2 385.1 2.2 248.1 113.2 0 250.3 0C112.5 0 .8 111.7.8 249.5S112.5 499 250.3 499s249.5-111.7 249.5-249.5S388 0 250.3 0z"
            />
          </svg>

          {/* <circle cx="325" cy="170" r="140" class="center" /> */}

          <use
            x="185"
            y="30"
            width="280"
            height="280"
            href="#circle-nav-copy"
            class="nav-copy"
          />
          {/* <rect data-url="/industries" id="learn-more" x="280" y="250" width="90" height="30" /> */}
          {/* <text x="290" y="270" class="learn-more-text">Learn more</text> */}
        </svg>
        <img src={bn} width={"40rem"} height={"40rem"} className="Image"/>
      </div>
    </section>
  );
}

export default Services;
