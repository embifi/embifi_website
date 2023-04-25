import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlainHeader from "../Components/PlainHeader";
import FooterComp from "../Components/Footer";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./Blogs.css";
import { getAllBlogs, baseURL } from "../api/index";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";

function BLogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);


  const getImage = async (key) => {
    // console.log('me hu key ', key);
    try {let { data } = await axios.get(
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
  }catch (error) {
console.log(error)
  }
  };

  const getBlogs = async () => {
    setLoading(true);
    let response = await getAllBlogs();
    if (!response.status) {
      return toast.error(
        response?.response?.data?.message || "Something went wrong"
      );
    }
    let arr = blogs;
    let arr1 = arr.concat(response?.data?.data);
    console.log(arr1)
    for (let i = 0; i < arr1.length; i++) {
      let key_temp = `${baseURL}/embifi-website/get-blog-image?key=${arr1[i]?.key}`;
      let key_temp1 = `${baseURL}/embifi-website/get-blog-image?key=${arr1[i]?.userData?.key}`;
      let b64 = await getImage(key_temp);
      let bit64 = await getImage(key_temp1);
      arr1[i].image = b64;
      arr1[i].userData.image = bit64;
    }
     setBlogs(arr1);
     return setLoading(false);
  };

  useEffect(()=> {
    getBlogs()
  },[])

  const handleDetailBlog = (blog) => {
    // navigate("/view-blog")
    navigate(
      `/view-blog/${blog?.blog_title?.replaceAll(" ", "-")?.replaceAll(",", "")}`,
      { state: { blog: blog, blogs: blogs } }
    );
  };

  return (
    <>
      <PlainHeader />
      <div className="main-comp">
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Grid container>
            <span className="">
              <b>Blogs</b> | Updates from the Embifi team
            </span>
          </Grid>

          <Grid sx={{
            minHeight: "500px"
          }} className="mt-3" container>
          {loading ?
          (
            <div
              className="loader-cont">
              <div class="lds-facebook"><div></div><div></div><div></div></div>
            </div>
          ) : (
            blogs?.map((blog, index) => {
              return (
                <Grid
                  key={index}
                  sm={12}
                  md={index === 0 ? 12 : 6}
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
                      maxWidth: index === 0 ? 770 : 345,
                      height: index === 0 ? 450 : 345,
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height={index === 0 ? "285" : "140"}
                        image={blog?.image}
                        alt="blog image..."
                      />
                      <CardContent sx={{
                        padding: "16px 0",
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
                            color: "rgba(255, 255, 255, 0.711)",
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
                           {(blog?.createdAt || blog?.updatedAt) && "| "}{moment(blog?.createdAt || blog?.updatedAt).format("Do MMMM, YYYY")}
                          </span>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })
             ) }
          </Grid>
        </Container>
      </div>
      <FooterComp />
    </>
  );
}

export default BLogs;
