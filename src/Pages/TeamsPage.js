import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PlainHeader from "../Components/PlainHeader";
import image1 from "../Assets/svgexport-2.svg";
import image2 from "../Assets/svgexport-3.svg";
import image3 from "../Assets/svgexport-4.svg";
import Man1 from "../Assets/Man-1.svg";
import Man2 from "../Assets/Man-2.svg";
import aboutus_1 from "../Assets/aboutus-img-1.svg";
import aboutus_2 from "../Assets/aboutus-img-2.svg";
import aboutus_3 from "../Assets/aboutus-img-3.svg";
import aboutus_4 from "../Assets/aboutus-img-4.svg";
import { getAllUsersData, baseURL } from "../api/index";
import Box from "../Assets/box.svg";
import "animate.css";
import "../Pages/Team.css";
import { LinkedInIcon } from "../Components/Icons";
import firestore from "../config/firebase";
import FooterComp from "../Components/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import User from "../Assets/user.svg";
import anupam_img from "../Assets/anupam.jpeg";
import kshitij_img from "../Assets/kshitij.jpg";
import team_dp from "../Assets/teamdp.gif";

const imgSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg";

const TeamsPage = () => {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const founders = [
    {
      name: "Anupam Yadav",
      img: anupam_img,
      job_title: "Co-founder & CEO",
      about: "",
      linkedin: "https://www.linkedin.com/in/anupamyadav/",
    },
    {
      name: "Kshitij Sharma",
      img: kshitij_img,
      job_title: "Co-founder & CTO",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
  ];

  const teamTemp = [
    {
      name: "Manish Gusain",
      img: team_dp,
      job_title: "Full Stack Engineer",
      about: "",
      linkedin: "https://www.linkedin.com/in/anupamyadav/",
    },
    {
      name: "Siddharth Taparia",
      img: team_dp,
      job_title: "",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Shahabaz",
      img: team_dp,
      job_title: "Full Stack Engineer",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Shameem Lukman",
      img: team_dp,
      job_title: "Full Stack Engineer",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Prateek Yadav",
      img: team_dp,
      job_title: "Full Stack Engineer",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Samad",
      img: team_dp,
      job_title: "Full Stack Engineer",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Rutvij Patel",
      img: team_dp,
      job_title: "Full Stack Engineer",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Rishabh Ahuja",
      img: team_dp,
      job_title: "Full Stack Engineer",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Gaurav Parashar",
      img: team_dp,
      job_title: "",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Ashutosh",
      img: team_dp,
      job_title: "",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Gaurav Agarwal",
      img: team_dp,
      job_title: "",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Yogesh",
      img: team_dp,
      job_title: "",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Sanjay",
      img: team_dp,
      job_title: "",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Anjali Pathak",
      img: team_dp,
      job_title: "",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Kanupriya",
      img: team_dp,
      job_title: "",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
    {
      name: "Shiraj",
      img: team_dp,
      job_title: "",
      about: "",
      linkedin: "https://www.linkedin.com/in/sharmakshitij/",
    },
  ];

  const getImage = async (key) => {
    // setIsLoading(true);
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
      setIsLoading(false);
      return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(data);
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const { data } = await getAllUsersData();
      console.log(data?.data);
      let arr3 = data?.data;
      for (let i = 0; i < arr3.length; i++) {
        if (arr3[i].key) {
          let key_temp = `${baseURL}/embifi-website/get-blog-image?key=${arr3[i]?.key}`;
          let b64 = await getImage(key_temp);
          arr3[i].image = b64;
        }
      }
      console.log(arr3);
      setTeam(arr3);
      // const snapshot = await firestore.collection("team").get();
      // setTeam(
      //     snapshot.docs.map((doc) => {
      //         const data = doc.data();
      //         data["id"] = doc.id;
      //         return data;
      //     })
      // );
    };
    fetchData();
  }, []);

  return (
    <>
      <PlainHeader />
      <div className="privacy-head-div">
        <Container gap={3}>
          <p className="privacy-heading-about-us underline">Meet Our Team</p>
          {/* <span className="about-us-subtitle">We are a startup in "the" embedded finance space. </span> */}
          <br />
          <br />
          {/* <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>

                            <p>We at embify</p>
                        </Col>
                    </Row> */}
        </Container>
      </div>

      <>
        <Container style={{ marginTop: "2em" }}>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1em 0",
            }}
          >
            <span style={{ display: "contents" }} className="founder-span">
              Meet Our Founders
            </span>
          </Row>

          <Row style={{ justifyContent: "center", gap: "40px" }}>
            {founders.map((val, ind) => {
              return (
                <Col
                  className=" about-card mt-3"
                  md={4}
                  lg={3}
                  sm={6}
                  xs={12}
                  key={ind}
                >
                  {/* <div
                    class="Card border-light mb-3"
                    style={{ width: "220px" }}
                  >
                    <img
                      className="img-round card-img-top"
                      src={val.img || User}
                      style={{
                        borderRadius: "182px",
                        height: "218px",
                        objectFit: "contain",
                      }}
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="details">
                        <p className="name">
                          {val.name}
                          <a
                            href={val.linkedin}
                            target="_blank"
                            style={{ cursor: "pointer" }}
                          >
                            <LinkedInIcon className={"icon"} />
                          </a>
                        </p>
                        <p>{val.job_title}</p>
                        <p>{val.about}</p>
                      </div>
                    </div>
                  </div> */}

                  <div class="card1">
                    <img src={val.img} alt="ceo" class="CardImg" />
                    <div class="team-detail">
                      <h3 class="title">{val.name}</h3>
                      <p class="sub-title">{val.job_title}</p>
                    </div>
                    <a
                      href={val.linkedin}
                      target="_blank"
                      style={{ cursor: "pointer" }}
                    >
                      <LinkedInIcon className={"icon"} />
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>

        {/* <Container style={{ marginTop: '6em' }}>
                    <Row style={{ display: "flex", justifyContent: "center", margin: '1em 0' }}>
                        <span style={{ display: "contents" }} className="founder-span">
                            Our Team
                        </span>
                    </Row>

                    <Row style={{ justifyContent: "center", gap: '40px' }}>
                        {teamTemp.map((val, ind) => {
                            return (
                                <Col className=" about-card mt-3" md={4} lg={3} sm={6} xs={12} key={ind}>
                                    <div class="Card border-light mb-3" style={{ width: "220px" }}>
                                        <img
                                            className="img-round card-img-top"
                                            src={val.img || User}
                                            style={{ borderRadius: "182px", height: "218px", objectFit: 'contain' }}
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <div className="details">
                                                <p className="name">
                                                    {val.name}
                                                    <a href={val.linkedin} target='_blank' style={{ cursor: "pointer" }}>
                                                        <LinkedInIcon className={"icon"} />
                                                    </a>
                                                </p>
                                                <p>{val.job_title}</p>
                                                <p>
                                                    {val.about}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container> */}

        {/* team code */}

        <Container style={{ marginTop: "4em" }}>
          <h3 className="mx-auto text-center meet">Meet Our Team Members</h3>
        </Container>
        <Container className="mt-4 ">
          <Row>
            {team.map((member) => {
              if (
                member.email != "kshitij@embifi.in" &&
                member.email !== "anupam@embifi.in" &&
                member.email !== "admin@embifi.in"
              ) {
                return (
                  <Col
                    className=" about-card mt-3"
                    sx={{
                      minHeight: "700px",
                    }}
                    md={4}
                    lg={3}
                    sm={6}
                    xs={12}
                    key={member.id}
                  >
                    {/* <div
                      class="Card order-light mb-3"
                      style={{ width: "220px" }}
                    >
                      <img
                        className="img-round card-img-top"
                        src={member.image || User}
                        style={{ borderRadius: "50%", height: "218px" }}
                        alt="..."
                      />

                      <p className="name">
                        {member.name}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          style={{ cursor: "pointer" }}
                        >
                          <LinkedInIcon className={"icon"} />
                        </a>
                      </p>
                      <p>{member.job_title}</p>
                      <p>{member.about}</p>
                    </div> */}

                    <div class="card1">
                      <img src={member.image} alt="ceo" class="CardImg" />
                      <div class="team-detail">
                        <h3 class="title">{member.name}</h3>
                        <p class="sub-title">{member.job_title}</p>
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        style={{ cursor: "pointer" }}
                      >
                        <LinkedInIcon className={"icon"} />
                      </a>
                    </div>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </>

      <Container className="mt-2 mb-0">
        <Row style={{ marginTop: "5em" }}>
          <h3 className="mx-auto text-center meet underline">Join Our Team</h3>
        </Row>
        {/* <Row className="row-rev">
                    <Col
                        md={12}
                        lg={8}
                        style={{
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <span style={{ fontWeight: "500", padding: "15px" }}>
                            We advertise roles in Software Development, Product Design and
                            Product Management via <a href="https://www.linkedin.com/company/embifi/" target='_blank'>LinkedIn</a>
                        </span>
                    </Col>
                    <Col
                        md={12}
                        lg={4}
                        style={{
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <img style={{ padding: "15px" }} src={image3} alt="" />
                    </Col>
                </Row> */}
      </Container>

      <Container style={{ marginTop: "4em", marginBottom: "4em" }}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "800",
          }}
        >
          <Col md={6} lg={6} sm={12} xs={12}>
            <p>
              We are looking for self-motivated, smart, first principle thinkers
              who are capable of quickly understanding the use-case, relate it
              to the big picture & focus on execution.
            </p>
            <span style={{ fontWeight: "500" }}>
              Interested in joining us? Send your resume to{" "}
              <a href="mailto:people@embifi.in" target="_blank">
                people@embifi.in
              </a>
            </span>
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            md={6}
            lg={6}
            sm={6}
            xs={6}
          >
            <img
              style={{ width: "50%", minWidth: "300px" }}
              src={aboutus_4}
              alt=""
              className="pulse-2"
            />
          </Col>
        </Row>
      </Container>

      <FooterComp />
    </>
  );
};

export default TeamsPage;
