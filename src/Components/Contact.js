import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { Container } from "@mui/system";
import { Col, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CircularProgress } from "@mui/material";
import { GlobalInfo } from "../context/GlobalContext";

function Contact() {
  const { home, services, whyUs, contactUs } = useContext(GlobalInfo);
  const toast = useRef();
  const [activeStep, setActiveStep] = useState(0);
  const [toastData, setToastData] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [contactError, setContactError] = useState({
    name: "",
    email: "",
    phone:"",
  });

  const steps = [
    {
      label: "Select campaign settings",
    },
    {
      label: "Create an ad group",
    },
    {
      label: "Create an ad",
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  const isNameValid = () => {
    const { name } = contactData;
    let isValid = true;
    if (name[0] === " " || name.length <= 0) {
      setContactError((prev) => ({ ...prev, name: "Name not valid" }));
      isValid = false;
    }
    return isValid;
  };

  const isEmailValid = () => {
    const { email } = contactData;
    let isValid = true;
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
      setContactError((prev) => ({ ...prev, email: "Email not valid" }));
      isValid = false;
    }
    return isValid;
  };

  const isNumberValid = ()=>{
    const {phone} = contactData;
    let isValid = true;
    if(phone.length === 12){
      setContactError((prev) => ({...prev, phone: "Phone number not valid" }));
      isValid = false;
    }
    return isValid;
  }

  const handleSubmit = () => {
    const { name, email, phone, message } = contactData;
    let data = JSON.stringify({
      name: name,
      email: email,
      phone:phone,
      message: message,
    });

    let config = {
      method: "post",
      url: "https://gm1d0domz8.execute-api.ap-south-1.amazonaws.com/sendform",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    setLoading(true);
    axios(config)
      .then(function (response) {
        setLoading(false);
        handleNext();
        showToast("Message sent successfully", "success");
      })
      .catch(function (error) {
        setLoading(false);
        showToast("Something went wrong!", "error");
      });
  };

  const showToast = (message, type) => {
    toast.current.classList.add("show");
    setToastData({ message, type });
    setTimeout(() => {
      toast.current.classList.remove("show");
      setToastData({ message: "", type: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-5" ref={contactUs}>
      <Container className="mt-3">
        <Row>
          <Col md={6} className="contact-left">
            <div className="header">
              <h1 style={{ fontWeight: "200" }}>Contact us</h1>
              <h1 style={{color:'#1CD69E'}}>SEND US A MESSAGE</h1>
              <p className="w-75">
                Let us know how we can help, and we will get in touch with you
                as soon as possible
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Box sx={{ maxWidth: 400 }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {/* Name */}

                <Step key={"Enter your name"}>
                  <StepLabel
                    optional={
                      contactError.name !== "" ? (
                        <Typography variant="caption" style={{ color: "red" }}>
                          Name is not valid
                        </Typography>
                      ) : null
                    }
                  >
                    Enter your name
                  </StepLabel>
                  <StepContent>
                    <input
                      className="input-text"
                      type="text"
                      value={contactData.name}
                      onChange={(e) => {
                        setContactError((prev) => ({
                          ...prev,
                          name: "",
                        }));
                        setContactData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }));
                      }}
                    ></input>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          className="continue-btn"
                          variant="contained"
                          onClick={() => {
                            if (isNameValid()) handleNext();
                          }}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Continue
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>

                {/* Email */}

                <Step key={"Enter email address"}>
                  <StepLabel
                    optional={
                      contactError.email !== "" ? (
                        <Typography variant="caption" style={{ color: "red" }}>
                          Email is not valid
                        </Typography>
                      ) : null
                    }
                  >
                    Enter email address
                  </StepLabel>
                  <StepContent>
                    <input
                      className="input-text"
                      type="email"
                      placeholder="name@email.com"
                      value={contactData.email}
                      onChange={(e) => {
                        setContactError((prev) => ({
                          ...prev,
                          email: "",
                        }));
                        setContactData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                      }}
                    ></input>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          className="continue-btn"
                          variant="contained"
                          onClick={() => {
                            if (isEmailValid()) handleNext();
                          }}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Continue
                        </Button>
                        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>

                {/* Message */}

                <Step key={"Enter your message"}>
                  <StepLabel>Enter your message</StepLabel>
                  <StepContent>
                    <textarea
                      className="input-text"
                      type="text"
                      placeholder="Feel free to ask anything"
                      value={contactData.message}
                      onChange={(e) => {
                        setContactData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }));
                      }}
                    ></textarea>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          className="continue-btn"
                          variant="contained"
                          onClick={handleSubmit}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {loading ? (
                            <CircularProgress size={20} color="secondary" />
                          ) : (
                            "SEND INFO"
                          )}
                        </Button>
                        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography style={{ color: "green" }}>
                    <CheckCircleIcon className="me-2" />
                    Message sent successfully!
                  </Typography>
                  <Button
                    className="continue-btn mt-3"
                    onClick={handleReset}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Reset
                  </Button>
                </Paper>
              )}
            </Box>
          </Col>
        </Row>
      </Container>
      <div
        id="snackbar"
        ref={toast}
        style={{
          backgroundColor: toastData.type === "success" ? "#21c24c" : "#c93e1e",
        }}
      >
        {toastData.message}
      </div>
    </section>
  );
}

export default Contact;
