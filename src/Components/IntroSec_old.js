import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import Zoom from "react-reveal/Zoom";
import Typewriter from "typewriter-effect";
import { GlobalInfo } from "../context/GlobalContext";

function IntroSec() {
  const { home, services, whyUs,contactUs, quote } = useContext(GlobalInfo);
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
      <section className="intro-sec section-1" ref={home}>
        <Container className="w-100">
          <Row>
            <Col md={6}>
              <div className="intro-left ms-3">
                <h1>B2B Checkout </h1>
                <h1>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Financing, Lending, Payments")
                        .changeDelay(75)
                        .start();
                    }}
                  />
                </h1>
              </div>
              <Button
                className="intro-btn ms-3 mt-4"
                variant="outlined"
                onClick={() =>
                  quote.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn more
              </Button>
            </Col>
            <Col className="intro-img-col" md={6}>
              <img
                src="https://drilca9ckdzo8.cloudfront.net/fit-in/money.png"
                width="100%"
                className="vert-move intro-pic"
                ref={introImg}
                draggable={false}
              />
            </Col>
          </Row>
        </Container>
        <div
          class="scroll-down"
          style={
            isScrollIcon
              ? { opacity: 1, transition: "all 1s" }
              : { opacity: 0, transition: "all 1s" }
          }
        ></div>
      </section>
      <section className="intro-sec bg-dark section-2">
        <Container>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <div className="embi-logo">
                <img src="https://drilca9ckdzo8.cloudfront.net/embi.svg" alt="" />
              </div>
              <Zoom>
                <p className="text-center mt-3">
                  <span className="mx-3">BUILD</span>|
                  <span className="mx-3">ENABLE</span>|
                  <span className="mx-3">EMBED</span>
                </p>
              </Zoom>
            </Col>
            <Col
              className="intro-img-col"
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
            >
              <img
                src={"https://drilca9ckdzo8.cloudfront.net/hand.svg"}
                width="100%"
                className="vert-move intro-hand-pic"
                ref={handImg}
                draggable={false}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default IntroSec;
