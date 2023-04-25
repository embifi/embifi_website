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
import { getAllUsersData, baseURL } from "../api/index"
import Box from "../Assets/box.svg";
import 'animate.css';
import "../Pages/Team.css";
import { LinkedInIcon } from "../Components/Icons";
import firestore from "../config/firebase";
import FooterComp from "../Components/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import User from "../Assets/user.svg"

const imgSrc =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg";

const AboutUs = () => {
    const [team, setTeam] = useState([]);

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

    useEffect(() => {
        window.scrollTo(0,0);

        const fetchData = async () => {
            const { data } = await getAllUsersData();
            console.log(data?.data)
            let arr3 = data?.data;
            for (let i = 0; i < arr3.length; i++) {
                if (arr3[i].key) {
                    let key_temp = `${baseURL}/embifi-website/get-blog-image?key=${arr3[i]?.key}`;
                    let b64 = await getImage(key_temp);
                    arr3[i].image = b64;
                }
            }
            console.log(arr3)
            setTeam(arr3)
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
                    <p className="privacy-heading-about-us">About Us</p>
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
            <Container className="mt-4">
                <Row>
                    <p className='' style={{ fontWeight: "800" }}>
                        Taking loans from banks is still a time-consuming process in India, and constant rejections
                        discourage people from doing so.
                    </p>

                </Row>
                {/* <hr />
                <Row className="row-rev">
                    <Col className="image-cont" md={3} sm={3} xs={12}>
                        <img className="about-img" src={aboutus_1} alt="" />
                    </Col>
                    <Col xs={12} className="cont-text">
                        Even after promises of support and subsidies from the authorities, customers often find it hard
                        to finance their needs.
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="image-cont" md={3} sm={3} xs={12}>
                        <img className="about-img" src={aboutus_2} alt="" />
                    </Col>
                    <Col md={8} sm={3} xs={12} className="cont-text">
                        This is where we step in, We provide loan-facilitating platform for smoothening the flow of
                        transactions between our partnered NBFCs/Banks and the borrowers.
                    </Col>
                </Row>
                <hr />
                <Row className="row-rev">
                    <Col className="image-cont" md={3} sm={3} xs={12}>
                        <img className="about-img" src={aboutus_3} alt="" />
                    </Col>
                    <Col md={8} className="cont-text">
                        Our seamless digital process enables the consumers to escape long queues and ever lasting
                        questioning to avail loans on their fingertips.
                    </Col>
                </Row>
                <hr /> */}

                {/* <Row>
                    <center>
                        We have partnered with multiple OEMs and Dealers to assist our consumers in obtaining loans to
                        purchase their E Rickshaw and contribute to the economy in a green and sustainable manner.
                    </center>
                </Row> */}
            </Container>
            <Container className="mt-4">
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "800",
                    }}
                >
                    <Col md={6} lg={6} sm={12} xs={12}>
                        Even after promises of support and subsidies from the authorities, customers often find it hard to finance their needs.
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
                            src={aboutus_1}
                            alt="" className='pulse-2'
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="mt-4">
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "800",
                    }}
                >
                    <Col
                        style={{ display: "flex", justifyContent: "center" }}
                        md={6}
                        lg={6}
                        sm={6}
                        xs={6}
                    >
                        <img
                            style={{ width: "50%", minWidth: "300px" }}
                            src={aboutus_2}
                            alt="" className='pulse-2'
                        />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                        This is where we step in, we provide loan-facilitating platform for the EV ecosystem.
                    </Col>
                </Row>
            </Container>
            <Container className="mt-4">
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "800",
                    }}
                >
                    <Col md={6} lg={6} sm={12} xs={12}>
                        Our seamless digital process enables the consumers to escape long queues and ever lasting questioning to avail loans at their fingertips.
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
                            src={aboutus_3}
                            alt="" className='pulse-2'
                        />
                    </Col>
                </Row>
            </Container>

            {/* <Container className="mt-5">
                <Row>
                    We have partnered with multiple OEMs and Dealers to assist our consumers in obtaining loans to
                    purchase their E Rickshaw and contribute to the economy in a green and sustainable manner.
                </Row>
            </Container> */}

            <Container className="mt-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Row>
                    <Col md={5} lg={5} sm={5} xs={5}>
                        <span className='animate-character'>
                            <h1
                                style={{
                                    marginTop: "5vw",
                                    fontSize: "8rem",
                                    color: "#4c0080",
                                    // color: "linear-gradient( to bottom right, #2e1e5d, #9d31a0 )",
                                }}
                            >
                                Build
                            </h1>
                            <h1 style={{ fontSize: "8rem", color: "#4c0080" }}>Enable</h1>
                            <h1
                                className="build-text"
                                style={{ fontSize: "8rem", color: "#4c0080" }}
                            >
                                Embed
                            </h1>
                        </span>

                    </Col>
                    <Col
                        style={{ display: "flex", justifyContent: "center" }}
                        md={7}
                        lg={7}
                        sm={7}
                        xs={7}
                    >
                        <img style={{ width: "45vw" }} src={Box} alt="" className='vert-move' />
                    </Col>
                </Row>
            </Container>

            {/* <Container className="mt-4">
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "800",
                    }}
                >
                    <Col md={6} lg={6} sm={12} xs={12}>
                        It is challenging and time-consuming to develop & integrate
                        complicated APIs at scale. So, you need to sit back and relax while
                        we do all the complex tasks to improve your business & operations.
                        By utilizing technology and connecting a wide range of financial
                        products to Anchors, Dealers & Distributors, Embifi helps NBFCs
                        maximize productivity and operations at scale.
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
                            src={Man2}
                            alt="" className='pulse'
                        />
                    </Col>
                </Row>
            </Container> */}


            <FooterComp />
        </>
    );
};

export default AboutUs;
