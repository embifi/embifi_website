import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import "./PersonalDetails.css";
import Avatar from "../Assets/Avatar.svg";
import { updatePersonalDetails } from "../api/index";
import { toast } from "react-toastify";

const PersonalDetails = () => {
  const location = useLocation();
  const imgRef = useRef();
  const navigate = useNavigate();
  const [imgChangeClick, setImgChangeClick] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [detailsUpdated, setDetailsUpdated] = useState();
  const [personalDetails, setPersonalDetails] = useState({
    image: "",
    name: "",
    job_title: "",
    linkedin: "",
    about: "",
  });
  const [file, setFile] = useState({});

  useEffect(() => {

    setPersonalDetails({
      ...personalDetails,
      image:     location?.state?.user?.image,
      name:      location?.state?.user?.name,
      job_title: location?.state?.user?.job_title,
      linkedin:  location?.state?.user?.linkedin,
      about:     location?.state?.user?.about,
    });
  }, []);

  // --------------------------------------
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    console.log("drag enter");
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    console.log(e.dataTransfer.files);
    if (
      e.dataTransfer.files &&
      e.dataTransfer.files[0] &&
      (e.dataTransfer.files[0].type === "image/jpeg" ||
        e.dataTransfer.files[0].type === "image/png" ||
        e.dataTransfer.files[0].type === "image/svg" ||
        e.dataTransfer.files[0].type === "image/jpg")
    ) {
      console.log(e.dataTransfer.files[0]);
      setFile(e.dataTransfer.files[0]);
    }
  };
  //-------------------------------------

  function encodeImageFileAsURL(element) {
    const file = element;
    const reader = new FileReader();
    reader.onloadend = function () {
      const baseStr64 = reader.result;
      setPersonalDetails({
        ...personalDetails,
        image: baseStr64,
      });
    };
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    if (file.size > 0) {
      console.log(file);
      encodeImageFileAsURL(file);
    }
  }, [file]);

  const handleOnChange = (e) => {
    console.log(e);
    setFile(e.target.files[0]);
  };

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    setLoading(true);

    let payload = {
      updateQuery: { ...personalDetails },
    };

    console.log(payload);
    setDetailsUpdated(true);

    let response = await updatePersonalDetails(payload);
    if (!response.status) {
      toast.error(response?.response?.data?.message || "Something went wrong");
      return setLoading(false);
    }
    toast.success(response?.data?.message || "Agent Created Successfully");
    setDetailsUpdated(true);
    return setLoading(false);
  };

  const handleChangePhoto = () => {
    setPersonalDetails({ ...PersonalDetails, image: "" });
    setImgChangeClick(true);
  }

  useEffect(()=> {
if (imgChangeClick === true && personalDetails?.image === "") {
    document.getElementById("getFile").click()
    setImgChangeClick(false)
}
  },[imgChangeClick])

  useEffect(()=> {
console.log(personalDetails?.image)
  },[personalDetails?.image])
  

  return (
    <>
      <div className="go-back-btn-fixed">
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon /> Back
        </span>
      </div>
      <Container
        sx={{
          mb: 4,
        }}
        component="main"
        maxWidth="sm"
      >
        <CssBaseline />
        <div className="page-head">
          <span className="welcome-span">Welcome, {personalDetails?.name}</span>
        </div>
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 3 },
            p: { xs: 2, md: 3 },
            filter:
              "drop-shadow(6px 6px 30px rgba(125, 153, 180, 0.2)) drop-shadow(2px 2px 4px rgba(86, 144, 198, 0.11))",
          }}
        >
          {detailsUpdated ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Details Updated Successfully.
              </Typography>
              <Button
                className="mt-3 px-5"
                variant="outlined"
                onClick={() => {
                  navigate('/employee-details')
                }}
              >
                DONE
              </Button>
            </React.Fragment>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={handleUpdateDetails}
                sx={{
                  mt: 5,
                  pb: 3,
                  padding: "40px",
                  pt: 2,
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <form
                      style={{
                        width: "100%",
                      }}
                      onDragEnter={handleDrag}
                      onSubmit={(e) => e.preventDefault()}
                    >
                      {personalDetails?.image === "" ? (
                        <div for="images" className="drop-container">
                          <img
                            style={{
                              marginTop: "5px",
                              width: "50px",
                              cursor: "pointer",
                            }}
                            src={Avatar}
                            onClick={() =>
                              document.getElementById("getFile").click()
                            }
                          ></img>
                          <div
                            style={{
                              marginTop: "10px",
                            }}
                          >
                            <span className="drop-title">
                              <span
                                style={{
                                  color: "purple",
                                  textDecoration: "underline",
                                  cursor: "pointer",
                                  height: "30px",
                                }}
                                onClick={() =>
                                  document.getElementById("getFile").click()
                                }
                              >
                                Click to upload{" "}
                              </span>
                              or Drag and Drop
                            </span>
                          </div>

                          <input
                            ref={inputRef}
                            id="getFile"
                            style={{ display: "none" }}
                            onChange={handleOnChange}
                            type="file"
                            accept=".png, .jpg, .jpeg, .svg"
                            required
                          />
                          <span
                            style={{
                              color: "rgb(183, 181, 181)",
                            }}
                          >
                            SVG, PNG, JPG
                          </span>
                        </div>
                      ) : (
                        <Grid
                          item
                          xs={12}
                          for="images"
                          className="drop-container"
                        >
                          <img
                            style={{
                              height: "100%",
                              maxWidth: "90%",
                            }}
                            ref={imgRef}
                            src={personalDetails?.image}
                            onClick={() =>
                              document.getElementById("getFile").click()
                            }
                          ></img>
                        </Grid>
                      )}
                      {dragActive && (
                        <div
                          id="drag-file-element"
                          onDragEnter={handleDrag}
                          onDragLeave={handleDrag}
                          onDragOver={handleDrag}
                          onDrop={handleDrop}
                        ></div>
                      )}
                    </form>
                  </Grid>

                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                    }}
                    item
                    xs={12}
                  >
                    <span
                      className="upload-img"
                      onClick={() => {
                        handleChangePhoto()
                      }}
                    >
                      Click to change photo
                    </span>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      sx={{ mt: 2 }}
                      size="small"
                      label="Full name"
                      id="name"
                      type="input"
                      value={personalDetails?.name}
                      InputLabelProps={{ shrink: true}}
                      onChange={(e) => {
                        let a = e.target.value;
                        setPersonalDetails({
                          ...personalDetails,
                          name: a,
                        });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      sx={{ mt: 2 }}
                      size="small"
                      label="Job title"
                      id="name"
                      type="input"
                      InputLabelProps={{ shrink: true}}
                      value={personalDetails?.job_title}
                      onChange={(e) => {
                        let a = e.target.value;
                        setPersonalDetails({
                          ...personalDetails,
                          job_title: a,
                        });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      sx={{ mt: 2 }}
                      size="small"
                      label="LinkedIn Url"
                      id="url"
                      type="input"
                      InputLabelProps={{ shrink: true}}
                      value={personalDetails?.linkedin}
                      onChange={(e) => {
                        let a = e.target.value;
                        setPersonalDetails({
                          ...personalDetails,
                          linkedin: a,
                        });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      sx={{ mt: 2 }}
                      size="small"
                      label="About"
                      id="about"
                      type="input"
                      multiline
                      rows={4}
                      InputLabelProps={{ shrink: true}}
                      value={personalDetails?.about}
                      onChange={(e) => {
                        let a = e.target.value;
                        setPersonalDetails({
                          ...personalDetails,
                          about: a,
                        });
                      }}
                    />
                  </Grid>
                </Grid>
                {!isLoading ? (
                  <div className="p-3">
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <button
                        onClick={handleUpdateDetails}
                        className="btn-submit"
                      >
                        {isLoading ? "Loading" : "Save changes"}
                      </button>
                      <button
                        className="btn-cancel"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </button>
                    </Box>
                  </div>
                ) : (
                  <p className="w-100 text-center" style={{ color: "purple" }}>
                    Updating Details....
                  </p>
                )}
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default PersonalDetails;
