import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import creditGif from "../Assets/credit.gif"
import { GlobalInfo } from "../context/GlobalContext";
import products from '../Assets/products.svg';

function Moreinfo({ reference, contact }) {
  const { home, services, whyUs, contactUs, quote } = useContext(GlobalInfo);
  return (
    <section id="more-info" ref={whyUs} style={{ marginTop: '7em' }}>
      {/* <div class="more-container first-div">
        <div class="container__diagonal more-blue"></div>

        <Container>
          <div>
            <Row>
              <Col md={6} className="content-center">
                <img
                  className="pulse more-img"
                  src={"https://drilca9ckdzo8.cloudfront.net/filters:format(webp)/save-time.svg"}
                  width="70%"
                  draggable={false}
                />
              </Col>
              <Col md={6} className="info-txt info1 content-center">
                Save your time in understanding Credit
              </Col>
            </Row>
          </div>
        </Container>
      </div> */}
      <div class="more-container second-div">
        <div class="container__diagonal purple"></div>

        <Container>
          <div>
            <Row>
              <Col md={6} className="info-txt info2 content-center">
                Our Team builds structured financial products tailored for the EV space
              </Col>
              <Col md={6} className="content-center">
                <img
                  className="pulse more-img"
                  // src={"https://drilca9ckdzo8.cloudfront.net/filters:format(webp)/build-team.svg"}
                  src={products}
                  width="70%"
                  draggable={false}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="mt-5 py-5">
        <Container className="more-sec-3">
          <Row>
            <Col sm={12} md={6}>
              <span className="get-head">Ready to get started?</span>
              <br />
              <br />
              {/* <p className="mt-3 get-desc w-75">
                We have the rails, the platform, the supply of capital
                <br></br>Get started now
              </p> */}
              <Button
                className="contact-btn get-start-btn"
                variant="outlined"
                onClick={() => {
                  contactUs.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact us
              </Button>
            </Col>
            <Col sm={12} md={6}>
              <Row>
                <Col lg={3}>
                  <img src={creditGif} width="150px" draggable={false} />
                </Col>
                <Col lg={9} className="help-div">
                  <span className="get-head">
                    We help your customers access credit & other financial products
                  </span>
                  {/* <p className="mt-3 ">
                    Enable incremental purchases by offering your business
                    customers seamless credit
                  </p> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Container>
        <div
          className="parallax"
          style={{
            backgroundImage: `linear-gradient(to bottom, #72218d, #692896, #5e2f9e, #5136a6, #3e3cae, #2944aa, #144aa4, #004e9d, #004f83, #004962, #164045, #2f3534)`,
          }}
        >
        </div>
      </Container> */}
    </section>
  );
}

export default Moreinfo;
