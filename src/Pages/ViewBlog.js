import React, { useEffect, useState } from "react";
import { CssBaseline, Typography, Grid, Box, Container } from "@mui/material";
import PlainHeader from "../Components/PlainHeader";
import FooterComp from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./ViewBlog.css";
import moment from "moment";

const ViewBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [detailedBlog, setDetailedBlog] = useState({});
  const [blogs, setBlogs] = useState([]);


  const handleDetailBlog = (blog) => {
    navigate(
      `/view-blog/${blog?.blog_title?.replaceAll(" ", "-")?.replaceAll(",", "")}`,
      { state: { blog: blog, blogs: blogs  } }
    );
  };

  useEffect(() => {
    setDetailedBlog(location?.state?.blog);
    setBlogs(location?.state?.blogs);
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }, [location.state]);

  return (
    <>
      <PlainHeader />
      <div className="main-comp-view-blog">
        <div className="go-back-btn-fixed">
          <span
            style={{
              cursor: "pointer",
              color: "#ff03ff",
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
          <Grid container>
            <span className="">
              <b>Blogs</b> | Updates from the Embifi team
            </span>
          </Grid>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid className="mt-3" container spacing={2}>
              <Grid className="profile-details-cont" item xs={12}>
              <span style={{ color: "rgb(208 214 224 / 68%)" }}>
                           {(detailedBlog?.createdAt || detailedBlog?.updatedAt) && "| "}{moment(detailedBlog?.createdAt || detailedBlog?.updatedAt).format("Do MMMM, YYYY")}
                          </span>
              </Grid>
              <Grid className="title-details" item xs={12}>
                <p>{detailedBlog?.blog_title}</p>
              </Grid>
              <Grid className="profile-details-cont" item xs={12}>
              <div>
                            <img style={{width: "20px", height: "20px", borderRadius: "50px"}} src={detailedBlog?.userData?.image} />
                          </div>
                <span style={{}}>{detailedBlog?.userData?.name}</span>
              </Grid>
              <Grid
                sx={{
                  height: {
                    sm: "490px",
                    xs: "220px",
                  },
                  display: "flex",
                  justifyContent: "center",
                }}
                item
                xs={12}
                for="images"
              >
                <img
                  style={{
                    height: "100%",
                    maxWidth: "100%",
                  }}
                  src={detailedBlog?.image}
                ></img>
              </Grid>

              {detailedBlog?.blogs?.map((para, index) => {
                return (
                  <React.Fragment key={index}>
                    <Grid item xs={12}>
                      <p className="para-title">{para?.para_title}</p>
                    </Grid>

                    <Grid item xs={12}>
                      <section className="blog-content">{para?.body}</section>
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
            <Grid sx={{ mt: 5 }} item xs={12}>
              <Grid>
                <span style={{ color: "#8A8F98" }}>Share this post</span>
              </Grid>
              <Grid
                sx={{
                  mt: 3,
                  width: "115px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TwitterShareButton 
                 title={detailedBlog?.title+"\n"}
                 via={detailedBlog?.profile_name}
                url={window.location.href}
                className="share-button"
                >
                  <TwitterIcon />
                </TwitterShareButton>
                <LinkedinShareButton 
                  title={detailedBlog?.title + "\n" + detailedBlog?.profile_name + "\n"}
                  summary={detailedBlog?.body}
                 source={window.location.href}
                 url={window.location.href}
                 className="share-button"
                >
                  <LinkedInIcon />
                </LinkedinShareButton>
                <FacebookShareButton
                quote={detailedBlog?.title}
                url={window.location.href}
                className="share-button"
                >
                  <FacebookIcon />
                </FacebookShareButton>
              </Grid>
            </Grid>
            <hr style={{ color: "white" }} />
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Grid sx={{ mt: 5 }} item xs={12}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span className="Subscribe-span">
                Subscribe to our newsletter
              </span>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span id="Subscribe-span">
                Receive weekly updates on new posts and features
              </span>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input id="email-input" placeholder="email"></input>
              <button id="join-btn">Join</button>
            </Grid>
          </Grid> */}
        </Box>
        <div style={{ padding: "50px" }}>
          <div id="scroll-div">
            
          {blogs?.map((blog, index) => {
            if (blog?._id !== detailedBlog?._id) {
              return (
                <Grid
                  key={index}
                  sm={6}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 5,
                  }}
                  onClick={() => {
                    handleDetailBlog(blog);
                  }}
                >
                  <Card
                    key={index}
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#000000e8",
                      color: "white",
                      maxWidth: 345,
                      height: 345,
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height={"140"}
                        image={blog?.image}
                        alt="green iguana"
                      />
                      <CardContent
                      sx={{
                        padding: "16px 0"
                      }}>
                        <Typography
                          sx={{
                            color: "white",
                          }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {blog?.blog_title?.slice(0, 25) + "..."}
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                          }}
                          variant="body2"
                          color="text.secondary"
                        >
                          {blog?.blogs?.[0].body?.slice(0, 200) + "..."}
                        </Typography>
                        <div className="profile-details-cont">
                          <div>
                            <img style={{width: "20px", height: "20px", borderRadius: "50px"}} src={blog?.userData?.image} />
                          </div>
                          <span style={{}}>{blog?.userData?.name}</span>
                          <span style={{ color: "rgb(208 214 224 / 68%)" }}>
                           {(detailedBlog?.createdAt || detailedBlog?.updatedAt) && "| "}{moment(detailedBlog?.createdAt || detailedBlog?.updatedAt).format("Do MMMM, YYYY")}
                          </span>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            }
            })}

          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default ViewBlog;
