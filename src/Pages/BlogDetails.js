import React, { useEffect, useState} from "react";
import {
  Button,
  CssBaseline,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useLocation, useNavigate } from "react-router-dom";
import { GlobalInfo } from "../context/GlobalContext.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider.js";
import { toast } from "react-toastify";
import { createBlog, updateBlog } from "../api/index.js";

const BlogDetails = () => {
  const location = useLocation();
  const { blogState } =
  React.useContext(GlobalInfo);

  const [detailedBlog, setDetailedBlog] = blogState;
  const [isLoading, setLoading] = useState(false);
  const [blogPosted, setBlogPosted] = useState(false);
  const [checkPosted, setCheckPosted] = useState("");

  const navigate = useNavigate();

 const handlePublishBlog = async(e) => {
  e.preventDefault();
  setLoading(true);

  let payload = {
    ...detailedBlog,
    isDraft: false
   };

  console.log(payload);
  console.log(detailedBlog);

  let response;
if(payload.id || payload._id) {
  payload.id = payload.id || payload._id
  delete payload?._id;
   response = await updateBlog(payload);
   setCheckPosted("updated");
} else {
   response = await createBlog(payload);
   setCheckPosted("created");

}
    if (!response.status) {
      console.log("error")
      toast.error(response?.response?.data?.message || "Something went wrong");
      return setLoading(false);
    }
    toast.success(response?.data?.message || "Blog Posted Successfully");
    console.log("success")
    setBlogPosted(true);
  return setLoading(false);
 }

 const handleDraft = async(e) => {
  e.preventDefault();

  setLoading(true);

  let payload = {
   ...detailedBlog,
   isDraft: true
  };

  console.log(payload);

  let response;

  if(payload?._id) {
    payload.id = payload._id;
    delete payload._id;
     response = await updateBlog(payload);
  } else {
   response = await createBlog(payload);
  }
      if (!response.status) {
        toast.error(response?.response?.data?.message || "Something went wrong");
        return setLoading(false);
      }
      toast.success(response?.data?.message || "Blog Saved Successfully");
      // setResponseObj(response?.data);
      setBlogPosted(true);
    return setLoading(false);
 }

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
        maxWidth="md"
      >
        <CssBaseline />
        <Grid
          container>
          <span className="welcome-span">View Blog</span>
        </Grid>


            {blogPosted ? (
          <React.Fragment>
            <Paper
              variant="outlined"
              sx={{
                my: { xs: 3, md: 3 },
                p: { xs: 2, md: 3 },
                filter:
                  "drop-shadow(6px 6px 30px rgba(125, 153, 180, 0.2)) drop-shadow(2px 2px 4px rgba(86, 144, 198, 0.11))",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Successfully {checkPosted || "saved"} your blog.
              </Typography>
              <Button
                className="mt-3 px-5"
                variant="outlined"
                onClick={() => {
                  // window.location.reload();
                  navigate('/my-blog')
                }}
              >
                DONE
              </Button>
            </Paper>
          </React.Fragment>
        ) : (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid className="mt-3" container spacing={2}>
        <Grid className="title-details" item xs={12}>
          <p>
            { detailedBlog?.blog_title}
          </p>
        </Grid>
        <Grid sx={{
          height: "350px",
          display: "flex",
          justifyContent: "center",
        }} item xs={12} for="images" >
          <img
            style={{
              height: "100%",
              maxWidth: "100%",
            }}
            src={detailedBlog?.image}
          ></img>
        </Grid>

{
  detailedBlog?.blogs?.map((para,index)=> {
    return (
      <React.Fragment key={index}>
<Grid item xs={12}>
          <p className="para-title">
          {para?.para_title}
          </p>
        </Grid>

        <Grid item xs={12}>
        <section className="blog-content">
          {para?.body}
        </section>
        </Grid>
      </React.Fragment>
    )
  })
}
        

      </Grid>
      {!isLoading ? (
        <>
        
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "right",
          }}
          className="p-3"
        >
           <button
              className="btn-cancel"
                onClick={() => navigate("/write-blog")}
            >
             Edit
            </button>
          
        </div>

       {location?.state?.prevPage === "write-blog" && <div
          style={{
            width: "100%",
            display: "flex",
          }}
          className="p-3"
        >
           <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <button
                onClick={handlePublishBlog}
              className="btn-submit"
            >
              {isLoading ? "Loading" : "Publish"}
            </button>
            <button
              className="btn-cancel"
                onClick={handleDraft}
            >
              Save as draft
            </button>
          </Box>
          
        </div>}
        </>
      ) : (
        <p className="w-100 text-center" style={{ color: "purple" }}>
          Publishing Blog....
        </p>
      )}
    </Box>
  )
      }
      </Container>

  </>
  )
};

export default BlogDetails;
