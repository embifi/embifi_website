import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import Zoom from "react-reveal/Zoom";
import Typewriter from "typewriter-effect";
import { GlobalInfo } from "../context/GlobalContext";
import intro_bg from "../Assets/intro-bg.svg";
import "./IntroSec.css";

function IntroSec() {
  const { home, services, whyUs, contactUs, quote } = useContext(GlobalInfo);
  const introImg = useRef();
  const handImg = useRef();
  const [isScrollIcon, setScrollIcon] = useState(true);
  let pos, top1, top2;

  const listenScrollEvent = () => {
    if (window.innerWidth <= 668) {
      top1 = `${pos - 130}px`;
      top2 = "380px";
      if (handImg.current?.getBoundingClientRect().top < 500) {
        introImg.current.style.position = "absolute";
        introImg.current.style.top = top1;
      } else {
        introImg.current.style.position = "fixed";
        introImg.current.style.top = top2;
      }
    } else {
      top1 = `${pos - 300}px`;
      top2 = "200px";

      if (handImg.current?.getBoundingClientRect().top < 500) {
        introImg.current.style.position = "absolute";
        introImg.current.style.top = top1;
      } else {
        introImg.current.style.position = "fixed";
        introImg.current.style.top = top2;
      }
    }

    const position = window.pageYOffset;
    position > 30 ? setScrollIcon(false) : setScrollIcon(true);
  };

  useEffect(() => {
    pos = handImg.current?.getBoundingClientRect().y + window.scrollY;
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  });

  return (
    <>
      <section className="Section-1">
        <img src={intro_bg} className="intro-bg-img" />
        <div className="landing-page">
          <div className="floating-bg"></div>
          <div className="text-center">
            <p className="intro-sec-title">
              Embedding Finance in EV for a Better Tomorrow!{" "}
            </p>
            <h1 className="intro-sec-subtitle">
              <span className="heading-1">Ev Financing</span>
              <span className="heading-2">Checkout Financing</span>
              <span className="heading-3">Payment</span>
            </h1>
            <Button
              className="intro-btn ms-0 mt-4 banner-btn"
              variant="outlined"
              onClick={() =>
                quote.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn more
            </Button>
            {/* <button class="banner-btn">Learn More</button> */}
          </div>
          {/* <Button
            className="intro-btn ms-0 mt-4"
            variant="outlined"
            onClick={() =>
              quote.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn more
          </Button> */}
        </div>
      </section>
    </>
  );
}

export default IntroSec;
