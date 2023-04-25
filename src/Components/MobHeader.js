import React, { useContext, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Hamburger from "hamburger-react";
import { GlobalInfo } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";


function MobHeader() {
  const { user, isLoading } = useContext(UserContext);

  const logoNoTag = "https://drilca9ckdzo8.cloudfront.net/white-notag.svg";
  const logoTag = "https://drilca9ckdzo8.cloudfront.net/white.svg"

  const navigate = useNavigate()
  const { home, services, whyUs, contactUs } = useContext(GlobalInfo);
  const toggleBtn = useRef();
  const [navSize, setnavSize] = useState("10rem");
  const [logoSrc, setLogo] = useState(logoTag);
  const [logoSize, setLogoSize] = useState("80px");
  const [logoMargin, setLogoMargin] = useState("50px");
  const [navColor, setnavColor] = useState("transparent");
  const [isExpand, setExpand] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [liStyle, setLiStyle] = useState({});

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    window.scrollY > 10 ? setLogoSize("40px") : setLogoSize("80px");
    window.scrollY > 10 ? setLogoSize("40px") : setLogoSize("80px");
    window.scrollY > 10 ? setLogoMargin("0") : setLogoMargin("50px");
    window.scrollY > 10 ? setLogo(logoNoTag) : setLogo(logoTag);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (isExpand) {
      setLiStyle({
        border: "1px solid #333",
        height: "6.5em",
        padding: "2.5em",
        transition: "height 400ms cubic-bezier(0.23, 1, 0.32, 1)",
      });
      setnavColor("#252734");
      if (window.scrollY < 10) {
        setLogoSize("40px");
        setLogoMargin("0");
      }
    } else {
      toggleBtn.current.checked = isExpand;
      setLiStyle({});
      if (window.scrollY < 10) setnavColor("transparent");
      if (window.scrollY < 10) {
        setLogoSize("80px");
        setLogoMargin("50px");
      }
    }
  }, [isExpand]);

  return (
    <section
      className="top-nav"
      style={{
        backgroundColor: navColor,
        transition: "all 1s",
      }}
    >
      <Container>
        <div>
          <img
            src={logoSrc}
            alt=""
            style={{
              transition: "all 1s",
              marginTop: logoMargin,
            }}
            height={logoSize}
            draggable="false"
            onClick={()=>navigate('/home')}
          />
        </div>
        <input id="menu-toggle" type="checkbox" ref={toggleBtn} />
        <label
          className="menu-button-container"
          htmlFor="menu-toggle"
          onClick={() => {
            setExpand(!isExpand);
          }}
        >
          <Hamburger toggled={isExpand} toggle={setExpand} />
        </label>
        <ul className="menu">
          <li
            className="pointer"
            onClick={() => {
              navigate('/home')
              setExpand(false);
            }}
            style={liStyle}
          >
            Home
          </li>
          <li
            className="pointer"
            onClick={() => {
              navigate('/services')
              setExpand(false);
            }}
            style={liStyle}
          >
            Services
          </li>
          <li
            className="pointer"
            onClick={() => {
              navigate('/why-us')
              setExpand(false);
            }}
            style={liStyle}
          >
            Why us
          </li>
          <li
            className="pointer"
            onClick={() => {
              navigate('/contact-us')
              setExpand(false);
            }}
            style={liStyle}
          >
            Contact
          </li>
          <li
            className="pointer"
            onClick={() => {
              navigate('/About-Us')
              setExpand(false);
            }}
            style={liStyle}
          >
            About Us
          </li>
          <li
            className="pointer"
            onClick={() => {
              navigate('/our-team')
              setExpand(false);
            }}
            style={liStyle}
          >
            Our Team
          </li>
          {/* <li
              className={`pointer`}
              onClick={() =>{
                  navigate('/About-Us')
                  setExpand(false);}
              }
              style={liStyle}
          >
            About-Us
          </li>
          <li
              className={`pointer`}
              onClick={() =>{
                  navigate('/blogs');
                  setExpand(false);
              }}
              style={liStyle}
          >
            Blogs
          </li>
          {user ? (
            <li
              className={`pointer`}
              onClick={() =>{
                  navigate('/employee-details');
                  setExpand(false);
              }}
              style={liStyle}
          >
            {user?.name}
          </li>
          ) : (<li
              className={`pointer`}
              onClick={() =>{
                  navigate('/login')
                  setExpand(false);

              }}
              style={liStyle}

          >
            Login
          </li>) } */}
        </ul>
      </Container>
    </section>
  );
}

export default MobHeader;
