import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
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
import User from "../Assets/user.svg";
import anupam_img from '../Assets/anupam.jpeg';
import kshitij_img from '../Assets/kshitij.jpg';
import team_dp from '../Assets/teamdp.gif';



const TeamsPage = () => {
    const [team, setTeam] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const founders = [
        { name: 'Anupam Yadav', img: anupam_img, job_title: 'Co-founder & CEO', about: "Passionate about Embedded Finance, B2B space, Indian Startup Ecosystem, the exponential growth in the Tier 2, 3, 4 cities and the EV revolution. An alumnus of FMS & IIT Roorkee with 12 years of experience across two unicorn Fintechs & two established MNC banks.", linkedin: "https://www.linkedin.com/in/anupamyadav/" },
        { name: 'Kshitij Sharma', img: kshitij_img, job_title: 'Co-founder & CTO', about: "14+ years of engaging experience at engineering value-based bespoke solutions worked with cross-functional and agile teams across india, uk, tunisia, belgium and romania mostly take contextual approach at problem solving focus on the serverless function of parsing(strategy, product vision, prioritized product back log, features, user stories, tasks);", linkedin: "https://www.linkedin.com/in/sharmakshitij/" }
    ];

    const teamTemp = [
        { name: 'Manish Gusain', img: team_dp, job_title: 'Full Stack Engineer', about: '', linkedin: "https://www.linkedin.com/in/anupamyadav/" },
        { name: 'Siddharth Taparia', img: team_dp, job_title: '', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Shahabaz', img: team_dp, job_title: 'Full Stack Engineer', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Shameem Lukman', img: team_dp, job_title: 'Full Stack Engineer', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Prateek Yadav', img: team_dp, job_title: 'Full Stack Engineer', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Gaurav Parashar', img: team_dp, job_title: '', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Rishabh Ahuja', img: team_dp, job_title: 'Full Stack Engineer', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Samad', img: team_dp, job_title: 'Full Stack Engineer', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Rutvij Patel', img: team_dp, job_title: 'Full Stack Engineer', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Sanjay', img: team_dp, job_title: '', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Anjali Pathak', img: team_dp, job_title: '', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Shiraj', img: team_dp, job_title: '', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Yogesh', img: team_dp, job_title: '', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Kanupriya', img: team_dp, job_title: '', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Gaurav Agarwal', img: team_dp, job_title: '', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
        { name: 'Ashutosh', img: team_dp, job_title: '', about: '', linkedin: "https://www.linkedin.com/in/sharmakshitij/" },
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
            console.log(error)
        }
    };

    useEffect(() => {
        // window.scrollTo(0, 0);

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

    useEffect(() => {
        console.log('-- ', info)
    }, [info])

    return (
        <>
            {/* <PlainHeader /> */}
            {/* <div className="privacy-head-div">
                <Container gap={3}>
                    <p className="privacy-heading-about-us underline text-center">Meet Our Team</p>
                    <br />
                    <br />
                </Container>
            </div> */}


            <>
                <Container style={{ marginTop: '2em' }}>
                    <Row style={{ display: "flex", justifyContent: "center", margin: '1em 0' }}>
                        <span style={{ display: "contents" }} className="founder-span">
                            Our Founders
                        </span>
                    </Row>

                    <Row style={{ justifyContent: "center", gap: '40px' }}>
                        {founders.map((val, ind) => {
                            return (
                                <Col className="about-card mt-3" md={4} lg={3} sm={6} xs={12} key={ind}>
                                    <div class="Card border-light mb-3" style={{ width: "220px" }}>
                                        <img
                                            className="img-round card-img-top"
                                            src={val.img || User}
                                            style={{ borderRadius: "182px", height: "218px", objectFit: 'contain' }}
                                            alt="..."
                                            onClick={() => { handleShow(); setInfo(val); }}
                                        />
                                        <div className="card-body">
                                            <div className="details">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="aboutus-card-name">
                                                        {val.name}
                                                    </p>
                                                    <a href={val.linkedin} target='_blank' style={{ cursor: "pointer" }}>
                                                        <LinkedInIcon className={"icon"} />
                                                    </a>
                                                </div>
                                                <p>{val.job_title}</p>
                                                {/* <p>
                                                    {val.about}
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
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
                                            onClick={() => { handleShow(); setInfo(val); }}
                                        />
                                        <div className="card-body">
                                            <div className="details">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="aboutus-card-name">
                                                        {val.name}
                                                    </p>
                                                    <a href={val.linkedin} target='_blank' style={{ cursor: "pointer" }}>
                                                        <LinkedInIcon className={"icon"} />
                                                    </a>
                                                </div>
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

                <Modal
                    show={show}
                    onHide={handleClose}
                    keyboard={false}
                    centered
                    size="lg"
                >
                    <Modal.Body>
                        <div className="modal-body">
                            <div style={{ width: "218px" }}>
                                <img
                                    src={info?.img}
                                    style={{ borderRadius: "182px", height: "218px", width: "218px", objectFit: 'contain', border: '1px solid grey' }}
                                    alt="..."
                                />
                            </div>
                            <div className="emp-details">
                                <p className="emp-name fw-bolder">
                                    {info?.name}
                                    <a href={info.linkedin} target="_blank" style={{ cursor: "pointer", marginLeft: '0.3em' }}>
                                        <LinkedInIcon className={"icon"} />
                                    </a>
                                </p>
                                <p className="emp-designation">
                                    {info?.job_title}
                                </p>
                                <p className="emp-about">
                                    {info?.about}
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>


            <Container className="mt-2 mb-0">
                <Row style={{ marginTop: '5em' }}>
                    <h3 className="mx-auto text-center meet mb-0">Join Our Team</h3>
                </Row>
            </Container>

            <Container style={{ marginTop: '4em', marginBottom: '4em' }}>
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
                            We are looking for self-motivated, smart, first principle thinkers who are capable of quickly understanding the use-case, relate it to the big picture & focus on execution.
                        </p>
                        <span style={{ fontWeight: "500", }}>
                            Interested in joining us? Send your resume to <a href="mailto:people@embifi.in" target='_blank'>people@embifi.in</a>
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
                            alt="" className='pulse-2'
                        />
                    </Col>
                </Row>
            </Container>

            {/* <FooterComp /> */}
        </>
    );
};

export default TeamsPage;
