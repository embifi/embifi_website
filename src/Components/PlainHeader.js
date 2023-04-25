import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import MobHeader from "./MobHeader";
import "./style.css";
import "./responsive.css";
import { Container } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

function Header({ noAnim }) {
  const logoNoTag = "https://drilca9ckdzo8.cloudfront.net/white-notag.svg";
  const logoTag = "https://drilca9ckdzo8.cloudfront.net/white.svg";

  const [navSize, setnavSize] = useState("5rem");
  const [logoSize, setLogoSize] = useState("100px");
  const [logoSrc, setLogo] = useState(logoTag);
  const [navColor, setnavColor] = useState("transparent");
  const navigate = useNavigate();

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#054c76") : setnavColor("transparent");
  };

  useEffect(() => {
    if (!noAnim) {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }
    else{
      setnavColor("#252734")
    }
  }, []);

  return (
    <>
      <div className="nav-main-privacy">
        <div
          className="navbar"
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <img
                  className="me-4 pointer"
                  src={logoSrc}
                  draggable="false"
                  style={{
                    width: logoSize,
                    transition: "all 1s",
                  }}
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </Grid>
              <Grid item xs={6} md={4} className="d-flex justify-content-end">
                {/* <p
                  className="mb-0 mt-2 pointer"
                  style={{ color: "white" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <ArrowBackIosIcon />
                  Go back home
                </p> */}
                <Button
                  className="contact-btn contact-privacy"
                  variant="outlined"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 5000);
                  }}
                >
                  Contact us
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Header;
