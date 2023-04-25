import React, { useContext, useEffect, useState } from "react";
import FooterComp from "../Components/Footer";
import Header from "../Components/Header";
import Moreinfo from "../Components/Moreinfo";
import Quote from "../Components/Quote";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import { useRef } from "react";

import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IntroSec from "../Components/IntroSec";
import { GlobalInfo } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

function Home() {
  const [isScrollTop, setScrollTop] = useState(false);
  const { home, services, whyUs, contactUs, quote } = useContext(GlobalInfo);

  const { section } = useParams();

  const listenScrollEvent = () => {
    window.scrollY > 400 ? setScrollTop(true) : setScrollTop(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(()=>{
    if(["home","services","why-us","contact-us"].includes(section)){

      switch(section){
        case "home":
          home.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "services":
          services.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "why-us":
          whyUs.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "contact-us":
          contactUs.current?.scrollIntoView({ behavior: "smooth" });
          break;
      }

    }else{
      // alert("hivalid ")
    }
  },[section])

  return (
    <>
      <Header />
      <IntroSec />
      <Services />
      <Quote />
      <Moreinfo />
      <Contact />
      <FooterComp />

      <div
        style={
          isScrollTop
            ? { opacity: 1, transition: "all 1s" }
            : { opacity: 0, transition: "all 1s" }
        }
      >
        <Fab
          className="scroll-top"
          color="primary"
          aria-label="add"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ArrowUpwardIcon />
        </Fab>
      </div>
    </>
  );
}

export default Home;
