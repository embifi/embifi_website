import React, { useState } from "react";
import "./Login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useAuth from "../hooks/useAuth";
import IconButton from '@mui/material/IconButton';


const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const [isDiv,setIsDiv]=useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      await loginUser(cred.email, cred.password);
    } catch (error) { }
    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className="main-cont-left">
        <div className="child-cont-left">
          <div className="text-cont">
            <span className="span-text">Build</span>
            <span className="span-text">Enable</span>
            <span className="span-text">Embed</span>
          </div>
        </div>
      </div>

      <div className="main-cont-right">
        <div className="go-back-btn-login">
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <ArrowBackIcon /> Back
          </span>
        </div>
        <div className="login-cont">
          <img
            className="logo-src"
            src="https://drilca9ckdzo8.cloudfront.net/white.svg"
            draggable="false"
            style={{
              width: "250px",
              transition: "all 1s",
            }}
          />
          <p
            style={{
              color: "white",
              fontSize: "xx-large",
              fontWeight: "600",
            }}
          >
            Welcome !
          </p>
          <p
            style={{
              color: "white",
              fontSize: "x-large",
              fontWeight: "600",
              marginBottom: "40px",
            }}
          >
            Login
          </p>

          <form className="form-cont">
            <span className="cred-span">Email</span>
            <input className="cred-input" value={cred.email}
              onChange={(e) => {
                setCred({ ...cred, email: e.target.value });
              }}></input>
            <span className="cred-span">Password</span>
            <div
                className={isDiv ? `cred-input eye-cont div-focus` : `cred-input eye-cont`}
                >
              <input
                className="cred-input-cont"
                type={showPassword ? "input" : "password"}
                value={cred.password}
                onFocus={()=> {
                  setIsDiv(true);
                }}
                onBlur={()=>setIsDiv(false)}
                onChange={(e) => {
                  setCred({ ...cred, password: e.target.value });
                }}
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    handleLogin();
                  }
                }}
              />
            <div id="show-pass">
              <IconButton
                aria-l
                abel="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon sx={{
                  color: "white"
                }} /> : <VisibilityIcon sx={{
                  color: "white"
                }} />}
              </IconButton>
            </div>

            </div>

            {!isLoading ? (
              <button className="btn-login" onClick={handleLogin}>
                Log in
              </button>
            ) : (
              <p className="w-100 text-center" style={{ color: "#F88BFB" }}>
                Signing in....
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
