import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/PlainHeader";
import "./Style.css";
import HttpsIcon from "@mui/icons-material/Https";
import FooterComp from "../Components/Footer";
import { Grid, Link } from "@mui/material";
import vaniLogo from "../Assets/vani.png";
import prestLogo from "../Assets/prest.png";
import nyLogo from "../Assets/ny.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LendingPartners = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header />
      <div className="privacy-head-div">
        <Container>
          <p className="privacy-heading">
            {/* <HttpsIcon className="mb-1 me-1" style={{ fontSize: "40px" }} /> */}
            <p className="lending-head" style={{ fontSize: "40px" }}>
              Our Lending Partners
            </p>
            <div className="line"></div>
          </p>
        </Container>
      </div>
      <Container className="privacy-container pt-3 pb-5">
        <p className="description-1 mt-3">
          Embifi is a loan facilitation platform which enables a smooth flow of
          loan transactions between its partner RBI registered Financial
          Institution (NBFCs/Banks) and the borrowers.
        </p>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <div className="lender-card">
              <div
                onClick={() =>
                  window.open(`https://www.arthmate.com`, `_blank`)
                }
              >
                <p>
                  <img
                    src={
                      "https://www.arthmate.com/storage/company/2022-12-30-63ae7284252bc.png"
                    }
                    className="pulse pointer"
                    alt="Vani commercials logo"
                    height={80}
                  />
                </p>
                <p className="card-title">
                  <b>Arthmate (Mamta Projects Pvt Ltd)</b>
                </p>
              </div>

              <p className="sub-title">Nodal Officer details:</p>
              <p className="mb-0">Mr. Hitesh Bhansali</p>
              <p className="mb-0">
                <span className="key">Email: </span>
                <Link
                  className="pointer"
                  onClick={() => {
                    window.open(`statutory.compliance@arthmate.com`);
                  }}
                >
                  statutory.compliance@arthmate.com
                </Link>
              </p>
              <p>
                <span className="key">Timings for contact: </span>10am to 6pm
                (Monday to Saturday)
              </p>
              <p
                className="mt-2 visit-web"
                onClick={() => {
                  window.open(`https://www.arthmate.com/helpTopic`, `_blank`);
                }}
              >
                Terms and policy <ArrowForwardIcon />
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <div className="lender-card">
              <div
                onClick={() => window.open(`https://vanifincom.in`, `_blank`)}
              >
                <p>
                  <img
                    src={
                      "https://vanifincom.in/wp-content/uploads/2022/01/Screenshot-2022-01-04-at-12.13.36-AM.png"
                    }
                    className="pulse pointer"
                    alt="Vani commercials logo"
                    height={80}
                  />
                </p>
                <p className="card-title">
                  <b>Vani Commercials Limited</b>
                </p>
              </div>

              <p className="sub-title">Nodal Officer details:</p>
              <p>
                <span className="key">Timings for contact: </span>10am to 6pm
                (Monday to Saturday)
              </p>
              <p
                className="mt-2 visit-web"
                onClick={() => {
                  window.open(`https://vanifincom.in/`, `_blank`);
                }}
              >
                Terms and policy <ArrowForwardIcon />
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <div className="lender-card">
              <div
                onClick={() =>
                  window.open(`https://nyleasing.in`, `_blank`)
                }
              >
                <p>
                  <img
                    src={
                      "https://nyleasing.in/wp-content/uploads/2021/04/logoooo-removebg-preview-2-e1618939395694.png"
                    }
                    className="pulse pointer"
                    alt="Vani commercials logo"
                    height={80}
                  />
                </p>
                <p className="card-title">
                  <b>NY Leasing</b>
                </p>
              </div>

              <p className="sub-title">Nodal Officer details:</p>
              <p className="mb-0">
                <span className="key">Email:</span>{" "}
                <Link
                  className="pointer"
                  onClick={() => {
                    window.open(`mailto:grievance@nyleasing.in`);
                  }}
                >
                  {" "}
                  grievance@nyleasing.in
                </Link>
              </p>
              <p>
                <span className="key">Timings for contact: </span>10am to 6pm
                (Monday to Saturday)
              </p>
              <p
                className="mt-2 visit-web"
                onClick={() => {
                  window.open(
                    `https://nyleasing.in/wp-content/uploads/2022/02/Privacy-policy-1.pdf`,
                    `_blank`
                  );
                }}
              >
                Terms and policy <ArrowForwardIcon />
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <div className="lender-card">
              <div
                onClick={() =>
                  window.open(`https://fintreefinance.com`, `_blank`)
                }
              >
                <p>
                  <img
                    src={
                      "https://fintreefinance.com/wp-content/uploads/2018/09/FinTree-Logo.jpg"
                    }
                    className="pulse pointer"
                    alt="Vani commercials logo"
                    height={80}
                  />
                </p>
                <p className="card-title">
                  <b>Fintree finance pvt ltd</b>
                </p>
              </div>

              <p className="sub-title">Nodal Officer details:</p>
              <p className="mb-0">Mr. Jai Gathani</p>
              <p className="mb-0">
                <span className="key">Email:</span>
                <Link
                  className="pointer"
                  onClick={() => {
                    window.open(`mailto:wecare@fintreefinance.com`);
                  }}
                >
                  {" "}
                  wecare@fintreefinance.com
                </Link>
              </p>
              <p>
                <span className="key">Timings for contact: </span>10am to 6pm
                (Monday to Saturday)
              </p>
              <p
                className="mt-2 visit-web"
                onClick={() => {
                  window.open(
                    `https://fintreefinance.com/terms-of-service/`,
                    `_blank`
                  );
                }}
              >
                Terms and policy <ArrowForwardIcon />
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <FooterComp />
    </>
  );
};

export default LendingPartners;
