import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Container,
} from "@mui/material";
import "./WriteBlog.css";
import Avatar from "../Assets/Avatar.svg";
import { GlobalInfo } from "../context/GlobalContext";
import { toast } from "react-toastify";

const WriteBlog = () => {
  const location = useLocation();
  const { blogState } = React.useContext(GlobalInfo);
  const [detailedBlog, setDetailedBlog] = blogState;
  const [imgChangeClick, setImgChangeClick] = useState(false);
  const imgRef = useRef();
  const navigate = useNavigate();
  const [paragraph, setParagraph] = useState([
    { para_title: "", body: "" },
  ]);
  const [file, setFile] = useState({});

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
        e.dataTransfer.files[0].type === "image/jpg") ||
        e.dataTransfer.files[0].type === "image/webp" ||
        e.dataTransfer.files[0].type === "image/WEBP" 
    ) {
      setFile(e.dataTransfer.files[0]);
    }
  };
  //-------------------------------------

  function encodeImageFileAsURL(element) {
    const file = element;
    const reader = new FileReader();
    reader.onloadend = function () {
      const baseStr64 = reader.result;
      setDetailedBlog({
        ...detailedBlog,
        image: baseStr64,
      });
    };
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    if (file.size > 0) {
      encodeImageFileAsURL(file);
    }
  }, [file]);

  const handleOnChange = (e) => {
    console.log(e);
    setFile(e.target.files[0]);
  };

  const handleParagraphDel = (e) => {
    e.preventDefault();
    if (paragraph.length === 1) {
      return;
    }
    setParagraph((current) => current.slice(0, -1));
  };

  const handleParagraphAdd = (e) => {
    e.preventDefault();
    setParagraph([...paragraph, { para_title: "", body: "" }]);
  };

  useEffect(() => {
    console.log("para", paragraph)
    setDetailedBlog({
      ...detailedBlog,
      blogs: paragraph,
    });
  }, [paragraph]);

  const handleNext = async (e) => {
    e.preventDefault();
    if(detailedBlog?.blog_title === "" || detailedBlog?.blogs?.[0]?.body === ""){
      return  detailedBlog?.blog_title === "" ? toast.error("Blog title can't be empty") : toast.error("Blog body can't be empty")
    }
    return navigate("/blog-details", { state: { prevPage: "write-blog" } });
  };

  useEffect(() => {
    if (location?.state?.prevPage === "my-blog") {
      setDetailedBlog({
        blog_title: "",
        image: "",
        blogs: [{ para_title: "", body: "" }],
      });
    } else {
      setParagraph(detailedBlog?.blogs);
    }
  }, []);


  const handleChangePhoto = () => {
    setDetailedBlog({
      ...detailedBlog,
      image: "",
    })
    setImgChangeClick(true);
  }

  useEffect(()=> {
if (imgChangeClick === true && detailedBlog?.image === "") {
    document.getElementById("getFile").click()
    setImgChangeClick(false)
}
  },[imgChangeClick])
  

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
        <Grid container>
          <span className="welcome-span">Write Blog</span>
        </Grid>

        <Grid container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  sx={{ mt: 2 }}
                  id="standard-basic"
                  label="Blog Title"
                  variant="standard"
                  value={detailedBlog?.blog_title}
                  onChange={(e) => {
                    let a = e.target.value;
                    setDetailedBlog({
                      ...detailedBlog,
                      blog_title: a,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <span
                  style={{
                    color: "#535965",
                    fontSize: "1.2rem",
                  }}
                >
                  Header Image
                </span>
              </Grid>
              <Grid item xs={12}>
                <form
                  style={{
                    width: "100%",
                  }}
                  onDragEnter={handleDrag}
                  onSubmit={(e) => e.preventDefault()}
                >
                  {detailedBlog?.image === "" ? (
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
                        accept=".png, .jpg, .jpeg, .svg, .webp, .WEBP"
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
                    <Grid item xs={12} for="images" className="drop-container">
                      <img
                        style={{
                          height: "100%",
                          maxWidth: "90%",
                        }}
                        ref={imgRef}
                        src={detailedBlog?.image}
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

              {paragraph?.map((para, index) => {
                return (
                  <React.Fragment key={index}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        sx={{ mt: 2 }}
                        size="small"
                        label="Paragraph Title"
                        id="title"
                        type="input"
                        multiline
                        value={para?.para_title}
                        onChange={(e) => {
                          let { value } = e.target;
                          let temp = [...paragraph];
                          temp[index].para_title = value;
                          setParagraph(temp);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        sx={{ mt: 2 }}
                        size="small"
                        label="Body"
                        id="body"
                        type="input"
                        multiline
                        value={para?.body}
                        onChange={(e) => {
                          let { value } = e.target;
                          let temp = [...paragraph];
                          temp[index].body = value;
                          setParagraph(temp);
                        }}
                      />
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
              }}
              className="p-3"
            >
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleParagraphAdd} className="btn-submit">
                  Add
                </button>
                <button className="btn-cancel" onClick={handleParagraphDel}>
                  Cancel
                </button>
              </Box>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
              className="p-3"
            >
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleNext} className="btn-submit">
                  Preview
                </button>
              </Box>
            </div>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default WriteBlog;
