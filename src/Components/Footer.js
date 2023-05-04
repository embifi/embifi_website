import React, { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { DiGithubAlt } from "react-icons/di";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsPinMapFill } from "react-icons/bs";
import { GrPaypal } from "react-icons/gr";
import { SiRazorpay } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Link } from "@mui/material";
import { Link as ALink, useNavigate } from "react-router-dom";
import { GlobalInfo } from "../context/GlobalContext";
import { office_address } from '../constants';

function FooterComp({ goback }) {
  const navigate = useNavigate();
  const { home, services, whyUs, contactUs } = useContext(GlobalInfo);
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-3 item text">
              <img
                className="footer-img"
                src={"https://drilca9ckdzo8.cloudfront.net/white.svg"}
                height={50}
              ></img>
              <p className="mt-2 footer-b2b">
                EV Financing, Checkout Financing, Payments
              </p>
            </div>

            <div class="col-sm-6 col-md-3 item">
              <p className="fw-500 f-17">Product & Modules</p>
              <ul>
                <li className="mb-2 gray">
                  Loan Application
                </li>
                <li className="mb-2 gray">KYC Module</li>
                <li className="mb-2 gray">Loan Processing</li>
                <li className="mb-2 gray">Collections</li>
                <li className="mb-2 gray">Underwriting</li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <p className="fw-500 f-17">Pages</p>
              <ul>
                <li>
                  <Link
                    className="pointer"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="pointer"
                  onClick={() => {
                    navigate("/services");
                  }}
                >
                  <Link>Services</Link>
                </li>
                <li className="pointer">
                  <Link
                    onClick={() => {
                      navigate("/why-us");
                    }}
                  >
                    Why Us
                  </Link>
                </li>
                <li className="pointer">
                  <Link
                    onClick={() => {
                      navigate("/about-us");
                    }}
                  >
                    About Us
                  </Link>
                </li>
                {/* <li className="pointer">
                  <Link
                    onClick={() => {
                      navigate("/our-team");
                    }}
                  >
                    Our Team
                  </Link>
                </li> */}
                <li className="pointer">
                  <Link
                    onClick={() => {
                      navigate("/lending-partners");
                    }}
                  >
                    Our Lending Partners
                  </Link>
                </li>
                <li className="pointer">
                  <Link
                    onClick={() => {
                      navigate("/contact-us");
                    }}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="pointer">
                  <Link
                    onClick={() => {
                      navigate("/privacy-policy");
                    }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="pointer">
                  <Link
                    onClick={() => {
                      navigate("/terms");
                    }}
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-sm-6 col-md-3 item">
              <p className="fw-500 f-17"><ImLocation2 /> Location</p>
              <ul>
                <li>
                  Community Centre, 603-604, 6th Floor, Thapar House, Building
                  No. N 161, near Green Park Metro Station, Gulmohar Enclave,
                  New Delhi, Delhi 110016
                  <br />
                  <button className="maps-btn" onClick={() => window.open(office_address)}>Google Maps <i><BsPinMapFill /></i></button>
                </li>
                <li
                  className="pointer"
                  onClick={() =>
                    (window.location = "mailto:callmebackin10@embifi.in")
                  }
                >
                  <br />
                  <MdEmail /> support@embifi.in
                </li>
              </ul>
            </div>

            <div class="col item social mt-3">
              {/* <span
                className="pointer"
                onClick={() =>
                  window.open(`https://www.facebook.com/`, "_blank")
                }
              >
                <FaFacebookF />
              </span> */}

              <span
                className="pointer"
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/company/embifi`,
                    "_blank"
                  )
                }
              >
                <AiFillLinkedin />
              </span>
              {/* <span
                className="pointer"
                onClick={() => window.open(`https://twitter.com/`, "_blank")}
              >
                <BsTwitter />
              </span> */}
            </div>
          </div>
          <p class="copyright">Copyright © 2022 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default FooterComp;
