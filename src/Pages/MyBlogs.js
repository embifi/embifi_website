import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CssBaseline, Typography, Grid, Container } from "@mui/material";
import { GlobalInfo } from "../context/GlobalContext.js";
import { getAllBlogsOfUser, getDrafts, baseURL } from "../api/index";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";

function MyBlogs() {
  const { blogState } = React.useContext(GlobalInfo);
  const [blogs, setBlogs] = useState([]);
  const [detailedBlog, setDetailedBlog] = blogState;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDetailBlog = (blog) => {
    setDetailedBlog(blog);
    navigate("/blog-details");
  };

  const getImage = async (key) => {
    try {
      let { data } = await axios.get(
        // `${BASE_URL}/common/view?key=${key}`,
        key,
        {
          responseType: "blob",
          headers: { application: "EMBIFI-WEBSITE" },
          withCredentials: true,
        }
      );
      return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(data);
      });
    } catch (error) {
      console.log(error)
    }
  };

  const getAllBlogs = async () => {
    setLoading(true);
    let response = await getDrafts();
    if (!response.status) {
      return toast.error(
        response?.message || "Something went wrong"
      );
    }
    let arr1 = response?.data?.data;
    let response2 = await getAllBlogsOfUser();
    if (!response2.status) {
      toast.error(
        response2?.response?.data?.message || "Something went wrong"
      );
      return setLoading(false);

    }
    let arr2 = response2?.data?.data;
    let arr3 = arr1.concat(arr2);
    for (let i = 0; i < arr3.length; i++) {
      let key_temp = `${baseURL}/common/view?key=${arr3[i]?.key}`;
      let b64 = await getImage(key_temp);
      arr3[i].image = b64;
    }
    console.log(arr3)
    setBlogs(arr3);

    setLoading(false);
  }

  useEffect(() => {
    getAllBlogs()
  }, []);

  return (
    <>
      <div className="go-back-btn-fixed">
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigate("/employee-details")}
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
          <span className="welcome-span">Your Blogs</span>
        </Grid>
        {loading ?
          (
            <div
              className="loader-cont">
              <div class="lds-facebook"><div></div><div></div><div></div></div>
            </div>
          ) :
          (<Grid className="mt-3" container>
            <Grid
              sm={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 5,
              }}
            >
              <Card
                sx={{
                  width: 345,
                  height: 345,
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                  onClick={() =>
                    navigate("/write-blog", { state: { prevPage: `my-blog` } })
                  }
                >
                  <button
                    className="blog-add-btn"
                  >
                    + Add a blog
                  </button>
                </CardActionArea>
              </Card>
            </Grid>
            {blogs &&
              blogs?.map((blog, index) => {
                return (
                  <Grid
                    sm={12}
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
                    <Badge
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }} color="secondary" badgeContent={"draft"} invisible={!blog?.is_draft}>
                      <Card key={index} sx={{ width: 345, height: 345, opacity: blog.is_draft ? "0.5" : "1" }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={blog?.image}
                            alt="no image"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {blog?.blog_title && blog?.blog_title?.slice(0, 25) + "..."}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {blog?.blogs?.[0]?.body ? blog?.blogs?.[0]?.body?.slice(0, 200) + "..." : null}
                            </Typography>
                            <div className="profile-details-cont">
                              <span style={{ color: "#D0D6E0" }}>
                                {(blog?.createdAt || blog?.updatedAt) && "| "}{moment(blog?.createdAt || blog?.updatedAt).format("Do MMMM, YYYY")}
                              </span>
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Badge>
                  </Grid>
                );
              })}
          </Grid>)}
      </Container>
    </>
  );
}

export default MyBlogs;
