import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GlobalInfo } from "../context/GlobalContext";

function Quote() {

  const { home, services, whyUs, contactUs, quote } = useContext(GlobalInfo);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 300) setIsAnimated(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <section id="quote" ref={quote}>
      <Container>
        <Row className="quote-container">
          <Col className="quote-left" md={12}>
            <div className="quote-left-div">
              {/* <h1>Why are we building <img src={logoSrc} width="250px"/> ?</h1> */}
              <h1 className={isAnimated ? "quote-child-0" : ''}>Why are we building Embifi ?</h1>
              {/* <p>We want to bring the power of Fintech to everyone to become a fintech company</p> */}
              <p className={isAnimated ? "quote-child-1" : ''}>Climate change is real and the time to take action is now!</p>
              <p className={isAnimated ? "quote-child-2" : ''}>EV and Reforestation are some of the potential solutions amongst many more...</p>
              {/* <p className={isAnimated ? "quote-child-3" : ''}></p> */}
            </div>
          </Col>
          {/* <Col className="quote-holder" md={6}>
            <div class="box">
              <i class="fas fa-quote-right fa2"></i>
              <div class="text">
                <i class="fas fa-quote-left fa1"></i>
                <div>
                  <p>Every Company will be a Fintech Company</p>
                  <h3>Angela Strange</h3>
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default Quote;
